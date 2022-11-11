import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetAll } from "../services/items";

//products Slice
const initialState = {
  value: [],
  stockByTag: [],
  stockByBrand: [],
  tags: [],
  status: "idle",
};

const getAllTags = (state) => {
    // const tags = state["value"].map((item) =>{ return {tags:item.tag}});
    const tags = new Set()
    for (let item of state.value){
        tags.add(...item.tags)
    }
    const tagsArray = Array.from(tags);
    console.log(tagsArray);
  return tagsArray;
};

const calculateStockByTags = (state) => {
  const tags = state.value.map((item) => item.tag && item.tag);
  return tags;
};

const calculateStockByBrands = (state) => {
  const tags = state.value.map((item) =>{ return {tags:item.tag}});
  return tags;
};

export const getAllItems = createAsyncThunk("getAllItems/api", async () => {
  const resp = await GetAll();
  return resp.data;
});

export const allProductsSlice = createSlice({
  name: "allproducts",
  initialState,
  reducers: {
    getTags: (state) => (state.tags = [...state.tags,getAllTags(state)]),
    getStockByTags: (state) => (state.tags = calculateStockByTags(state)),
    getStockByBrands: (state) => (state.tags = calculateStockByBrands(state)),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllItems.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.value = action.payload;
      })
      .addCase(getAllItems.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export const { getTags,getStockByTags,getStockByBrands } = allProductsSlice.actions;
export const selectProducts = (state) => state.allproducts.value; //defined in alice name
export default allProductsSlice.reducer;
