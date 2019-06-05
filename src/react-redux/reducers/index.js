import { combineReducers } from 'redux';

import colorReducer from './colorReducer';
import stateReducer from './stateReducer';

export default combineReducers({
  color: colorReducer,
  state: stateReducer
});
