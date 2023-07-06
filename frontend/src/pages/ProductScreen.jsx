import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import { Card, Col,ListGroup,Row,Badge,Button } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { Store } from "../components/Store";
// import { L } from "@fullcalendar/list/internal-common";

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true, error: '' };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, product: action.payload };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};


function ProductScreen() {
    const navigate = useNavigate();
    const params = useParams();
    const { slug } = params;

    const [{ error, product, loading }, dispatch] = useReducer(reducer, {
        loading: true,
        error: '',
        product: []
    });

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const result = await axios.get(`/api/products/slug/${slug}`);
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
            } catch (error) {
                dispatch({ type: 'FETCH_FAIL', payload: error.message });
                return;
            }
        };
        fetchData();
    }, [slug]);
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart } = state;
    const addToCartHandler = async () => {
        const existItem = cart.cartItems.find((x) => x._id === product._id);
        const quantity = existItem ? existItem.quantity + 1 : 1;
        console.log("ppppp");
        const { data } = await axios.get(`/api/products/${product._id}`);
        if (data.countInStock < quantity) {
          window.alert('Sorry. Product is out of stock');
          return;
        }
      ctxDispatch({
        type: 'CART_ADD_ITEM',
        payload: { ...product, quantity },
      });
        navigate('/cart')
    };
    return loading? (
        <div>loading...</div>
    ) : error? (
        <div>{error}</div>
    ) : (
        <Row>
            <Col md={6}>
                <img
                className="img-fluid"
                 src= {"http://localhost:8080/" + product.image}
                 alt={product.name} 
                />
            </Col>
            <Col md={3}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Helmet>
                         <title>{product.name}</title>
                        </Helmet>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        {/* <Rating> */}
                            rating={product.rating}
                            numReviews={product.numReviews}
                        {/* </Rating> */}
                    </ListGroup.Item>
                    <ListGroup.Item>Price : ${product.price}</ListGroup.Item>
                    <ListGroup.Item>Description :
                         <p>{product.description}</p></ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <Card.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price :</Col>
                                    <Col>${product.price} </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>status :</Col>
                                    <Col>
                                    {product.countInStock> 0 ?(
                                    <Badge bg="succes">In Stock</Badge>
                                    ) : (
                                    <Badge bg="danger">Unavailable</Badge>

                                    )} </Col>
                                </Row>
                            </ListGroup.Item>
                            {product.countInStock > 0 && (
                                <ListGroup.Item>
                                    <div className="d-grid">
                                    <Button onClick={addToCartHandler} variant="primary">
                        Add to Cart
                      </Button>
                                                
                                    </div>
                                </ListGroup.Item>
                                )}
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default ProductScreen;