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
            <div className="filter-container">
            <BrandFilter/>
            </div>
            <div className="filter-container">
            <TagFilter/>
            </div>
      </div>
    </>
  );
};

export default Options;
