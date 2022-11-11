import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { store } from "../app/store";
import { GetAll as GetProduts ,GetPerView } from "../services/items";

//products Slice
const initialState = {
  value: [],
  status: "idle",
};

export const getItems = createAsyncThunk("getItems/api", async (query=[]) => {
  const resp = await GetPerView();
  console.log(query);
  return {res: resp.data, query:query};
});

const localFilter = ({payload})=>{
  if(/tags_like=/.test(payload.query)){
  let u = payload.query.find((x) => /tags_like=/.test(x));
  let tag = u.split("tags_like=")[1].slice(2,-2)
  console.log(tag);
  let result = payload.res.filter(item => item.tags.includes(tag))
  return result
}
else 
return payload.res
}

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: { fillProducts: (state, action) => (state.value = localFilter(action.payload)) },
  extraReducers: (builder) => {
    builder
      .addCase(getItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getItems.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.value = localFilter(action);
      })
      .addCase(getItems.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export const { fillProducts } = productSlice.actions;
export const selectProducts = (state) => state.products.value; //defined in alice name
export default productSlice.reducer;