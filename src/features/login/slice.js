import { createSlice } from "@reduxjs/toolkit";

import { login } from "./thunk";

const initialState = {
  status: "idle",
  loginSuccess: false,
  loginError: null,
  loginResponse: {},
};

export const slice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
        state.loginSuccess = false;
        state.loginError = null;
        state.loginResponse = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "idle";
        state.loginSuccess = true;
        state.loginResponse = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.loginSuccess = false;
        state.loginError = action.error.message;
      });
  },
});

export const selectLogin = (state) => state.login.loginSuccess;
export const selectLoginError = (state) => state.login.loginError;
export const selectLoginResponse = (state) => state.login.loginResponse;
export const selectLoginStatus = (state) => state.login.status === "loading";

// export const { getSignup } = slice.actions;

export default slice.reducer;
