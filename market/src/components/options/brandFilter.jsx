import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../../features/querySlice";
import { getItems } from "../../features/productSlice";
import { getStockByTags } from "../../features/allProductsSlice";

const BrandFilter = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [selected, setSelected] = useState([]);
  const querySelector = useSelector((state) => state.query.value);
  const selectBrand = useSelector((state) => state.allProducts.stockByBrand);
  const dispatch = useDispatch();

  useEffect(() => {
    let res = selectBrand.filter((brand) =>
      brand.brand.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    setSearchResults(res);
  }, [search]);

  const handleChange = (e) => {
    setSelected(
      selected.includes(e.target.id)
        ? selected.filter((item) => item !== e.target.id)
        : [...selected, e.target.id]
    );
    let query = `manufacturer=${e.target.id}`;
    dispatch(setQuery(query));
  };

  useEffect(() => {
    dispatch(getStockByTags(selected));
    dispatch(getItems(querySelector));
  }, [selected]);

  return (
    <>
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="text"
        placeholder="Search brand"
      />
      <div className="filter-body">
        {(searchResults.length ? searchResults : selectBrand).map((brand, i) =>
          brand.products ? (
            <div key={i}>
              <input
                onChange={handleChange}
                type="checkbox"
                name=""
                id={brand.brand.slug}
                defaultChecked={selected.includes(brand.brand.slug)}
              />
              <label htmlFor={brand.brand.slug}>
                {brand.brand.name} ({brand.products})
              </label>
            </div>
          ) : null
        )}
      </div>
    </>
  );
};

export default BrandFilter;
