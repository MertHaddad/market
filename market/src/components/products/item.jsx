import React from "react";
import { useSelector } from "react-redux";
import img from  "./../../assets/img/thumbnails/thumbnail1.jpg"
const Item = ()=>{
    const products = useSelector(state=> state.product.value)
    console.log(products);
    return(
        <>
        <div className="products products-container">
        {products.map((item,i)=>
            <div className="product-card" key={i}>
            <p className="product-thumbnail"><img width={100} alt="" src={require(`./../../assets/img/thumbnails/thumbnail${i+1}.jpg`)} /></p>
            <p className="product-title">{item.name}</p>
            <p className="product-price">{item.price}</p>
            <button className="product-button">Add</button>
            </div>
            )}
        <span></span>
        </div>
        </>
    )
}

export default Item