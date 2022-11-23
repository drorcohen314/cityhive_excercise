import React , {useState, useEffect }  from "react";
import { Container, Row, Col } from "react-bootstrap";
import PhoneMockUp from './PhoneMockUp'
import SendMessage from "./SendMessage";

function App() {
  const username = 'ACa074d5e3ffa8dd5f2cd2a740218fe23e'
  const password = '5bea73159cfab1f3b97cef9abd31bc09'
  const url = "https://api.twilio.com/2010-04-01/Accounts/" + username + "/Messages.json"

  return (
    <div className="App">
      <Container>
        <Row style={{margin:'10px'}}>
        <Col><SendMessage url={url} password={password} username={username} /></Col>
        <Col><PhoneMockUp url={url} password={password} username={username}/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;