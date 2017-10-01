import React from 'react';
import { renderToString } from 'react-dom-stream/server';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';
import { routes } from '../shared/sharedRoutes';
import initRedux from '../shared/init-redux.es6';
import HTML from '../components/html';
import cache from '../shared/cache.es6';

function flattenStaticFunction(renderProps, staticFnName, store = {}, request) {
  let results = renderProps.components.map((component) => {
    if (component) {
      if (component.displayName &&
        component.displayName.toLowerCase().indexOf('connect') > -1
      ) {
        if (component.WrappedComponent[staticFnName]) {
          return component.WrappedComponent[staticFnName](
            renderProps.params,
            store,
            request
          );
        }
      } else if (component[staticFnName]) {
        return component[staticFnName](
          renderProps.params,
          store,
          request
        );
      }
    }
    return [];
  });

  results = results.reduce((flat, toFlatten) => {
    return flat.concat(toFlatten);
  }, []);

  return results;
}

export default function renderView(req, res, next) {
  const matchOpts = {
    routes: routes(),
    location: req.url
  };
  const handleMatchResult = (error, redirectLocation, renderProps) => {
    if (!error && !redirectLocation && renderProps) {
    //  use caching or streaming, not both
    //   const cachedPage = cache.get(req.url);
    //   if (cachedPage) {
    //     return res.send(cachedPage);
    //   }

      const store = initRedux();
      const actions = flattenStaticFunction(
        renderProps,
        'prefetchActions',
        null,
        req
      );
      const promises = actions.map((initialAction) => {
        return store.dispatch(initialAction());
      });
      Promise.all(promises).then(() => {
        const serverState = store.getState();
        const stringifiedServerState = JSON.stringify(serverState);

        const seoTags = flattenStaticFunction(
          renderProps,
          'createMetatags',
          serverState
        );

        const title = flattenStaticFunction(
          renderProps,
          'getTitle',
          serverState
        );

        const streamApp = renderToString(
          <Provider store={store}>
            <RouterContext routes={routes} {...renderProps} />
          </Provider>
        );
        const streamHTML = renderToString(
          <HTML
            html={streamApp}
            serverState={stringifiedServerState}
            metatags={seoTags}
            title={title}
          />
        );

        // use caching or streaming, not both
        streamHTML.pipe(res, { end: false });
        streamHTML.on('end', () => {
          res.end();
        });

        // use caching or sreaming, not both.
        // cache.set(req.url, `<!DOCTYPE html>${html}`);
        // return res.send(`<!DOCTYPE html>${html}`);
      }).catch(() => {
        return next();
      });
    } else {
      return next();
    }
  };
  match(matchOpts, handleMatchResult);
}
