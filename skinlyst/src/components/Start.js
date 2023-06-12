import React from "react";
import logo from './logo.svg';
import './style.css';
import {Button} from 'react-bootstrap';


const Start = () => {
  return (
    <div className='gradient-bg'>
      <div className='p-3'>
        <h1 className=' fw-bold'>Skinlyst</h1>
      </div>
      <div className='text-center'>
        <h1 className='fw-bold'>KNOW YOUR SKIN BETTER</h1>
        <h1>SKINCARE ANALYZEER</h1>
      </div>
      <div className='mt-4'>
        <img src={logo} className='app-logo mx-auto d-block' alt="logo" fluid />
      </div>
      <div>
        <p className='fw-bold text-center mt-4'>
         Cek permasalah kulit & kebutuhan skincare untuk kulitmu di Skinlyst!
        </p>
      </div>
      <div className='d-grid col-2 mx-auto mt-4'>
        <Button className='custom-button fw-bold' href='./tipeKulit' size='lg'>Mulai</Button>
      </div>
  </div>
  );
}

export default Start;
