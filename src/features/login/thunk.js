import { createAsyncThunk } from "@reduxjs/toolkit";

import { login as loginAPI } from "./service";

export const login = createAsyncThunk("login/user", async (payload) => {
  const response = await loginAPI(payload);
  return response.data;
});
