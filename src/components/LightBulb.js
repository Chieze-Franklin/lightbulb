import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react';

class LightBulb extends Component {
  render() {
    return (<FontAwesomeIcon
      icon={faLightbulb}
      size="10x"
      color="#ffffffff" />)
  }
}

export default LightBulb;
