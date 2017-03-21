import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/app';
import Cart from '../components/cart';
import Products from '../components/products';
import Profile from '../components/profile';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Products} />
    <Route path="cart" component={Cart} />
    <Route path="products" component={Products} />
    <Route path="profile" component={Profile} />
  </Route>
);

export default routes;
