import React from "react";
import { useSelector } from "react-redux";
import Counter from "./counter";
const Basket = () => {
  const selectBasket = useSelector((state) => state.basket);

  return (
    <>
      <div className="basket basket-container custom-scrollbar">
        {selectBasket.basketProducts.length ? (
          selectBasket.basketProducts.map((item, i) => (
            <div key={i} className="basket-item parent text-default">
              <div className="div2 basket-product-name">{item.name}</div>
              <div class="counter-parent">
                <Counter product={item} />
              </div>
              <div className="price-parent text-primary text-bold">
                ₺{item.price}
                <span>{item.amount}</span>
              </div>
            </div>
          ))
        ) : (
          <div> Your Cart is empty! start shopping</div>
        )}
        {selectBasket.basketProducts.length ? (
          <div className="basket-button-container">
            <button className="basket-button">
              ₺{Number(selectBasket.payment).toFixed(2)}
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Basket;
