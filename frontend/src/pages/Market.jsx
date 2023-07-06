import React, { useEffect, useReducer, useState, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Navbar, Container, Image, Carousel, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cart from '../components/image/cart.svg';
import carousel from '../components/image/carousel.png';
import './Market.css';
import Footer from '../components/Footer.jsx';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import { ToastContainer } from 'react-toastify';
import { NavDropdown } from 'react-bootstrap';
import { Store } from '../components/Store';
import 'react-toastify/dist/ReactToastify.css';
import ProductScreen from './ProductScreen';
import SignInScreen from '../scenes/SignIn/SignIn';
import { LinkContainer } from 'react-router-bootstrap';
import ShippingAddressScreen from './ShippingAddress';
import ProfileScreen from './ProfileScreen';
import { getError } from '../utils';
import SearchBox from '../components/searchBox';
import ProductListScreen from './ProductListScreen';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, products: action.payload };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'USER_SIGNOUT':
      return { ...state, userInfo: null, cart: { cartItems: [] } };
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
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       const { data } = await axios.get('/api/products/categories');
  //       setCategories(data);
  //     } catch (err) {
  //       toast.error(getError(err));
  //     }
  //   };
  //   fetchCategories();
  // }, []);

  const [{ error, products, loading }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
    products: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const { data } = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAIL', payload: error.message });
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className={sidebarIsOpen ? 'd-flex flex-column site-container active-cont' : 'd-flex flex-column site-container'}>
        <Navbar>
          <ToastContainer position="bottom-center" limit={1} />
          <Container>
            <Button variant="dark" onClick={() => setSidebarIsOpen(!sidebarIsOpen)}>
              <i className="fas fa-bars"></i>
            </Button>
            <Navbar.Brand className="title fw-bold float-start">
              <h1>Skinlyst</h1>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse id="basic-navbar-nav">
              <SearchBox />
              <Nav className="me-auto w-100 justify-content-end">
                <Link to="/cart" className="nav-link">
                  Cart
                  {cart.cartItems.length > 0 && (
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
                    <NavDropdown.Item onClick={signoutHandler}>Sign Out</NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <Link className="nav-link" to="/signin">
                    Sign In
                  </Link>
                )}
                {userInfo && userInfo.isAdmin && (
                    <NavDropdown title="Admin" id="admin-nav-dropdown">
                      <LinkContainer to="/admin/dashboard">
                        <NavDropdown.Item>Dashboard</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/products">
                        <NavDropdown.Item>Products</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/orders">
                        <NavDropdown.Item>Orders</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/users">
                        <NavDropdown.Item>Users</NavDropdown.Item>
                      </LinkContainer>
                    </NavDropdown>
                  )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className={sidebarIsOpen ? 'active-nav side-navbar d-flex justify-content-between flex-wrap flex-column' : 'side-navbar d-flex justify-content-between flex-wrap flex-column'}>
          <Nav className="flex-column text-white w-100 p-2">
            <Nav.Item>
              <strong>Categories</strong>
            </Nav.Item>
            {categories.map((category) => (
              <Nav.Item key={category}>
                <LinkContainer to={`/search/category=${category}`} onClick={() => setSidebarIsOpen(false)}>
                  <Nav.Link>{category}</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            ))}
          </Nav>
        </div>
      </div>
      <Container>
        <Navbar.Brand className="fw-bold cart-container">
          <Image src={cart} className="cart" alt="Cart" />
        </Navbar.Brand>
      </Container>
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
      <div className="card-container">
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Error: {error}</h1>
        ) : (
          <div className="card-grid">
            {products.map((product) => (
              <div className="product" key={product.slug}>
                <Link to={`/product/${product.slug}`}>
                  <Card className="card" style={{ width: '10rem' }}>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                      <h6>
                        {product.name.length > 35 ?
                        `${product.name.substring(0, 35)}...` :product.name}
                      </h6>
                      <p>{product.price}</p>
                      <Link to={`/product/${product.slug}`}>
                        <Button size="sm" variant="dark">
                          Add to Cart
                        </Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="footer1">
        <Footer />
      </div>
      <Footer />
    </>
  );
}

export default Market;
