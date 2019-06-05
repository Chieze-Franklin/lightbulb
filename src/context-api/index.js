import React, { Component } from 'react';

const Context = React.createContext();

export const Provider = Context.Provider;

export class Provider2 extends Component {
  state = {
    color: {
      alpha: '255',
      blue: '255',
      green: '255',
      red: '255'
    },
    state: {
      on: false
    }
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
