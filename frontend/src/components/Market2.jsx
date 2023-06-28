import React from 'react'
import data from '.././models/data'
import './Market2.css'

const Market2 = () => {
  return (
    <div>
        <header>
              <a href="/">Skinlyst</a>
          </header>
          <main>
              <h1>Featured Products</h1>
              <div className="products">
                  {data.products.map((product) => (
                      <div className="product" key={product.slug}>
                          <a href={`/product/${product.slug}`}>
                              <img src={product.image} alt={product.name} />
                          </a>
                          <div className='product-info'>
                          <a href={`/product/${product.slug}`}>
                                  <p>{product.name}</p>
                          </a>
                              <p>
                                  <strong>${product.price}</strong>
                              </p>
                          <p>{product.brand}</p>
                         <button>Add to Cart</button>
                         </div>    
                    </div>
                ))}
              </div>
          </main>
    </div>
  )
}

export default Market2
