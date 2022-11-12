import React, { Suspense, useEffect } from "react";
import Navbar from "./components/navbar";
import Products from "./components/products/products";
import Basket from "./components/basket/basket";
// import Options from "./components/options/options";
import Footer from "./components/footer";
import "./assets/css/styles.css";
import "./assets/css/predefined.css";
import { fillProducts, getItems, selectProducts } from "./features/productSlice";
import {useDispatch, useSelector} from "react-redux"
import { getBrands } from "./features/brandSlice";
import { getAllItems, getStockByBrands, getStockByTags, getTags } from "./features/allProductsSlice";
const Options = React.lazy(() => import("./components/options/options"));

function App() {

const dispatch = useDispatch()
const productsSelector = useSelector(state => state.product.value)
const brandsSelector = useSelector(state => state.brand)
const querySelector = useSelector(state => state.query.value)
const allProductsSelector = useSelector(state => state.allProducts)

const test = async(query)=>{
  dispatch(getAllItems())
  // dispatch(getTags())
  dispatch(getItems(query))
  dispatch(getBrands())
}

useEffect(()=>{
  test(querySelector)
  console.log("products refreshed");
},[])

useEffect(()=>{
if(allProductsSelector.status === "fulfilled"){
    dispatch(getTags())
    dispatch(getStockByTags([]))
}
if(brandsSelector.status === "fulfilled"){
  dispatch(getStockByBrands({brands:brandsSelector.value,selected:[]}))
}
},[allProductsSelector.status])

  return (
    <>
      <Navbar />
      <div className="container">
        <h4> 
          products:
        {/* {productsSelector.length} */}
        </h4>
        <h4> 
          brands:
        {/* {brandsSelector.value.length} */}
        </h4>
        <Basket/>
        <Suspense fallback={<div className="fs-1 text-primay">loading...</div>}>
        <Products/>
        <Options/>
        </Suspense>
      </div>
        <Footer/>
    </>
  );
}

export default App;
