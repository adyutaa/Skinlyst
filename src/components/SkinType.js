import React from "react";
import './style.css';
import NormalST from './NormalST.svg';
import BerminyakST from './BerminyakST.svg';
import KeringTST from './KeringST.svg';
import {Container,Navbar,Card} from 'react-bootstrap'; 

const SkinType = () => {
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

      <div className="midST">
        <div className="text-center p-3">
          <p className=" fs-2">PILIH JENIS KULITMU</p>

             <div className="CardST">
              <a href="ukur-kering">
              <Card style={{ width: '15rem'}} className="float-start hover">
               <Card.Img className="imageST" variant="top" src={KeringTST} />
                <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
                  <Card.Text className=" fs-4">
                    Kering
                  </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
                 </Card.Body>
              </Card>
              </a>

              <a href="ukur-minyak">
              <Card style={{ width: '15rem' }} className="float-start hover">
                <Card.Img className="imageST" variant="top" src={BerminyakST} />
                  <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
                    <Card.Text className=" fs-4">
                      Berminyak
                    </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
              </Card>
              </a>

              <a href="/">
                <Card style={{ width: '15rem' }} className="float-start hover">
                  <Card.Img className="imageST" variant="top" src={NormalST} />
                    <Card.Body>
                      <Card.Text className="fs-4">
                        Normal
                     </Card.Text>
                    </Card.Body>
                </Card>
              </a>


          </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

          {/* <div className="text-center mt-5">
            <Row className="justify-content-center">
              <Col xs="auto">
                <Button className="custom-button fw-bold text-center fs-5">SELANJUTNYA</Button>
              </Col>
            </Row>
          </div> */}

        </div>
      </div>
    </div>
  );
}

export default SkinType;