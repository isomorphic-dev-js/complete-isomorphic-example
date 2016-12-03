// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import { Provider } from 'react-redux';
import { match } from 'react-router';
import routes from '../shared/sharedRoutes';
// import initRedux from '../init-redux.es6';
// import * as actions from '../action-creators.es6';
// import HTML from '../components/html';
// import App from '../components/app';

export default function renderView(req, res, next) {
  const matchOpts = {
    routes,
    location: req.url
  };
  const handleMatchResult = (error, redirectLocation, renderProps) => {
    // if (error) {
    //   next(error);
    // } else if (redirectLocation) {
    //   res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    // } else if (renderProps) {
    //   res.status(200).send('Success, that is a route!');
    // } else {
    //   next();
    // }

    if (!error && renderProps) {
      res.status(200).send('Success, that is a route!');
    } else {
      next();
    }
  };
  match(matchOpts, handleMatchResult);

  // const store = initRedux({ settings: { refresh: 15 } });
  // renderToString(
  //   <Provider>
  //     <RouterContext {...renderProps} />
  //   </Provider>
  // )
  // // Fetch data for the route
  // // This example only has one route
  // //so we assume it needs the getHomePageData action
  // store.dispatch(actions.fetchNotifications()).then(() => {
  //   let html;
  //   const dataToSerialize = store.getState();
  //   // render main view
  //   try {
  //     html = ReactDOM.renderToString(
  //       <Provider store={store}>
  //         <App />
  //       </Provider>
  //     );
  //   } catch(e) {
  //     // Log the error and then call next,
  //     // handle errors in another middleware
  //     console.log("Something went wrong with the render", e);
  //     return next();
  //   }
  //
  //   try {
  //     const renderedHTML = ReactDOM.renderToString(
  //       <HTML data={`window.__INITIAL_STATE =
  //         ${JSON.stringify(dataToSerialize)}`}
  //             html={html} />
  //     )
  //     res.send(renderedHTML)
  //   } catch(e) {
  //     // Log the error and then call next,
  //     // handle errors in another middleware
  //     console.log("Something went wrong with the wrapper render", e);
  //     return next();
  //   }
  // });
}
