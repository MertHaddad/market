import React from "react";
import { useSelector } from "react-redux";

const Item = ()=>{
    const products = useSelector(state=> state.product.value)
    console.log(products);
    return(
        <>
        <div className="products products-container">
        {products.map((item,i)=>
            <div className="product-card" key={i}>
            <p className="product-thumbnail"><img width={90} alt="" src={require(`./../../assets/img/thumbnails/thumbnail${Math.floor(Math.random() * 42)+1}.jpg`)} /></p>
            <p className="product-price">{item.price}</p>
            <p className="product-title">{item.name}</p>
            <button className="product-button">Add</button>
            </div>
            )}
        <span></span>
        </div>
        </>
    )
}

export default Item