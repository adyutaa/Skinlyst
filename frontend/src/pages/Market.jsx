import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import { Navbar, Container, Image, Carousel, Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import cart from "..//components/image/cart.svg";
=======
import cart from "../components/image/cart.svg";
>>>>>>> 6d1783120e3da652515dea75ecfbb16bfa3b9565
import carousel from "../components/image/carousel.png";
import "./Market.css";
import Footer from "../components/Footer.jsx";
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import { ToastContainer } from 'react-toastify';
import { NavDropdown } from 'react-bootstrap';
import { Store } from '../components/Store';
import 'react-toastify/dist/ReactToastify.css';
import ProductScreen from './ProductScreen';
import SignInScreen from '../scenes/SignIn/SignIn';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext } from 'react';
import ShippingAddressScreen from './ShippingAddress';

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
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
  };

  const [{ error, products, loading }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
    products: []
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
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar>
        <ToastContainer position='bottom-center' limit={1} />
        <Container>
          <Navbar.Brand className="title fw-bold float-start">
            <h1>Skinlyst</h1>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  Cart
                  {cart.cartItems?.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
            </Link>
            {userInfo ? (
                  <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>User Profile</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/orderhistory">
                      <NavDropdown.Item>Order History</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <Link
                      className="dropdown-item"
                      to="#signout"
                      onClick={signoutHandler}
                    >
                      Sign Out
                    </Link>
                  </NavDropdown>
                ) : (
                  <Link className="nav-link" to="/signin">
                    Sign In
                  </Link>
                )}
              </Nav>
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

      <div className='card-container'>
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Error: {error}</h1>
        ) : (
          <div className="card-grid">
            {products.map((product) => (
              <div className='product' key={product.slug}>
                <Link to={`/product/${product.slug}`} />
                <Card className='card' key={product.id} style={{ width: '10rem' }}>
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>

                    <h6>{product.name}</h6>

                    <p>{product.price}</p>
                    <Link to={`/product/${product.slug}`}>
                      <Button size='sm' variant="dark">Add to Cart</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className='footer1'>
        <Footer />
      </div>

    </>
  );
}

export default Market;