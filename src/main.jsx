import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router } from 'react-router';
import sharedRoutes from './shared/sharedRoutes';

ReactDOM.render(
  <Router routes={sharedRoutes} history={browserHistory} />,
  document.getElementById('react-content')
);
