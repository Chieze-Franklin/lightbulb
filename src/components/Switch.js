import React, { Component } from 'react';
import { Switch as MaterializeSwitch } from 'react-materialize';

import { Consumer } from '../context-api';
import { changeLightBulbState } from '../context-api/actions';

class Switch extends Component {
  switchChanged = (dispatch, e) => {
    dispatch(changeLightBulbState(e.target.checked));
  }
  render() {
    return (<Consumer>
      {value => {
        const {dispatch, state} = value;
        return (<MaterializeSwitch
          offLabel="Off"
          onLabel="On"
          checked={state.on}
          onChange={this.switchChanged.bind(this, dispatch)} />);
      }}
      </Consumer>)
  }
}

export default Switch;
