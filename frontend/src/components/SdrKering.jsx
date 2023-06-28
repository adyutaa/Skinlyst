import React from "react";
import KeringTST from './image/KeringST.svg';
// import logo from './logo.svg';
import './style.css';
import {Navbar,Container,Form,Button} from 'react-bootstrap';


const SliderKering = () => {
  return (
    <div className='gradient-bg'>
    <Navbar>
      <Container>
        <Navbar.Brand className="fw-bold float-start"> <h1>Skinlyst</h1> </Navbar.Brand>
        <Navbar.Toggle />
      </Container>
    </Navbar>

        <div className="midST">
        <div className='p-3'>
        {/* <h1 className=' fw-bold'>Skinlyst</h1> */}
      </div>
      <div className='text-center'>
        <h1 className=''>KNOW YOUR SKIN BETTER</h1>
        <h1>SKINCARE ANALYZER</h1>
      </div>
      <div className='mt-4'>
        <img src={KeringTST} className='app-logo mx-auto d-block' alt="logo" fluid />

        <div id="form-wrapper" className="Slider">
  <Form action="/p/quote.php" method="GET">
    <h1 id="form-title">Kering</h1>
    <div id="debt-amount-slider">
      <Form.Check
        type="radio"
        name="debt-amount"
        id="1"
        value="1"
        required
        label=""
      />
      <p>Normal</p>

      <Form.Check
        type="radio"
        name="debt-amount"
        id="2"
        value="2"
        required
        label=""
      />
      <p>Sedikit Kering</p>

      <Form.Check
        type="radio"
        name="debt-amount"
        id="3"
        value="3"
        required
        label=""
      />
      <p>Kering</p>

      <Form.Check
        type="radio"
        name="debt-amount"
        id="4"
        value="4"
        required
        label=""
      />
      <p>Sangat Kering</p>

      {/* <Form.Check
        type="radio"
        name="debt-amount"
        id="5"
        value="5"
        required
        label=""
      />
      <p>Banyak</p> */}
      <div id="debt-amount-pos"></div>
    </div>
    <Button type="submit" className="custom-button mt-5 d-grid mx-auto fw-bold">LANJUT</Button>
  </Form>
</div>

      </div>
      <div>
        {/* <p className='text-center mt-4'>
         Cek permasalah kulit & kebutuhan skincare untuk kulitmu di Skinlyst!
        </p> */}
      </div>
        </div>
      {/* <div className='d-grid col-2 mx-auto mt-4'>
        <Button className='custom-button fw-bold' href='./tipeKulit' size='lg'>Mulai</Button>
      </div> */}




  </div>
  );
}

export default SliderKering;
