import React from 'react';
import { Route } from 'react-router';
import App from '../components/app';
import Cart from '../components/cart';
import Products from '../components/products';
import Detail from '../components/detail';
import Blog from '../components/blog';
// import NotFound from '../components/not-found';

const routes = (
  <Route path="/" component={App}>
    <Route path="/cart" component={Cart} />
    <Route path="/products" component={Products} />
    <Route path="/product/detail/:id" component={Detail} />
    <Route path="/blog" component={Blog} />
  </Route>
);

export default routes;
