import React , {useState, useEffect }  from "react";
import { Card, Pagination } from "react-bootstrap";
import axios from 'axios';

function PhoneMockUp(props) {
  const [messages, setMessages] = useState([]);
  const dataLimit = 3;
  const [pages, setPages] = useState(Math.ceil(messages.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMessages(response.data)
    })
  },[]);

  useEffect(() => {
    setPages(Math.ceil(messages.length / dataLimit))
      }, [messages])

  const goToNextPage = () => {
    if (currentPage < pages) { setCurrentPage(currentPage + 1) }
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) { setCurrentPage(currentPage - 1) };
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return messages.slice(startIndex, endIndex);
  };

  return (
    <>
    <Card style={{ width: '30rem' }}>
        <Card.Body style={{ textAlign: 'center' }}>
        <h2>Message history</h2>    
        {getPaginatedData().map((message) => {
            return (
                <>
                <div style={{border: '2px solid', borderRadius:'8px',padding: '10px', margin:'18px'}}>
                <Card.Title>{message.from}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Sent at {message.time.slice(0,-4)} To: {message.to}</Card.Subtitle>
                <Card.Text style={{border: '1px solid', borderRadius: '8px', padding:'5px'}}>
                {message.body}
                </Card.Text>
                </div>
                </>
            )
        })}
        </Card.Body>
        <Pagination className="justify-content-center mt-2">
          <Pagination.Prev onClick={goToPreviousPage}/>
          <Pagination.Item>{currentPage}</Pagination.Item>
          <Pagination.Next onClick={goToNextPage}/>
      </Pagination>
    </Card>
    </>
  );
}

export default PhoneMockUp;