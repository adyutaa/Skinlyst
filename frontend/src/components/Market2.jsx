<<<<<<< HEAD
import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import './Market2.css';
import logger from 'use-reducer-logger';
import { Link } from 'react-router-dom';
// import data from '.././models/data';
=======
import { useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logger from 'use-reducer-logger';
// import data from '../data';
>>>>>>> 76f8497c6e7e0389cd7434f878802759903c087c

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
<<<<<<< HEAD
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, products: action.payload };
=======
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
>>>>>>> 76f8497c6e7e0389cd7434f878802759903c087c
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function Market2() {
<<<<<<< HEAD
  // const [products, setProducts] = useState([]);
  const [{ error, products }, dispatch] = useReducer(logger(reducer), {
    loading: true,
    error: '',
  });
=======
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });
  // const [products, setProducts] = useState([]);
>>>>>>> 76f8497c6e7e0389cd7434f878802759903c087c
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
<<<<<<< HEAD
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
=======
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }

      // setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          products.map((product) => (
            <div className="product" key={product.slug}>
              <Link to={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </Link>
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
        )}
      </div>
    </div>
  );
}
export default Market2;
>>>>>>> 76f8497c6e7e0389cd7434f878802759903c087c
