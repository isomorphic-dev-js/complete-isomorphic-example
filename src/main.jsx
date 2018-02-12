import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
// import routes from './shared/sharedRoutesv4';
import App from './components/app';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('react-content')
);
