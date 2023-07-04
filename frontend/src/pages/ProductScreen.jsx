import { useParams } from "react-router-dom";
import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import { Card, Col,ListGroup,Row,Badge,Button } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
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
    return loading? (
        <div>loading...</div>
    ) : error? (
        <div>{error}</div>
    ) : (
        <Row>
            <Col md={6}>
                <img
                className="img-large"
                 src={product.image}
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
                                        <Button variant="primary">
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