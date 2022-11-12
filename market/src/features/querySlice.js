import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: ["?_page=1&_limit=16"]};

const evaluateQuery = (state, action) => {
  let result = []; 
  console.log(action.payload);

  const sameFilterExists = state.includes(action.payload);
  const pageChanged = /_page=/.test(action.payload);
  const typeFilterExists =
    /itemType/.test(state) && /itemType/.test(action.payload);
  const sortFilterExists = /sort/.test(state) && /sort/.test(action.payload);

  if (sameFilterExists) {
    result = state.filter((query) => query !== action.payload);
  } else if (pageChanged) {
    const findElement = state.find((x) => /_page/.test(x));
    const filterResult = state.filter((query) => query !== findElement);
    result = [...filterResult, action.payload];
  } else if (typeFilterExists) {
    const findElement = state.find((x) => /itemType/.test(x));
    const filterResult = state.filter((query) => query !== findElement);
    result = [...filterResult, action.payload];
  } else if (sortFilterExists) {
    const findElement = state.find((x) => /sort/.test(x));
    const filterResult = state.filter((query) => query !== findElement);
    result = [...filterResult, action.payload];
  } else {
    result = [...state, action.payload];
  }
  return { value: result};
};

export const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    setQuery: (state, action) => (state = evaluateQuery(state.value, action)),
  },
});

export const { setQuery } = querySlice.actions;
export const selectQueries = (state) => state.query.value; //defined in alice name
export default querySlice.reducer;
