import React , {useState, useEffect }  from "react";
import { Container, Row, Col } from "react-bootstrap";
import PhoneMockUp from './PhoneMockUp'
import SendMessage from "./SendMessage";
function App() {
  const url = "https://cityhive-drorcohen.herokuapp.com/sms"

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