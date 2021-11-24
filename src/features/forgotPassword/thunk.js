import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  postVerifyEmail as postVerifyEmailAPI,
  postVerifyToken as postVerifyTokenAPI,
  postResetPassword as postResetPasswordAPI,
} from "./service";

// POST APIs
export const postVerifyEmail = createAsyncThunk(
  "forgotPassword/verify-email",
  async ({ payload }) => {
    const response = await postVerifyEmailAPI(payload);
    return response.data;
  }
);

export const postResendVerifyEmail = createAsyncThunk(
  "forgotPassword/resend-verify-email",
  async ({ payload }) => {
    const response = await postVerifyEmailAPI(payload);
    return response.data;
  }
);

export const postVerifyToken = createAsyncThunk(
  "forgotPassword/verify-token",
  async ({ payload }) => {
    const response = await postVerifyTokenAPI(payload);
    return response.data;
  }
);

export const postResetPassword = createAsyncThunk(
  "forgotPassword/reset-password",
  async ({ payload }) => {
    const response = await postResetPasswordAPI(payload);
    return response.data;
  }
);
