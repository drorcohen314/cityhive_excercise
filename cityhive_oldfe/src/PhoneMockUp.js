import React , {useState, useEffect }  from "react";
import { Card } from "react-bootstrap";
import axios from 'axios';

function PhoneMockUp(props) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios.get(props.url,{auth: {username: props.username, password:props.password}}).then((response) => {
      setMessages(response.data.messages)
      console.log(messages)
    })
  },[]);

  return (
    <>
    <Card style={{ width: '30rem' }}>
        <Card.Body style={{ textAlign: 'center' }}>
        <h2>Message history</h2>    
        {messages.map((message) => {
            return (
                <>
                <div style={{border: '2px solid', borderRadius:'8px',padding: '10px', margin:'18px'}}>
                <Card.Title>{message.from}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Sent at {message.date_updated.slice(0,-6)} to {message.to}</Card.Subtitle>
                <Card.Text style={{border: '1px solid', borderRadius: '8px', padding:'5px'}}>
                {message.body}
                </Card.Text>
                </div>
                </>
            )
        })}
        </Card.Body>
    </Card>
    </>
  );
}

export default PhoneMockUp;