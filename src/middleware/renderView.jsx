import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import routes from '../shared/sharedRoutes';
import HTML from '../components/html';
import initRedux from '../shared/init-redux.es6';

export default function renderView(req, res, next) {
  const matchOpts = {
    routes,
    location: req.url
  };
  const handleMatchResult = (error, redirectLocation, renderProps) => {
    if (!error && !redirectLocation && renderProps) {
      const store = initRedux();
      let actions = renderProps.components.map((component) => {
        if (component) {
          if (component.displayName &&
              component.displayName.toLowerCase().indexOf('connect') > -1
          ) {
            if (component.WrappedComponent.prefetchActions) {
              return component.WrappedComponent.prefetchActions();
            }
          } else if (component.prefetchActions) {
            return component.prefetchActions();
          }
        }
        return [];
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
            <RouterContext routes={routes} {...renderProps} />
          </Provider>
        );
        const html = renderToString(<HTML renderedToStringComponents={app} />);
        res.send(`<!DOCTYPE html>${html}`);
      });
    } else {
      next();
    }
  };

  match(matchOpts, handleMatchResult);
}
