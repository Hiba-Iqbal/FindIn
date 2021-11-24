import { createSlice } from "@reduxjs/toolkit";

import {
  postVerifyEmail,
  postResendVerifyEmail,
  postVerifyToken,
  postResetPassword,
} from "./thunk";

const initialState = {
  status: "idle",
  errorMessage: null,
  verifyEmailSuccess: false,
  resendVerifyEmailSuccess: false,
  verifyTokenSuccess: false,
  resetPasswordSuccess: false,
  verifyTokenDetail: {},
};

export const slice = createSlice({
  name: "forgotPassword",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // verify email
      .addCase(postVerifyEmail.pending, (state) => {
        state.status = "loading";
        state.errorMessage = null;
        state.verifyEmailSuccess = false;
      })
      .addCase(postVerifyEmail.fulfilled, (state, action) => {
        state.status = "idle";
        state.verifyEmailSuccess = true;
      })
      .addCase(postVerifyEmail.rejected, (state, action) => {
        state.status = "failed";
        state.errorMessage = action.error.message;
        state.verifyEmailSuccess = false;
      })
      // resend verify email
      .addCase(postResendVerifyEmail.pending, (state) => {
        state.errorMessage = null;
        state.resendVerifyEmailSuccess = false;
      })
      .addCase(postResendVerifyEmail.fulfilled, (state) => {
        state.status = "idle";
        state.resendVerifyEmailSuccess = true;
      })
      .addCase(postResendVerifyEmail.rejected, (state, action) => {
        state.status = "failed";
        state.errorMessage = action.error.message;
        state.resendVerifyEmailSuccess = false;
      })
      // verify token
      .addCase(postVerifyToken.pending, (state) => {
        state.status = "loading";
        state.errorMessage = null;
        state.verifyTokenSuccess = false;
        state.verifyTokenDetail = {};
      })
      .addCase(postVerifyToken.fulfilled, (state, action) => {
        state.status = "idle";
        state.verifyTokenSuccess = true;
        state.verifyTokenDetail = action.payload;
      })
      .addCase(postVerifyToken.rejected, (state, action) => {
        state.status = "failed";
        state.errorMessage = action.error.message;
        state.verifyTokenSuccess = false;
      })
      // reset password
      .addCase(postResetPassword.pending, (state) => {
        state.status = "loading";
        state.errorMessage = null;
        state.resetPasswordSuccess = false;
      })
      .addCase(postResetPassword.fulfilled, (state) => {
        state.status = "idle";
        state.resetPasswordSuccess = true;
      })
      .addCase(postResetPassword.rejected, (state, action) => {
        state.status = "failed";
        state.errorMessage = action.error.message;
        state.resetPasswordSuccess = false;
      });
  },
});

export const selectStatus = (state) =>
  state.forgotPassword.status === "loading";
export const selectError = (state) => state.forgotPassword.errorMessage;
export const selectVerifyEmailSuccess = (state) =>
  state.forgotPassword.verifyEmailSuccess;
export const selectResendVerifyEmailSuccess = (state) =>
  state.forgotPassword.resendVerifyEmailSuccess;
export const selectVerifyTokenSuccess = (state) =>
  state.forgotPassword.verifyTokenSuccess;
export const selectResetPasswordSuccess = (state) =>
  state.forgotPassword.resetPasswordSuccess;
export const selectVerifyTokenDetail = (state) =>
  state.forgotPassword.verifyTokenDetail;

// export const { getSignup } = slice.actions;

export default slice.reducer;
