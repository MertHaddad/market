import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../features/productSlice";
import { setQuery } from "../../features/querySlice";

const ToggleBar = () => {
  const dispatch = useDispatch();
  const selectQuery = useSelector(state=>state.query.value)

  const handleChange=(e)=>{
    dispatch(setQuery(e.target.name));
    dispatch(getItems(selectQuery))
  }

  return (
    <>
      <button
      name="itemType=mug"
        className={`toggle-button ${selectQuery.includes("itemType=mug") && "bg-primary text-white"}`}
        onClick={handleChange}
      >
        mug
      </button>
      <button
      name="itemType=shirt"
        className={`toggle-button ${selectQuery.includes("itemType=shirt") && "bg-primary text-white"}`}
        onClick={handleChange}
      >
        shirt
      </button>
    </>
  );
};

export default ToggleBar;
