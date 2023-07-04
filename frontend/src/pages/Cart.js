import React, { useState } from 'react';
import './Cart.css'; // Mengimpor file CSS yang berisi gaya

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeItemFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem !== item);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="cart-container">
      <h2>Keranjang</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItemFromCart(item)}>Hapus</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addItemToCart('Item Baru')}>Tambah Item</button>
    </div>
  );
};

export default Cart;
