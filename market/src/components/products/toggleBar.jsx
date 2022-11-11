import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../features/productSlice";
import { setQuery } from "../../features/querySlice";

const ToggleBar = () => {
  const dispatch = useDispatch();
  const select = useSelector((state) => state.query);

  return (
    <>
      <button
        className={`toggle-button ${select.value.includes("itemType=mug") && "bg-primary"}`}
        onClick={() => {
          dispatch(setQuery("itemType=mug"));
        }}
      >
        mug
      </button>
      <button
        className={`toggle-button ${select.value.includes("itemType=shirt") && "bg-primary"}`}
        onClick={() => {
          dispatch(setQuery("itemType=shirt"));
        }}
      >
        shirt
      </button>
    </>
  );
};

export default ToggleBar;
