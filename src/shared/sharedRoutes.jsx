import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/app';
import Cart from '../components/cart';
import Products from '../components/products';
import Profile from '../components/profile';
import Login from '../components/login';

const trackPageView = () => {
  // In real life you would hook this up to your analytics tool of choice
  console.log('Tracked a pageview');
};

const onEnter = () => {
  // In real life you would hook this up to your analytics tool of choice
  console.log('OnEnter');
  trackPageView();
};

const onChange = () => {
  // In real life you would hook this up to your analytics tool of choice
  console.log('OnChange');
  trackPageView();
};

const routes = (
  <Route path="/" component={App} onEnter={onEnter} onChange={onChange}>
    <IndexRoute component={Products} />
    <Route path="cart" component={Cart} />
    <Route path="products" component={Products} />
    <Route path="profile" component={Profile} />
    <Route path="login" component={Login} />
  </Route>
);

export default routes;
