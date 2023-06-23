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
                        <h2 className="text-wrapper">FACIAL WASH </h2>
                    </div>
                </div>
            </div>

            <div className="box">
                <div className="rectangle-wrapper">
                    <div className="rectangle" />
                </div>
            </div>
            <div className="box">
                <div className="rectangle-wrapper">
                    <div className="rectangle" />
                </div>
            </div>
            <div className="box">
                <div className="rectangle-wrapper">
                    <div className="rectangle" />
                </div>
            </div>
            <div className="box">
                <div className="rectangle-wrapper">
                    <div className="rectangle" />
                </div>
            </div>
            <div className="box">
                <div className="rectangle-wrapper">
                    <div className="rectangle" />
                </div>
            </div>
            <div className="box">
                <div className="rectangle-wrapper">
                    <div className="rectangle" />
                </div>
            </div>
            <div className="box">
                <div className="rectangle-wrapper">
                    <div className="rectangle" />
                </div>
            </div>
            <div className="box">
                <div className="rectangle-wrapper">
                    <div className="rectangle" />
                </div>
            </div>
        </div>
    </div>
    
    </div>
  )
}

export default JenisSkincare
