import { createAsyncThunk } from "@reduxjs/toolkit";

import { getCategories as getCategoriesAPI, comingSoon as comingSoonAPI } from "./service";

export const getCategories = createAsyncThunk("services/get-category", async () => {
  const response = await getCategoriesAPI();
  return response.data;
});

export const comingSoon = createAsyncThunk("services/post-coming-soon", async ({ payload }) => {
  const response = await comingSoonAPI(payload);
  return response.data;
});
