import {
  createStore,
  // combineReducers,
  applyMiddleware,
  compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

// What's the recommended way of starting a store that has defaults like settings?
export default function (initialStore = {}) {
  // const reducer = combineReducers({});
  const middleware = [thunkMiddleware, loggerMiddleware()];
  return compose(applyMiddleware(...middleware))(createStore)(null, initialStore);
}
