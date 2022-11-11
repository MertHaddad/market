import React, { useEffect } from "react";
import Navbar from "./components/navbar";
import Products from "./components/products/products";
import Basket from "./components/basket/basket";
import Options from "./components/options/options";
import Footer from "./components/footer";
import "./assets/css/styles.css";
import "./assets/css/predefined.css";
import { fillProducts, getItems, selectProducts } from "./features/counter/productSlice";
import {useDispatch, useSelector} from "react-redux"
import { getBrands } from "./features/counter/brandSlice";
// import axios from "axios";
// import { ITEMS_SERVICE_URL,COMPANIES_SERVICE_URL } from "./helpers/constants";
function App() {
//   const getProducts = async()=>{
//   let res = await axios.get(COMPANIES_SERVICE_URL)
//   console.log(res.data.length);    
// }
// getProducts()
const dispatch = useDispatch()
const productsSelector = useSelector(state => state.product.value)
const brandsSelector = useSelector(state => state.brand.value)

const test = async()=>{
  
  dispatch(getItems())
  dispatch(getBrands())
   
}

useEffect(()=>{
  test()

},[])

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
