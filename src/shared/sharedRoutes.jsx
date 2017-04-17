import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/app';
import Cart from '../components/cart';
import Payment from '../components/payment';
import Products from '../components/products';
import ProductList from '../components/productList';
import Profile from '../components/profile';
import Login from '../components/login';
import Detail from '../components/detail';
import { sendData } from '../analytics.es6';

let beforeRouteRender = (dispatch, prevState, nextState) => {
  const { routes } = nextState;
  routes.map((route) => {
    const { component } = route;
    if (component) {
      if (component.displayName &&
        component.displayName.toLowerCase().indexOf('connect') > -1
      ) {
        if (component.WrappedComponent.loadData) {
          return component.WrappedComponent.loadData(nextState.params);
        }
      } else if (component.loadData) {
        return component.loadData(nextState.params);
      }
    }
    return [];
  }).reduce((flat, toFlatten) => {
    return flat.concat(toFlatten);
  }, []).map((initialAction) => {
    return dispatch(initialAction());
  });

  sendData({
    location: nextState.location.pathname,
    type: 'navigation'
  });
};

const developmentRoute =
    process.env.NODE_ENV !== 'production' ?
      <Route path="/dev-test" component={App} />
      : null;

export const routes = (onChange = () => {}) => {
  return (
    <Route path="/" component={App} onChange={onChange}>
      <IndexRoute component={Products} />
      <Route path="cart" component={Cart} />
      <Route path="cart/payment" component={Payment} />
      <Route path="products" component={Products} />
      <Route path="products/:category" component={ProductList} />
      <Route path="product/detail/:product" component={Detail} />
      <Route path="profile" component={Profile} />
      <Route path="login" component={Login} />
      {developmentRoute}
    </Route>
  );
};


const createSharedRoutes = ({ dispatch }) => {
  beforeRouteRender = beforeRouteRender.bind(this, dispatch);
  return routes(beforeRouteRender);
};

export default createSharedRoutes;
