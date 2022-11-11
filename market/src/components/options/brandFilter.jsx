import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../../features/querySlice";

const BrandFilter = () => {
  const selectBrand = useSelector((state) => state.allProducts.stockByBrand);
    // console.log(selectBrand);
    const dispatch = useDispatch()
    
    const handleChange = (e) => {
        // setCheckedOption(checkedOption === e.target.id ? "" : e.target.id)
        let query = `manufacturer=${e.target.id}`;
        dispatch(setQuery(query));
      };
  return (
    <>
      <input type="text" placeholder="Search brand" />
      <div className="filter-body">
        {selectBrand.map((brand, i) => (
          <div key={i}>
            <input onChange={handleChange} type="checkbox" name="" id={brand.brand.slug} />
            <label htmlFor={brand.brand.slug}>{brand.brand.name} ({brand.products})</label>
          </div>
        ))}
      </div>
    </>
  );
};

export default BrandFilter;
