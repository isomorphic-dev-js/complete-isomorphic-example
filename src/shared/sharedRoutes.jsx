import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/app';
import Cart from '../components/cart';
import Products from '../components/products';
import Detail from '../components/detail';
import Blog from '../components/blog';
// import NotFound from '../components/not-found';

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
};

export const routes = (onChange = () => {}) => {
  return (
    <Route path="/" component={App} onChange={onChange}>
      <IndexRoute component={Products} />
      <Route path="cart" component={Cart} />
      <Route path="products" component={Products} />
      <Route path="product/detail/:id" component={Detail} />
      <Route path="blog" component={Blog} />
    </Route>
  );
};


const createSharedRoutes = ({ dispatch }) => {
  beforeRouteRender = beforeRouteRender.bind(this, dispatch);
  return routes(beforeRouteRender);
};

export default createSharedRoutes;
