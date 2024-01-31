import { useState } from 'react';
import Product from './Product';
import Cart from './Cart';
import React from 'react';

export default function App() {

  const [cart, setCart] = useState([]);

  const products = [
    { name: 'Product 1', price: 100 },
    { name: 'Product 2', price: 150 },
  ];

  function addToCart(product) {
    // console.log(product);
    // console.log(cart);
    setCart(prevCart => [...prevCart, product]); 
  }

  return (
    <>
      <Cart cart={cart} />


      {products.map(product => (
      <Product
        key={product.name}
        product={product}
        onAddToCart={() => {
          addToCart(product); // update cart state
          setCart([...cart]); // trigger re-render of Cart
        }}
      />
    ))}


    </>
  )
}