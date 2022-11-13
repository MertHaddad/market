import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../features/basketSlice";
import Spinner from "../spinner";

const Item = () => {
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();

  return (
    <>
      <div className="products products-container">
        {products.value.length ? (
          products.value.map((item, i) => (
            <div className="product-card" key={i}>
              <span className="product-thumbnail">
                <img
                  width={90}
                  alt=""
                  src={require(`./../../assets/img/thumbnails/thumbnail${
                    item.name.length + Math.floor(item.price) - 6 - i
                  }.jpg`)}
                />
              </span>
              <span className="product-price">₺ {item.price}</span>
              <span className="product-title text-default">{item.name}</span>
              <button
                onClick={() => dispatch(addProduct({ product: item }))}
                className="product-button text-bold fs-3"
              >
                Add
              </button>
            </div>
          ))
        ) : products.status === "fulfilled" ? (
          <div>No products to show</div>
        ) : (
          <Spinner />
        )}
        <span></span>
      </div>
    </>
  );
};

export default Item;
