import React, { Component } from 'react';
import { Switch as MaterializeSwitch } from 'react-materialize';

import { connect } from '../context-api-redux';
import { changeLightBulbState } from '../context-api-redux/actions';

class Switch extends Component {
  switchChanged = (e) => {
    this.props.changeLightBulbState(e.target.checked);
  }
  render() {
    return (<MaterializeSwitch
      offLabel="Off"
      onLabel="On"
      checked={this.props.on}
      onChange={this.switchChanged} />)
  }
}

const mapDispatchToProps = {
  changeLightBulbState
};

const mapStateToProps = state => ({
  on: state.state.on
});

export default connect(mapStateToProps, mapDispatchToProps)(Switch);
