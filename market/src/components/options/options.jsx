import React from "react";
import BrandFilter from "./brandFilter"
import TagFilter from "./tagFilter"
import Sort from "./sort"
const Options = () => {
  return (
    <>
      <div className="filters">
        <span>Options </span>
            <Sort/>
            <BrandFilter/>
            <TagFilter/>
      </div>
    </>
  );
};

export default Options;
