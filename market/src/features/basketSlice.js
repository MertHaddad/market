import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';


const initialState = {
  payment: 0,
  basketProducts:[],
};

const handleQuantityChange =(state,action)=>{

}

export const basketSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setQuantity: (state,action) => {
        handleQuantityChange(state,action)
    },
    addProduct: (state,action) => { state.basketProducts.push({quantity:1,name:action.payload.product.name,price:action.payload.product.price});
    state.payment+=action.payload.product.price
    },
  },
});

export const { addProduct, setQuantity } = basketSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => state.counter.value;


export default basketSlice.reducer;
