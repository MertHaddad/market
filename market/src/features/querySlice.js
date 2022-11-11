import { createSlice } from "@reduxjs/toolkit";
import { getItems } from "./productSlice";

const initialState = {value : ["?_page=1&_limit=16"],page:1}

//if the query has a type filter already it should be deleted before applying the new filter.
//if the query has the same type filter applied it should get removed.

const evaluateQuery = (state, action) => {
  let result = [];
  const sameFilterExists = state.includes(action.payload);
  const typeFilterExists = /itemType/.test(state);
  const sortFilterExists = /sort/.test(state);
  if (!sameFilterExists && typeFilterExists) {
    const findElement = state.find((x) => /itemType/.test(x));
    const filterResult = state.filter((query) => query !== findElement);
    result = [...filterResult, action.payload];
  } 
  else if (!sameFilterExists && sortFilterExists) {
    const findElement = state.find((x) => /sort/.test(x));
    const filterResult = state.filter((query) => query !== findElement);
    result = [...filterResult, action.payload];
  } 
  else if (sameFilterExists) {
    result = state.filter((query) => query !== action.payload);
  } else {
    result = [...state, action.payload];
  }
  return {value:result,page:1};
};

export const querySlice = createSlice({
  name: "query",
  initialState ,
  reducers: {
    setQuery: (state, action) => (state = evaluateQuery(state.value, action)),
  },
});

export const { setQuery } = querySlice.actions;
export const selectQueries = (state) => state.query.value; //defined in alice name
export default querySlice.reducer;
