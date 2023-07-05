import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import './Market2.css';
import logger from 'use-reducer-logger';
import { Link } from 'react-router-dom';
// import data from '.././models/data';
// import data from '../data';

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

function Market2() {
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
    <div>
      <header>
        <Link to='/'>
          <h1 className='fw-bold'>Skinlyst</h1>
        </Link>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div className="products">
          {products ? (
            products.map((product) => (
              <div className="product" key={product.slug}>
                <Link to={`/product/${product.slug}`} />
                <img src={product.image} alt={product.name} />
                <div className="product-info">
                  <Link to={`/product/${product.slug}`}>
                    <p>{product.name}</p>
                  </Link>
                  <p>
                    <strong>${product.price}</strong>
                  </p>
                  <button>Add to cart</button>
                </div>
              </div>
            ))
          ) : (
            <div>No products available</div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Market2;
