import React from 'react';
import { Row, Col } from 'react-materialize';

import './App.css';
import LightBulb from './components/LightBulb';
import Range from './components/Range';
import Switch from './components/Switch';

function App() {
  return (
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
  );
}

export default App;
