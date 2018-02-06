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

  if (matches) {
    const store = initRedux();
    let actions = [];
    matches.map(({route}) => {
      if (route.component && route.component.prefetchActions) {
        actions.push(route.component.prefetchActions());
      }
    });
    actions = actions.reduce((flat, toFlatten) => {
      return flat.concat(toFlatten);
    }, []);

    const promises = actions.map((initialAction) => {
      return store.dispatch(initialAction());
    });
    Promise.all(promises).then(() => {
      const serverState = store.getState();
      const stringifiedServerState = JSON.stringify(serverState);
      const app = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            { renderRoutes(routes) }
          </StaticRouter>
        </Provider>
      );

      if (!context.url) {
        const html = renderToString(
          <HTML
            renderedToStringComponents={app}
            serverState={stringifiedServerState}
          />
        );
        res.send(`<!DOCTYPE html>${html}`);
      }
    });
  } else {
    next();
  }
}
