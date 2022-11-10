import React from "react";
import Filter from "./filter"
import Sort from "./sort"
const Options = () => {
  return (
    <>
      <div className="filters">
        <span>Options </span>
            <Sort/>
            <Filter/>
            <Filter/>
      </div>
    </>
  );
};

export default Options;
