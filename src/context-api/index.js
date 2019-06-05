import React, { Component } from 'react';

import reducer from './reducers';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    color: {
      alpha: '255',
      blue: '255',
      green: '255',
      red: '255'
    },
    state: {
      on: false
    },
    dispatch: action => this.setState(state => reducer(state, action))
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;
