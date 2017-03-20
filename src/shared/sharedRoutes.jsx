import React from 'react';
import { Route } from 'react-router';
import App from '../components/app';
import Cart from '../components/cart';
import Payment from '../components/payment';
import Products from '../components/products';
import Profile from '../components/profile';
import Login from '../components/login';
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
          return component.WrappedComponent.loadData();
        }
      } else if (component.loadData) {
        return component.loadData();
      }
    }
    return [];
  }).reduce((flat, toFlatten) => {
    return flat.concat(toFlatten);
  }, []).map((initialAction) => {
    return dispatch(initialAction());
  });

  sendData({
    path: routes.location,
    type: 'navigation'
  });
};

export const routes = (onChange = () => {}) => {
  return (
    <Route path="/" component={App} onChange={onChange}>
      <Route path="/cart" component={Cart} />
      <Route path="/cart/payment" component={Payment} />
      <Route path="/products" component={Products} />
      <Route path="/profile" component={Profile} />
      <Route path="/login" component={Login} />
    </Route>
  );
};


const createSharedRoutes = ({ dispatch }) => {
  beforeRouteRender = beforeRouteRender.bind(this, dispatch);
  return routes(beforeRouteRender);
};

export default createSharedRoutes;
