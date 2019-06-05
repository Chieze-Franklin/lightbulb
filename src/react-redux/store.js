import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const initialState = {
  color: {
    alpha: '255',
    blue: '255',
    green: '255',
    red: '255'
  },
  state: {
    on: false
  }
};

const middleware = [thunk];

const devtools = process.env.NODE_ENV === 'test'
  ? x => x /* eslint-disable no-underscore-dangle */
  : window.__REDUX_DEVTOOLS_EXTENSION__
      && window.__REDUX_DEVTOOLS_EXTENSION__();
/* eslint-enable no-underscore-dangle */

export default createStore(rootReducer, initialState, compose(
  applyMiddleware(...middleware),
  devtools
));
