// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Create this file later

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
