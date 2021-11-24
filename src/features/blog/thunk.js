import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getBlogList as getBlogListAPi,
  getAuthorBlogs as getAuthorBlogsApi,
  getOtherBlogs as getOtherBlogsAPi,
} from "./service";

export const getBlogList = createAsyncThunk("blog/get-list", async () => {
  const response = await getBlogListAPi();
  return response.data;
});

export const getAuthorBlogs = createAsyncThunk(
  "get/author-blogs",
  async (id) => {
    const response = await getAuthorBlogsApi(id);
    return response.data;
  }
);

export const getOtherBlogs = createAsyncThunk("other/blogs", async (id) => {
  const response = await getOtherBlogsAPi(id);
  return response.data;
});
