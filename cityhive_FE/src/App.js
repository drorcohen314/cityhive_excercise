import React , {useState, useEffect }  from "react";
import { Container, Row, Col } from "react-bootstrap";
import PhoneMockUp from './PhoneMockUp'
import SendMessage from "./SendMessage";
const serverIP = "127.0.0.1";
const serverPort = "5000"
function App() {
  const url = "http://" + serverIP + ":" + serverPort +"/sms"

  return (
    <div className="App">
      <Container>
        <Row style={{margin:'10px'}}>
        <Col><SendMessage url={url} /></Col>
        <Col><PhoneMockUp url={url} /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;