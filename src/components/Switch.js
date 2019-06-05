import React, { Component } from 'react';

import { Switch as MaterializeSwitch } from 'react-materialize'

class Switch extends Component {
  switchChanged = (e) => {
    console.log(e.target.checked)
  }
  render() {
    return (<MaterializeSwitch
      offLabel="Off"
      onLabel="On"
      onChange={this.switchChanged} />)
  }
}

export default Switch;
