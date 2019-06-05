import React, { Component } from 'react';
import { Switch as MaterializeSwitch } from 'react-materialize';

import { Consumer } from '../context-api';

class Switch extends Component {
  switchChanged = (e) => {
    console.log(e.target.checked)
  }
  render() {
    return (<Consumer>
      {value => {
        return (<MaterializeSwitch
          offLabel="Off"
          onLabel="On"
          checked={value.state.on}
          onChange={this.switchChanged} />);
      }}
      </Consumer>)
  }
}

export default Switch;
