import React , {useState}  from "react";
import {Card, Form, Button, Row, Col } from "react-bootstrap";
import axios from 'axios';

function SendMessage(props) {
  const [number, setNumber] = useState("");
  const [body, setBody] = useState("");
  const handleSubmit= () => {
    const params = new URLSearchParams();
    params.append("To",number)
    params.append("Body",body)
    params.append("From",'+12055768747')
    axios.post(props.url,params,
    {
      auth: {username: props.username, password:props.password },
    } ).then(response => {console.log(response);});
  }

  return (
    <>
        <Card style={{ width: '30rem', padding:'16px', textAlign: 'center'}}>
        <h2>Send SMS</h2>
        <Form style={{margin: '10px'}} onSubmit={handleSubmit}>
          <Form.Group style={{margin: '10px'}}>
            <Row>
                <Col>
                    <Form.Label htmlFor="to">To</Form.Label>
                </Col>
                <Col xs={10}>
                    <Form.Control value={number} onChange={(e) => setNumber(e.target.value)}/>
                </Col>
            </Row>
          </Form.Group>
          <Form.Group>
            <Row>
                <Col><Form.Label htmlFor="message">Body</Form.Label></Col>
                <Col xs={10}><Form.Control as="textarea"
                rows="3"
                value={body}
                onChange={(e) => setBody(e.target.value)} /></Col>
            </Row>
        </Form.Group>
            <Button variant="primary" type="submit" style ={{marginTop: '10px', width: '10rem'}}>
                Send
            </Button>
        </Form>
        </Card>
    </>
  );
}

export default SendMessage;