import React from "react";
import BrandFilter from "./brandFilter";
import TagFilter from "./tagFilter";
import Sort from "./sort";
const Options = () => {
  return (
    <>
      <div className="filters">
        <span className="filters-title">Sorting</span>
        <div className="filter-container">
          <Sort />
        </div>
        <span className="filters-title">Brands</span>
        <div className="filter-container">
          <BrandFilter />
        </div>
        <span className="filters-title">Tags</span>
        <div className="filter-container">
          <TagFilter />
        </div>
      </div>
    </>
  );
};

export default Options;
