import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../../features/querySlice";

const Sort = () => {
  const [checkedOption, setCheckedOption] = useState("");
  const dispatch = useDispatch();
  const selectQuery = useSelector((state) => state.query.value);

  const handleChange = (e) => {
    setCheckedOption(checkedOption === e.target.id ? "" : e.target.id)
    let query = `_sort=${
      /price/.test(e.target.id) ? "price" : "added"
    }&_order=${/Asc/.test(e.target.id) ? "asc" : "desc"}`;
    dispatch(setQuery(query));
  };

  const inputsArray = [
    { name: "priceAsc", label: "Price low to high" },
    { name: "priceDesc", label: "Price high to low" },
    { name: "dateDesc", label: "New to old" },
    { name: "dateAsc", label: "Old to new" },
  ];

  return (
    <>
      {inputsArray.map((input, i) => (
        <div key={i}>
          <input
          checked={input.name === checkedOption}
            onClick={handleChange}
            // onChange={handleChange}
            id={input.name}
            type="radio"
            value={input.name}
            className="custom-radio "
            name="sort-radio"
          />
          <label htmlFor={input.name}>{input.label}</label>
        </div>
      ))}
    </>
  );
};

export default Sort;
