import React from "react";
import { useDispatch } from "react-redux";
import { setQuantity } from "../../features/basketSlice";

const Counter = ({product}) => {
  const dispatch = useDispatch();
  const handleQuantity = (e) => {
    dispatch(setQuantity({product:product.name,action:e.target.name,price:product.price}));
  };
  return (
    <>
      <button
        onClick={handleQuantity}
        name="decrease"
        className="pointer fs-1 text-bold"
      >
        -
      </button>
      <span className="bg-primary p-4 fs-2 text-bold text-white">{product.quantity}</span>
      <button onClick={handleQuantity} name="increase" className="pointer fs-1 text-bold">
        +
      </button>
    </>
  );
};

export default Counter;
