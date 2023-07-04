<<<<<<< HEAD
import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import logger from 'use-reducer-logger';
import { Navbar, Container, Image, Carousel, Card } from "react-bootstrap";
import cart from "./image/cart.svg";
import carousel from "./image/carousel.png";
import "./Market.css";



const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, products: action.payload };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function Market() {
  // const [products, setProducts] = useState([]);
  const [{ error, products }, dispatch] = useReducer(logger(reducer), {
    loading: true,
    error: '',
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAIL', payload: error.message });
        return;
      }

      //  setProducts(result.data);
    };
    fetchData();
  }, [error.message]);


  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand className="title fw-bold float-start">
            <h1>Skinlyst</h1>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Container>
        <Container>
          <Navbar.Brand className="fw-bold cart-container">
            <Image src={cart} className="cart" alt="Cart" />
          </Navbar.Brand>
        </Container>
      </Navbar>

      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <Image src={carousel} alt="Slide 1" className="carousel" />
          </Carousel.Item>
          <Carousel.Item>
            <Image src={carousel} alt="Slide 2" className="carousel" />
          </Carousel.Item>
          <Carousel.Item>
            <Image src={carousel} alt="Slide 3" className="carousel" />
          </Carousel.Item>
        </Carousel>
      </div>

      <div>
        {products ? (
          products.map((product) => (
            <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
              {product.description}
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  );
=======
import React from "react";
import './style.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const Market = () => {
    return (
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">Skinlyst</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarSupportedContent" />
  <Navbar.Collapse id="navbarSupportedContent">
    <Nav className="mr-auto">
      <Nav.Link href="#" active>Home</Nav.Link>
      <Nav.Link href="#">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="navbarDropdown">
        <NavDropdown.Item href="#">Action</NavDropdown.Item>
        <NavDropdown.Item href="#">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#" disabled>Disabled</Nav.Link>
    </Nav>
    <Form inline className="w-50">
      <FormControl type="search" placeholder="Search" className="mr-sm-2 w-25 float-start" />
      <Button variant="outline-success ml-3 float-start" className="">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    );
>>>>>>> 76f8497c6e7e0389cd7434f878802759903c087c
}

export default Market;
