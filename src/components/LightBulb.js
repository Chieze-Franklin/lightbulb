import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';

import { connect } from '../context-api-redux';

class LightBulb extends Component {
  render() {
    let color = "white";
    if (!this.props.on) {
      color = "black"
    } else {
      const { alpha, blue, green, red } = this.props.color;
      color = `rgba(${red}, ${green}, ${blue}, ${Number(alpha) / 255})`;
    }
    return (<FontAwesomeIcon
      icon={faLightbulb}
      size="10x"
      color={color} />)
  }
}

const mapStateToProps = state => ({
  color: state.color,
  on: state.state.on
});

export default connect(mapStateToProps, null)(LightBulb);
