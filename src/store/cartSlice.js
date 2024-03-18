// store/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // You can store products in the cart as objects here
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const productToAdd = action.payload;
      const existingProductIndex = state.items.findIndex(item => item.id === productToAdd.id);

      if (existingProductIndex !== -1) {
        // If product already exists, update its quantity
        state.items[existingProductIndex].qty += 1;
      } else {
        // If product doesn't exist, add it to the items array
        state.items.push({ ...productToAdd, qty: 1 });
      }
    },
    removeItem(state, action) {
      // Logic to remove an item from the cart
    },
    updateQuantity(state, action) {
      // Logic to update the quantity of an item in the cart
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
