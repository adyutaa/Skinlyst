import React from 'react'
import "./ProdukToner.css"
import avoskin from "./image/avioskin.png"
import whitelab from "./image/whitelab.png"
import wardah from "./image/wardah.png"
import yuja from "./image/yuja.png"
import {Container,Navbar,Button} from 'react-bootstrap'
// import {Link} from 'react-router-dom'

const ProdukToner = () => {
  return (
    <div className='gradient-bg'>
      <Navbar>
        <Container>
          <Navbar.Brand className="fw-bold float-start"> <h1>Skinlyst</h1> </Navbar.Brand>
          <Navbar.Toggle />
        </Container>
      </Navbar>

      <div className="box">
        <div className="rectangle-wrapper">
          <div className="rectangle-toner-keterangan">
            <h2 className="text-wrapper fw-bold">TONER</h2>
            <p className="p-wrapper">
            Toner adalah salah satu produk skincare yang mengandung bahan aktif untuk menghilangkan kotoran, minyak,
            hingga sisa makeup. Selain itu, fungsi toner juga dapat menambah kelembapan pada kulit supaya tidak kering
            setelah mencuci muka. Toner merupakan langkah kedua dari proses pembersihan. Manfaatnya, bila digunakan dengan
            benar, adalah dapat membantu menghilangkan kelebihan minyak dan sel kulit mati yang mungkin tersisa di wajah
            setelah mencuci muka.
            <br /><br />
            Berikut adalah berbagai fungsi toner untuk kulitmu:
            <br />
            1. Menyeimbangkan pH
            <br />
            2.
            <br />
            3.
            </p>
          </div>
        </div>

        <div className="box">
          <div className="rectangle-wrapper">
            <div className="rectangle-toner-produk">
              <h2 className="text-wrapper fw-bold">REKOMENDASI MEREK TONER</h2>

                <div className='produk'>
                  <div className="group">
                    <img className="img-produk" alt="Rectangle" src={avoskin} />
                    <div className="text-wrapper-4 fw-bold">AVOSKIN</div>
                  </div>

                  <div className="group">
                    <img className="img-produk" alt="Rectangle" src={whitelab} />
                    <div className="text-wrapper-4 fw-bold">WHITELAB</div>
                  </div>
                </div>

                <div className='produk'>
                  <div className="group">
                    <img className="img-produk" alt="Rectangle" src={yuja} />
                    <div className="text-wrapper-4 fw-bold">YUJA</div>
                  </div>

                  <div className="group">
                    <img className="img-produk" alt="Rectangle" src={wardah} />
                    <div className="text-wrapper-4 fw-bold">WARDAH</div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        <div className='label'>
          <p>Ingin cari harga produk paling murah di e-commerce?</p>
          <Button className="custom-button">Cari</Button>
        </div>

      </div>



    </div>
  )
}

export default ProdukToner
