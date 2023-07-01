import React from 'react';
import '../components/dashboard.css';
import { Card } from 'react-bootstrap';
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LineChart from '../components/LineChart';


const Dashboard = () => {
    return (
        <div className='float-start'>
            <div className='d-flex'>
                <Card className='mt-5' border='secondary' style={{ width: '20rem' }}>
                    <Card.Body className='d-flex align-items-center'>
                        <div className='card-content'>
                            <Card.Title className='judul'>Total Penjualan</Card.Title>
                            <Card.Text>$53,000</Card.Text>
                        </div>
                        <div className='card-image-container'>
                            <Card.Img
                                className='icon'
                                src='https://i.ibb.co/0jZ3Q0H/Rectangle-1.png'
                                alt='gambar'
                            />
                        </div>
                    </Card.Body>
                </Card>

                <Card className='mt-5' border='secondary' style={{ width: '20rem' }}>
                    <Card.Body className='d-flex align-items-center'>
                        <div className='card-content'>
                            <Card.Title className='judul'>Total Penjualan</Card.Title>
                            <Card.Text>$53,000</Card.Text>
                        </div>
                        <div className='card-image-container'>
                            <Card.Img
                                className='icon'
                                src='https://i.ibb.co/0jZ3Q0H/Rectangle-1.png'
                                alt='gambar'
                            />
                        </div>
                    </Card.Body>
                </Card>

                <Card className='mt-5' border='secondary' style={{ width: '20rem' }}>
                    <Card.Body className='d-flex align-items-center'>
                        <div className='card-content'>
                            <Card.Title className='judul'>Total Penjualan</Card.Title>
                            <Card.Text>$53,000</Card.Text>
                        </div>
                        <div className='card-image-container'>
                            <Card.Img
                                className='icon'
                                src='https://i.ibb.co/0jZ3Q0H/Rectangle-1.png'
                                alt='gambar'
                            />
                        </div>
                    </Card.Body>
                </Card>
            </div>

            <div className='informasi d-flex mt-3 no-gutters'>
                <Card className='deskripsi'>
                    <Card.Header>deskripsi</Card.Header>
                </Card>

                <Card className='frame'>
                    <Card.Img
                    className='logo'
                    src='https://i.ibb.co/0jZ3Q0H/Rectangle-1.png'
                    />
                </Card>

                <Card className='dokumentasi'>
                    <Card.Header>dokumentasi</Card.Header>
                    {/* <Card.Img
                    className='logo-dokumentasi'
                    src='https://i.ibb.co/0jZ3Q0H/Rectangle-1.png'
                    /> */}
                </Card>
            </div>

            <div className='grafik d-flex'>
                <Card className='card-scan'>
                    <Card.Text>
                        <h1 className='mt-4'>Scan Your Skin Here</h1>
                    </Card.Text>
                </Card>

                <Card className='card-grafik'>
                    <LineChart />
                </Card>
                
            </div>


        </div>



    );
};

export default Dashboard;
