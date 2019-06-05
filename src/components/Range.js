import React, { Component } from 'react';
import { Range as MaterializeRange } from 'react-materialize';

import { Consumer } from '../context-api';

class Range extends Component {
  rangeChanged = (e) => {
    console.log(this.props.name + ':' + e.target.value)
  }
  render() {
    return (<Consumer>
      {value => {
        return (<MaterializeRange
          min="0"
          max="255"
          name={this.props.name}
          value={value.color[this.props.name]}
          onChange={this.rangeChanged} />);
      }}
      </Consumer>)
  }
}

export default Range;
