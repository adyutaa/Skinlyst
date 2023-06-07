import React from "react";
import './style.css';
import {Container,Navbar,Card} from 'react-bootstrap';


const Upload = () => {
  return (
    <div className="gradient-bg">
       <Navbar>
      <Container>
        <Navbar.Brand className="fw-bold float-start"> <h1>Skinlyst</h1> </Navbar.Brand>
        <Navbar.Toggle />
      </Container>
    </Navbar>

      {/* <Container fluid className="mid">
       <Row>
          <Col>
          
          </Col>
        </Row>
      </Container> */}

      <div className="mid">
        <div className="text-center p-3">
          <h2>UPLOAD FOTO WAJAH</h2>

             <div className="Card">
             <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                     <Card.Body>
                             <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                       Alwi cangkeman asui
                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                      </Card>
                  </div>
                  <div className="float: left">
                  <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                     <Card.Body>
                             <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                       Alwi cangkeman asui
                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
            </Card>
                  </div>
                  
                  
        </div>
      </div>
    </div>
  );
}

export default Upload;