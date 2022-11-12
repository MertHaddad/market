import React from "react";
import { useSelector} from "react-redux";
import Counter from "./counter";
const Basket = () => {
  const selectBasket = useSelector((state) => state.basket);

  return (
    <>
      <div className="basket">
        {selectBasket.basketProducts.map((item, i) => (
          <div key={i} className="basket-item">
            <span>{item.name}</span>
            <Counter  product={item} />
            <span className="d-block text-primary text-bold">
              ₺{item.price}
            </span>
            <span>{item.amount}</span>
            <hr/>
          </div>
        ))}
        <button className="basket-button" >₺{Number(selectBasket.payment).toFixed(2)}</button>
      </div>
    </>
  );
};

export default Basket;
