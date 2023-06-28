import React from 'react'
import './style.css';
import Flek from './image/Flek.svg';
import Kusam from './image/Kusam.svg';
import Sensitif from './image/Sensitif.svg';
import Jerawat from './image/Jerawat.svg';
import {Container,Navbar,Card} from 'react-bootstrap'; 

const KondisiKulit = () => {
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
          <p className=" fs-2">PILIH KONDISI KULITMU!</p>

             <div className="CardKK">
              <a href="ukur-kering">
              <Card style={{ width: '15rem'}} className="float-start hover">
               <Card.Img className="imageKK" variant="top" src={Flek} />
                <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
                  <Card.Text className=" fs-4">
                    Flek
                  </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
                 </Card.Body>
              </Card>
              </a>

              <a href="ukur-minyak">
              <Card style={{ width: '15rem' }} className="float-start hover">
                <Card.Img className="imageKK" variant="top" src={Kusam} />
                  <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
                    <Card.Text className=" fs-4">
                      Kusam
                    </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
              </Card>
              </a>

              <a href="/">
                <Card style={{ width: '15rem' }} className="float-start hover">
                  <Card.Img className="imageKK" variant="top" src={Sensitif} />
                    <Card.Body>
                      <Card.Text className="fs-4">
                        Sensitif
                     </Card.Text>
                    </Card.Body>
                </Card>
              </a>

              <a href="/">
                <Card style={{ width: '15rem' }} className="float-start hover">
                  <Card.Img className="imageKK" variant="top" src={Jerawat} />
                    <Card.Body>
                      <Card.Text className="fs-4">
                        Jerawat
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
  )
}

export default KondisiKulit
