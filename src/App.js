import React from 'react';
import { Provider } from 'react-redux';
import { Row, Col } from 'react-materialize';

import './App.css';
import LightBulb from './components/LightBulb';
import Range from './components/Range';
import Switch from './components/Switch';
import store from './react-redux/store';

function App() {
  return (
    <Provider store={store}>
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
