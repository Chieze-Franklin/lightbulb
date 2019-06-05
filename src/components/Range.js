import React, { Component } from 'react';

import { Range as MaterializeRange } from 'react-materialize'

class Range extends Component {
  rangeChanged = (e) => {
    console.log(this.props.name + ':' + e.target.value)
  }
  render() {
    return (<MaterializeRange
      min="0"
      max="255"
      name={this.props.name}
      onChange={this.rangeChanged} />)
  }
}

export default Range;
