import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Range as MaterializeRange } from 'react-materialize';

import { changeLightBulbColor } from '../react-redux/actions';

class Range extends Component {
  rangeChanged = (e) => {
    this.props.changeLightBulbColor({
      [this.props.name]: e.target.value
    });
  }
  render() {
    return (<MaterializeRange
      min="0"
      max="255"
      name={this.props.name}
      value={this.props.color[this.props.name]}
      onChange={this.rangeChanged} />)
  }
}

const mapDispatchToProps = {
  changeLightBulbColor
};

const mapStateToProps = state => ({
  color: state.color
});

export default connect(mapStateToProps, mapDispatchToProps)(Range);
