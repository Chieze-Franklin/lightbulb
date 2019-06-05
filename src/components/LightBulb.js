import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';

import { Consumer } from '../context-api';

class LightBulb extends Component {
  render() {
    return (<Consumer>
      {value => {
        let color = "white";
        if (!value.state.on) {
          color = "black"
        } else {
          const { alpha, blue, green, red } = value.color;
          color = `rgba(${red}, ${green}, ${blue}, ${Number(alpha) / 255})`;
        }
        return (<FontAwesomeIcon
          icon={faLightbulb}
          size="10x"
          color={color} />);
      }}
      </Consumer>)
  }
}

export default LightBulb;
