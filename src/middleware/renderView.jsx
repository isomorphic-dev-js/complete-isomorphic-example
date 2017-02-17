import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from '../shared/sharedRoutes';
import HTML from '../components/html';

export default function renderView(req, res, next) {
  const matchOpts = {
    routes,
    location: req.url
  };
  const handleMatchResult = (error, redirectLocation, renderProps) => {
    if (!error && !redirectLocation && renderProps) {
      const app = renderToString(
        <RouterContext
          routes={routes}
          {...renderProps}
        />
      );
      const html = renderToString(<HTML renderedToStringComponents={app} />);
      console.log(`<!DOCTYPE html>${html}`);
      res.send(`<!DOCTYPE html>${html}`);
    } else {
      next();
    }
  };

  match(matchOpts, handleMatchResult);
}
