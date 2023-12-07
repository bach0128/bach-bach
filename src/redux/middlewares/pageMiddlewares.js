const { createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchPages = createAsyncThunk("fetchPages", async (id) => {
  const response = await fetch(
    `https://api-pages.vercel.app/api/v1/pages/${id}`
  );
  const data = await response.json();
  return data;
});
