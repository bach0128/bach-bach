import { createSlice } from "@reduxjs/toolkit";
import { fetchPages } from "../middlewares/pageMiddlewares";

const initialState = {
  pages: [],
  status: "idle",
};

export const pagesSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPages.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchPages.fulfilled, (state, action) => {
      state.pages = action.payload;
      state.status = "success";
    });
  },
});
