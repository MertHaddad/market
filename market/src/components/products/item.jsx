import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../features/basketSlice";

const Item = () => {
  const products = useSelector((state) => state.product.value);
  const dispatch = useDispatch();
  const handleAddProduct = (e) => {
    console.log(e.target.name.name);
  };
  return (
    <>
      <div className="products products-container">
        {products.map((item, i) => (
          <div className="product-card" key={i}>
            <p className="product-thumbnail">
              <img
                width={90}
                alt=""
                src={require(`./../../assets/img/thumbnails/thumbnail${
                  item.name.length + Math.floor(item.price) - 6 - i
                }.jpg`)}
              />
            </p>
            <p className="product-price">₺ {item.price}</p>
            <p className="product-title">{item.name}</p>
            <button
              onClick={() => dispatch(addProduct({ product: item }))}
              className="product-button"
            >
              Add
            </button>
          </div>
        ))}
        <span></span>
      </div>
    </>
  );
};

export default Item;
