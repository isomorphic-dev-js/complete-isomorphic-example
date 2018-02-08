import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { matchRoutes, renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import routes from '../shared/sharedRoutesv4';
import HTML from '../components/html';
import initRedux from '../shared/init-redux.es6';

export default function renderView(req, res, next) {
  const matches = matchRoutes(routes, req.path);
  const context = {}
  let actions = [];

  if (matches) {
    const store = initRedux();
    let actions = [];
    matches.map(({match, route}) => {
      const component = route.component;
      if (component) {
        if (component.displayName &&
            component.displayName.toLowerCase().indexOf('connect') > -1
        ) {
          let parentComponent = component.WrappedComponent
          if (parentComponent.prefetchActions) {
            actions.push(parentComponent.prefetchActions());
          } else if (parentComponent.wrappedComponent && parentComponent.wrappedComponent().prefetchActions) {
            actions.push(parentComponent.wrappedComponent().prefetchActions());
          }
        } else if (component.prefetchActions) {
          actions.push(component.prefetchActions());
        }
      }
    });
    actions = actions.reduce((flat, toFlatten) => {
      return flat.concat(toFlatten);
    }, []);

    const promises = actions.map((initialAction) => {
      return store.dispatch(initialAction());
    });
    Promise.all(promises).then(() => {
      const app = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            { renderRoutes(routes) }
          </StaticRouter>
        </Provider>
      );

      if (!context.url) {
        const html = renderToString(<HTML renderedToStringComponents={app} />);
        res.send(`<!DOCTYPE html>${html}`);
      }
    });
  } else {
    next();
  }
}
