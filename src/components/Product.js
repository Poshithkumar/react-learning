import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../reducers/cartSlice';

export default function Product({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
  }

  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.price}</p>

      <button onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}
