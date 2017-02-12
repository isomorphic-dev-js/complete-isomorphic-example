import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router } from 'react-router';
import initRedux from './shared/init-redux.es6';
import sharedRoutes from './shared/sharedRoutes';

const initialState = JSON.parse(window.__SERIALIZED_STATE__);
console.log(initialState);

const store = initRedux(initialState);

function init() {
  ReactDOM.render(
    <Provider store={store}>
      <Router routes={sharedRoutes(store)} history={browserHistory} />
    </Provider>, document.getElementById('react-content'));
}

init();
