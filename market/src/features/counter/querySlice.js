import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

//if the query has a type filter already it should be deleted before applying the new filter.
//if the query has the same type filter applied it should get removed.

export const querySlice = createSlice({
  name: "query",
  initialState:[],
  reducers: { addQuery: (state, action) => state = state.includes(action.payload) ?  state.filter(query=>query!==action.payload) : state =  [...state,action.payload],
              removeQuery: (state, action) => (state.value = state.value.filter(query=>query!==action.payload)) },
});

export const { addQuery ,removeQuery} = querySlice.actions;
export const selectQueries = (state) => state.query.value; //defined in alice name
export default querySlice.reducer;