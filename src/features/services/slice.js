import { createSlice, isPending, isRejected } from "@reduxjs/toolkit";

import { comingSoon, getCategories } from "./thunk";

const thunks = [getCategories, comingSoon];

const initialState = {
  status: "idle",
  errorMessage: "",
  categories: [],
  comingSoonSuccess: false,
};

export const slice = createSlice({
  name: "services",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.fulfilled, (state, action) => {
        state.status = "idle";
        state.categories = action.payload;
      })
      .addCase(comingSoon.fulfilled, (state) => {
        state.status = "idle";
        state.comingSoonSuccess = true;
      })
      .addMatcher(isPending(...thunks), (state) => {
        state.status = "loading";
        state.errorMessage = null;
        state.comingSoonSuccess = false;
      })
      .addMatcher(isRejected(...thunks), (state, action) => {
        state.status = "failed";
        state.errorMessage = action.error.message;
        state.comingSoonSuccess = false;
      });
  },
});

export const selectCategories = (state) => state.services.categories;
export const selectComingSoonSuccess = (state) =>
  state.services.comingSoonSuccess;
export const selectStatus = (state) => state.services.status === "loading";

export default slice.reducer;
