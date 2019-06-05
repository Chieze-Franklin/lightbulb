import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Row, Col } from 'react-materialize'

import './App.css';
import Range from './components/Range'
import Switch from './components/Switch'

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
            <FontAwesomeIcon icon={faLightbulb} size="10x" color="#ffffffff" />
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
