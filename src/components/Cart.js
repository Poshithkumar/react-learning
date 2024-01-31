import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { removeItem } from '../reducers/cartSlice';

export default function Cart() {
    const [showCart, setShowCart] = useState(false);
    const dispatch = useDispatch();
  const cart = useSelector(state => {
    // console.log(state.cart)
    console.log("State is:",state)

return state.cart;
});
//   console.log(cart);

//   const totalItems = cart.items.length;
//   const totalPrice = cart.items.reduce((total, item) => {
//     return total + item.price;
//   }, 0);

  return (
    <div>
      <h3>Shopping Cart</h3>
      <div>Total Items: {cart.totalQuantity}</div>
      <div>Total Price: {cart.totalPrice}$</div>
      <button onClick={() => setShowCart(!showCart)}>
        Show Cart  
      </button>

      {showCart && 
    <div>
      {cart.items.map(item => (
        <div key={item.id}>
          {item.name} - ${item.price} 
          <button onClick={() => dispatch(removeItem(item))}>
            Remove
          </button> 
        </div>
      ))}
    </div>
  }
    </div>
  );
}