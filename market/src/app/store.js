import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import productReducer from '../features/counter/productSlice';
import brandReducer from '../features/counter/brandSlice';
import queryReducer from '../features/counter/querySlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
    brand: brandReducer,
    query: queryReducer,
  },
});
