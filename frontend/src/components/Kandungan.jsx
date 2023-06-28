import React from 'react'
import {Container,Navbar,Card,Button} from 'react-bootstrap'; 


const kandungan = () => {
  return (
    <div className="gradient-bg">
       <Navbar>
      <Container>
        <Navbar.Brand className="fw-bold float-start"> <h1>Skinlyst</h1> </Navbar.Brand>
        <Navbar.Toggle />
      </Container>
    </Navbar>
    <div className="midST">
        <div className="text-center">
          <p className=" fs-2">KANDUNGAN SKINCARE YANG COCOK UNTUK KULITMU</p>
          <div className="CardKandungan">
          <Card style={{ width: '18rem',height:'24rem'}} className="float-start card-custom">
               {/* <Card.Img className="imageKK" variant="top" src={Flek} /> */}
                <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
                  <Card.Text className=" fs-4">
                    
                  </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
                 </Card.Body>
              </Card>

              <Card style={{ width: '18rem',height:'24rem'}} className="float-start card-custom">
               {/* <Card.Img className="imageKK" variant="top" src={Flek} /> */}
                <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
                  <Card.Text className=" fs-4">
                    
                  </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
                 </Card.Body>
              </Card>

              <Card style={{ width: '18rem',height:'24rem'}} className="float-start card-custom">
               {/* <Card.Img className="imageKK" variant="top" src={Flek} /> */}
                <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
                  <Card.Text className=" fs-4">
                    
                  </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
                 </Card.Body>
              </Card>

          </div>


        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
              <Button type="submit" className="custom-button mt-5 d-grid mx-auto fw-bold">LANJUT</Button>
      </div>
    </div>
  )
}

export default kandungan
