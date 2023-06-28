import React from 'react'
import './JenisSkincare.css'
import {Navbar,Container} from 'react-bootstrap'

const JenisSkincare = () => {
  return (
    <div className='gradient-bg'>
       <Navbar>
      <Container>
        <Navbar.Brand className="fw-bold float-start"> <h1>Skinlyst</h1> </Navbar.Brand>
        <Navbar.Toggle />
      </Container>
    </Navbar>

    <div>
        <div className='text-center'>
            <h2>PILIH JENIS SKINCARE YANG KAMU BUTUHKAN</h2>
        </div>

        <div className='wadah'>
            <div className="box">
                <div className="rectangle-wrapper">
                    <div className="rectangle">
                        <h2 className="text-wrapper fw-bold">FACIAL WASH </h2>
                    </div>
                </div>
            </div>

            <div className="box">
                <div className="rectangle-wrapper">
                    <div className="rectangle">
                        <h2 className="text-wrapper fw-bold">TONER </h2>
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="rectangle-wrapper">
                    <div className="rectangle">
                        <h2 className="text-wrapper fw-bold">MOISTURIZER </h2>
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="rectangle-wrapper">
                    <div className="rectangle">
                        <h2 className="text-wrapper fw-bold">SUNSCREEN </h2>
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="rectangle-wrapper">
                    <div className="rectangle">
                        <h2 className="text-wrapper fw-bold">MICELAR WATER </h2>
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="rectangle-wrapper">
                    <div className="rectangle">
                        <h2 className="text-wrapper fw-bold">SERUM </h2>
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="rectangle-wrapper">
                    <div className="rectangle">
                        <h2 className="text-wrapper fw-bold">ESSENCE </h2>
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="rectangle-wrapper">
                    <div className="rectangle">
                        <h2 className="text-wrapper fw-bold">EYE CREAM </h2>
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="rectangle-wrapper">
                    <div className="rectangle">
                        <h2 className="text-wrapper fw-bold">MASK </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </div>
  )
}

export default JenisSkincare
