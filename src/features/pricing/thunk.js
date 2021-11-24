import { createAsyncThunk } from "@reduxjs/toolkit";

import { getPackages as getPackagesAPI } from "./service";

export const getPackages = createAsyncThunk("pricing/get-packages", async () => {
  const response = await getPackagesAPI();
  return response.data;
});
