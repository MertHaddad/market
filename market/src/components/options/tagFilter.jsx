import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../../features/querySlice";

const TagsFilter = () => {
  const selectTags = useSelector((state) => state.allProducts.stockByTag);
    const dispatch = useDispatch()

    const handleChange = (e) => {
        // setCheckedOption(checkedOption === e.target.id ? "" : e.target.id)
        let query = `tags_like=\\b${e.target.id}\\b`;
        dispatch(setQuery(query));
      };


  return (
    <>
      <input type="text" placeholder="Search tag" />
      <div className="filter-body">
        {selectTags.map((tag, i) => (
          <div key={i}>
            <input onChange={handleChange} type="checkbox" name="" id={tag.tag} />
            <label htmlFor={tag.tag}>{tag.tag} ({tag.products})</label>
          </div>
        ))}
      </div>
    </>
  );
};

export default TagsFilter;
