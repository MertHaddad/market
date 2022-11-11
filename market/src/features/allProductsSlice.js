import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { store } from "../app/store";
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
  const tags = new Set();
  for (let item of state.value) {
    tags.add(...item.tags);
  }
  const tagsArray = Array.from(tags);
  return tagsArray;
};

const calculateStockByTags = (state) => {
  const stockByTag = [];
  state.tags.forEach((tag) => {
    let count = 0;
    for (let item of state.value) {
      if (item.tags.includes(tag))count++;
    }
    stockByTag.push({
      tag: tag,
      products: count,
    });
  });
  return stockByTag;
};

const calculateStockByBrands = (state, brands) => {
  const stockByBrand = [];
  const brandsArray = brands;
  brandsArray.forEach((brand) => {
    let count = 0;
    for (let item of state.value) {
      if (item.manufacturer === brand.slug) count++;
    }
    stockByBrand.push({
      brand: brand,
      products: count,
    });
  });
  return stockByBrand;
};

export const getAllItems = createAsyncThunk("getAllItems/api", async () => {
  const resp = await GetAll();
  return resp.data;
});

export const allProductsSlice = createSlice({
  name: "allproducts",
  initialState,
  reducers: {
    getTags: (state) => {
      state.tags = getAllTags(state);
    },
    getStockByTags: (state) => {
      state.stockByTag = calculateStockByTags(state);
    },
    getStockByBrands: (state, action) => {
      state.stockByBrand = calculateStockByBrands(state, action.payload);
    },
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

export const { getTags, getStockByTags, getStockByBrands } =
  allProductsSlice.actions;
export const selectProducts = (state) => state.allproducts.value; //defined in alice name
export default allProductsSlice.reducer;
