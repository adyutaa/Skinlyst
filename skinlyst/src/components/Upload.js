import React from "react";
import './style.css';
import syaratLG1 from './syaratLG1.svg';
import syaratLG2 from './syaratLG2.svg';
import syaratLG3 from './syaratLG3.svg';
import syaratLG4 from './syaratLG4.svg';
import {Container,Navbar,Card,Button,Row,Col} from 'react-bootstrap';


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
          <h2>UPLOAD FOTO WAJAH</h2><br/>

    <Card style={{ width: '15rem' }} className="float-start">
      <Card.Img className="image1" variant="top" src={syaratLG1} />
      <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
        <Card.Text className="pt-3">
          Hapus riasan wajah/makeup pada wajah.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>

    <Card style={{ width: '15rem' }} className="float-start">
      <Card.Img className="image" variant="top" src={syaratLG2} />
      <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
        <Card.Text>
          Pastikan tidak ada sesuatu yang menutupi area wajah.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>

    <Card style={{ width: '15rem' }} className="float-start">
      <Card.Img className="image" variant="top" src={syaratLG3} />
      <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
        <Card.Text>
        pastikan pencahayaan cukup terang.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>

    <Card style={{ width: '15rem' }} className="float-start">
      <Card.Img className="image" variant="top" src={syaratLG4} />
      <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
        <Card.Text>
        Aktifkan kamera dan posisikan wajah ditengah.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

        <div className="text-center mt-5">
          <Row className="justify-content-center">
            <Col xs="auto">
              <Button className="custom-button fw-bold">AMBIL FOTO</Button>
            </Col>
          </Row>

          <Row className="mt-1">
            <Col xs="">
              <Button className="custom-button fw-bold">UPLOAD FOTO DARI GALERI</Button>
            </Col>
          </Row>
        </div>

      </div>
    </div>
  );
}

export default Upload;