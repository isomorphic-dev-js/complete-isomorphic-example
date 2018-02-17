import React from 'react';
// use for streaming
//import { renderToString } from 'react-dom-stream/server';
// use for caching
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router';
import {matchRoutes, renderRoutes} from 'react-router-config';
import {Provider} from 'react-redux';
import routes from '../shared/sharedRoutesv4.es6';
import HTML from '../components/html';
import initRedux from '../shared/init-redux.es6';
import cache from '../shared/cache.es6';

function flattenStaticFunction(matches, staticFnName, store = {}, request) {
  let results = matches.map(({match, route}) => {
    const component = route.component;
    if (component) {
      if (component.displayName &&
          component.displayName.toLowerCase().indexOf('connect') > -1
      ) {
        let parentComponent = component.WrappedComponent
        if (parentComponent[staticFnName]) {
          return parentComponent[staticFnName](
            request.params[0],
            store,
            request
          );
        } else if (parentComponent.wrappedComponent && parentComponent.wrappedComponent()[staticFnName]) {
          return parentComponent.wrappedComponent()[staticFnName](
            request.params[0],
            store,
            request
          );
        }
      } else if (component[staticFnName]) {
        return component[staticFnName](
          request.params[0],
          store,
          request
        )
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
  const matches = matchRoutes(routes, req.path);
  const context = {}

  if (matches) {
    const cachedPage = cache.get(req.url);
    // if (cachedPage) {
    //   return res.send(cachedPage);
    // }

    const store = initRedux();
    const actions = flattenStaticFunction(
      matches,
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
        matches,
        'createMetatags',
        serverState,
        req
      );

      const title = flattenStaticFunction(
        matches,
        'getTitle',
        serverState,
        req
      );

      const streamApp = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            { renderRoutes(routes) }
          </StaticRouter>
        </Provider>
      );

      if (!context.url) {
        const streamHTML = renderToString(
          <HTML
            html={streamApp}
            serverState={stringifiedServerState}
            metatags={seoTags}
            title={title}
          />
        );
        // use caching or streaming, not both
        // streamHTML.pipe(res, { end: false });
        // streamHTML.on('end', () => {
        //   res.end();
        // });

        // use caching or sreaming, not both.

        // cache.set(req.url, `<!DOCTYPE html>${streamHTML}`);
        return res.send(`<!DOCTYPE html>${streamHTML}`);
      } else {
        return next();
      }
    });
  } else {
    return next();
  }
}
