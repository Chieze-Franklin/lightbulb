import React, { Component } from 'react';
import { connect } from 'react-redux';
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

const mapDispatchToProps = {
  deleteTodo,
  toggleTodo
};

const mapStateToProps = state => ({
  todos: state.todos.items
});

export default connect(mapStateToProps, mapDispatchToProps)(Switch);
