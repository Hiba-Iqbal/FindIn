import { createSlice, isPending, isRejected } from "@reduxjs/toolkit";
import { getPackages } from "./thunk";
const thunks = [getPackages];

const initialState = {
  status: "idle",
  errorMessage: null,
  packages: [],
};

export const slice = createSlice({
  name: "credits",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPackages.fulfilled, (state, action) => {
        state.status = "idle";
        state.packages = action.payload;
      })
      .addMatcher(isPending(...thunks), (state) => {
        state.status = "loading";
        state.errorMessage = null;
      })
      .addMatcher(isRejected(...thunks), (state, action) => {
        state.status = "failed";
        state.errorMessage = action.error.message;
      });
  },
});

export const selectStatus = (state) => state.pricing.status === "loading";
export const selectError = (state) => state.pricing.errorMessage;
export const selectPackages = (state) => state.pricing.packages;

export default slice.reducer;
