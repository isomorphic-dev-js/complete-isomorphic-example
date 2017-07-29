import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import products from './products-reducer.es6';
import cart from './cart-reducer.es6';

export default function (initialStore = {}) {
  const reducer = combineReducers({
    products,
    cart
  });
  const middleware = [thunkMiddleware, loggerMiddleware];
  return compose(
      applyMiddleware(...middleware)
    )(createStore)(reducer, initialStore);
}
