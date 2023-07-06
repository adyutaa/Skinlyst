import { useContext } from 'react';
import '../css/Cart.css'
import { Store } from '../components/Store';
import { Helmet } from 'react-helmet-async';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MessageBox from '../components/MessageBox';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function CartScreen() {
    const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const updateCartHandler = async (item, quantity) => {
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };
  const removeItemHandler = (item) => {
    ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };

  const checkoutHandler = () => {
    navigate('/signin?redirect=/shipping');
  };


  return (
    <div className=''>
      <Helmet>
        <title>Shopping Cart</title>
      </Helmet>
      <h1 className='judul'>Shopping Cart</h1>
      <Row className=''>
        <Col className='pesan' md={8}>
          { cartItems.length === 0 ? (
            <MessageBox className="yoi">
              <h5>Cart is empty.</h5> <Link to="/Market">Go Shopping</Link>
            </MessageBox>
          ) : (
            <ListGroup>
              {cartItems.map((item) => (
                <ListGroup.Item className='p' key={item._id}>
                  <Row className="align-items-center">
                    <Col md={4}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded img-thumbnail"
                      ></img>{' '}
                      <Link className='nama-item' to={`/product/${item.slug}`}>{item.name}</Link>
                    </Col>

                    <Col md={3}>
                    <Button
                        className='btn-add'
                        onClick={() =>
                          updateCartHandler(item, item.quantity - 1)
                        }
                        variant="light"
                        disabled={item.quantity === 1}
                      >
                        <i className="fas fa-minus-circle">+</i>
                      </Button>{' '}
                      <span className='jumlah'>{item.quantity}</span>{' '}
                      <Button
                      className='btn-min'
                      variant="light"
                      disabled={item.quantity === item.countInStock}
                      >
                        <i className="fas fa-plus-circle">-</i>
                      </Button>
                    </Col>

                    <Col  className='price' md={3}> <h5>IDR {item.price}</h5> </Col>
                    <Col md={2}>
                    <Button
                        className='btn'
                        onClick={() => removeItemHandler(item)}
                        variant="danger"
                      >
                        <i className="fas fa-trash">Hapus</i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4} className='box'>
          <Card>
            <Card.Body className='card-cart'>
              <ListGroup variant="flush" className='subtotal'>
                <ListGroup.Item>
                  <h3>
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                    items) : $
                    {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                  </h3>
                </ListGroup.Item>

                <ListGroup.Item className='subtotal'>
                  <div className="d-grid">
                    <Button
                      type="button"
                                          variant="dark"
                                          // className='btn-kuh'
                                          onClick={checkoutHandler}
                      disabled={cartItems.length === 0}
                      >
                      Proceed to Checkout
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}