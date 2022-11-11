import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import productReducer from '../features/productSlice';
import brandReducer from '../features/brandSlice';
import queryReducer from '../features/querySlice';
import allproductsSlice from '../features/allProductsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
    brand: brandReducer,
    query: queryReducer,
    allProducts: allproductsSlice,
  },
});
