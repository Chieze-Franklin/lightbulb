import React, { Component } from 'react';
import { Range as MaterializeRange } from 'react-materialize';

import { Consumer } from '../context-api';
import { changeLightBulbColor } from '../context-api/actions';

class Range extends Component {
  rangeChanged = (dispatch, e) => {
    dispatch(changeLightBulbColor({
      [this.props.name]: e.target.value
    }));
  }
  render() {
    return (<Consumer>
      {value => {
        const {dispatch, color} = value;
        return (<MaterializeRange
          min="0"
          max="255"
          name={this.props.name}
          value={color[this.props.name]}
          onChange={this.rangeChanged.bind(this, dispatch)} />);
      }}
      </Consumer>)
  }
}

export default Range;
