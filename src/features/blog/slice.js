import { createSlice, isPending, isRejected } from "@reduxjs/toolkit";

import { getBlogList, getAuthorBlogs, getOtherBlogs } from "./thunk";

const thunks = [];

const initialState = {
  status: "idle",
  isBlogLoading: false,
  isListLoading: false,
  blogs: [],
  authorBLogs: [],
  otherBlogs: [],
};

export const slice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    removeCurrentBlog: (state, action) => {
      const {
        payload: { id },
      } = action;
      console.log(id, "id");
      console.log(state.authorBLogs, "authorBLogs");
      let arr = state.authorBLogs.filter((item) => id !== item.id);
      console.log(arr, "jasdkajsdkj");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBlogList.fulfilled, (state, action) => {
        state.status = "idle";
        state.blogs = action.payload;
        state.isListLoading = false;
      })
      .addCase(getBlogList.pending, (state, action) => {
        state.isListLoading = true;
      })
      .addCase(getBlogList.rejected, (state, action) => {
        state.isListLoading = false;
      })
      .addCase(getAuthorBlogs.fulfilled, (state, action) => {
        state.status = "idle";
        state.authorBLogs = action.payload;
      })
      .addCase(getOtherBlogs.fulfilled, (state, action) => {
        state.status = "idle";
        state.otherBlogs = action.payload;
      })

      .addMatcher(isPending(...thunks), (state) => {
        state.status = "loading";
      })
      .addMatcher(isRejected(...thunks), (state, action) => {
        state.status = "failed";
      });
  },
});

export const selectBlogList = (state) => state.blogs.blogs;
export const selectAuthorBLogs = (state) => state.blogs.authorBLogs;
export const selectListLoading = (state) => state.blogs.isListLoading;
export const selectOtherBlogs = (state) => state.blogs.otherBlogs;

export const { removeCurrentBlog } = slice.actions;

export default slice.reducer;
