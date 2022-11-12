import React from "react";
import { useSelector } from "react-redux";

const Basket = ()=>{
    const basketItems = useSelector(state=>state.basket.basketProducts)
    return(
        <>
        <div className="basket">
            {basketItems.map((item,i)=>
        <div key={i} className="basket-item">
            
        <span>{item.name}</span>
        <span>₺{item.price}</span>
        <span>{item.amount}</span>
            
        </div>
            )}

        </div>
        </>
    )
}

export default Basket