import React from "react";
import Navbar from "./components/navbar";
import Products from "./components/products/products";
import Basket from "./components/basket/basket";
import Options from "./components/options/options";
import Footer from "./components/footer";
import "./assets/css/styles.css";
import "./assets/css/predefined.css";
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Basket/>
        <Products/>
        <Options/>
      </div>
        <Footer/>
    </>
  );
}

export default App;
