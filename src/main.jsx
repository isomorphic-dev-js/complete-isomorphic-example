import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './shared/sharedRoutesv4';
import initRedux from './shared/init-redux.es6';

const initialState = JSON.parse(window.__SERIALIZED_STATE__);
console.log(initialState);

const store = initRedux(initialState);

function init() {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        { renderRoutes(routes) }
      </BrowserRouter>
    </Provider>,
    document.getElementById('react-content')
  );
}

init();
