import { createStore } from './index';

import reducer from './reducers';

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
}

export default createStore(reducer, initialState);
