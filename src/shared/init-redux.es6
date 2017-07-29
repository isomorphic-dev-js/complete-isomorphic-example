import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import cart from './cart-reducer.es6';

export default function (initialStore = {}) {
  const reducer = combineReducers({
    cart
  });
  const middleware = [thunkMiddleware, loggerMiddleware];
  return compose(
      applyMiddleware(...middleware)
    )(createStore)(reducer, initialStore);
}
