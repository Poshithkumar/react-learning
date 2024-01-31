import { createSlice } from '@reduxjs/toolkit';

import { v4 as uuidv4 } from 'uuid';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0
  },
  reducers: {
    addItem: (state, action) => {
        // console.log(action);
        // console.log(state);
        const item = {
            ...action.payload, 
            id: uuidv4() // generate unique id
          };
        
          state.items.push(item);
    //   state.items.push(action.payload);
      state.totalQuantity++;
      state.totalPrice += action.payload.price;
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
        state.totalQuantity--;
        state.totalPrice -= action.payload.price;
      }

  }
});

 


export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
export const { removeItem } = cartSlice.actions;