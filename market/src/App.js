import React, { useEffect } from "react";
import Navbar from "./components/navbar";
import Products from "./components/products/products";
import Basket from "./components/basket/basket";
import Options from "./components/options/options";
import Footer from "./components/footer";
import "./assets/css/styles.css";
import "./assets/css/predefined.css";
import { fillProducts, getItems, selectProducts } from "./features/productSlice";
import {useDispatch, useSelector} from "react-redux"
import { getBrands } from "./features/brandSlice";

function App() {

const dispatch = useDispatch()
const productsSelector = useSelector(state => state.product.value)
const brandsSelector = useSelector(state => state.brand.value)
const querySelector = useSelector(state => state.query.value)

const test = async()=>{
  
  dispatch(getItems())
  dispatch(getBrands())
   
}

useEffect(()=>{
  test()
  console.log("products refreshed");
  console.log(querySelector);
},[querySelector])

  return (
    <>
      <Navbar />
      <div className="container">
        <h4> 
          products:
        {productsSelector.length}
        </h4>
        <h4> 
          brands:
        {brandsSelector.length}
        </h4>
        <Basket/>
        <Products/>
        <Options/>
      </div>
        <Footer/>
    </>
  );
}

export default App;
