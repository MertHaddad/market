import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./counterAPI";

const initialState = {
  payment: 0,
  basketProducts: [],
};

const handleQuantityChange = (state, action) => {
  console.log(action);
  
  if(action.action === "increase"){
    state.basketProducts.map(product=>product.name===action.product && product.quantity++)
    state.payment+=action.price
  }
  else{
    state.basketProducts.map(product=>product.name===action.product && product.quantity--)
    state.payment-=action.price;
    let checkQuantity = state.basketProducts.find(
      (product) => product.name === action.product
    );
    console.log(checkQuantity.quantity);
    if(checkQuantity.quantity === 0){
      console.log("delete me pleaseeee");
      state.basketProducts = state.basketProducts.filter(product=> product.name!==checkQuantity.name) 
      console.log(state.basketProducts);
    }
  }
};

const handleAddProduct = (state, action) => {
  const checkExisting = state.basketProducts.find(
    (product) => product.name === action.payload.product.name
  );
  if (!checkExisting) {
    state.basketProducts.push({
      quantity: 1,
      name: action.payload.product.name,
      price: action.payload.product.price,
    });
    state.payment += action.payload.product.price;
  } else {
    handleQuantityChange(state,{
      product: action.payload.product.name,
      action: "increase",
      price:action.payload.product.price
    });
  }
};

export const basketSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setQuantity: (state, action) => {
      handleQuantityChange(state, action.payload);
    },
    addProduct: (state, action) => {
      handleAddProduct(state, action);
    },
  },
});

export const { addProduct, setQuantity } = basketSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectBasket = (state) => state.counter;

export default basketSlice.reducer;
