import React from 'react';
import { Row, Col } from 'react-materialize';

import './App.css';
import LightBulb from './components/LightBulb';
import Range from './components/Range';
import Switch from './components/Switch';
import { Provider } from './context-api';

const state = {
  color: {
    alpha: '50',
    blue: '100',
    green: '200',
    red: '255'
  },
  state: {
    on: !false
  }
}

function App() {
  return (
    <Provider value={state}>
      <div className="App">
        <header className="App-header">
          <Row>
            <Switch />
          </Row>
          <Row>
            <Col>
              <Row>
              <Range name="red" />
              </Row>
              <Row>
              <Range name="green" />
              </Row>
              <Row>
              <Range name="blue" />
              </Row>
            </Col>
            <Col>
              <LightBulb />
            </Col>
          </Row>
          <Row>
            <Range name="alpha" />
          </Row>
        </header>
      </div>
    </Provider>
  );
}

export default App;
