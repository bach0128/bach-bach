import { configureStore } from "@reduxjs/toolkit";
import { pagesSlice } from "./slice/pagesSlice";

export const store = configureStore({
  reducer: {
    pages: pagesSlice.reducer,
  },
  devTools: true,
});
