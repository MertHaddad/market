import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getStockByBrands,
  getStockByTags,
} from "../../features/allProductsSlice";
import { getItems } from "../../features/productSlice";
import { setQuery } from "../../features/querySlice";

const TagsFilter = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selected, setSelected] = useState([]);
  const querySelector = useSelector((state) => state.query.value);

  const selectBrands = useSelector((state) => state.brand.value);
  const selectTags = useSelector((state) => state.allProducts.stockByTag);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setSelected(
      selected.includes(e.target.id)
        ? selected.filter((item) => item !== e.target.id)
        : [...selected, e.target.id]
    );
    let query = `tags_like=(?<!\\s)\\b${e.target.id}\\b(?!\\s)`;
    dispatch(setQuery(query));
  };

  useEffect(() => {
    // if(selected.length){
    dispatch(getStockByBrands({ brands: selectBrands, selected: selected }));
    dispatch(getItems(querySelector));
    // dispatch(getStockByTags(selected))
    // }
  }, [selected]);

  useEffect(() => {
    let res = selectTags.filter((tag) =>
      tag.tag.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    setSearchResults(res);
  }, [search]);

  return (
    <>
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="text"
        placeholder="Search tag"
      />
      <div className="filter-body">
        {(searchResults.length ? searchResults : selectTags).map((tag, i) => (
          <div key={i}>
            <input
              onChange={handleChange}
              type="checkbox"
              name=""
              id={tag.tag}
              defaultChecked={selected.includes(tag.tag)}
            />
            <label htmlFor={tag.tag}>
              {tag.tag} ({tag.products})
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default TagsFilter;
