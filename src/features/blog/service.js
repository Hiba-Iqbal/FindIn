import { get } from "../../utils/httpService";

const SERVICE_URLS = {
  getBlogList: () => `/admin/superman/blog/list/for-home-page?page=1&limit=100`,
  getAuthorBlogs: (id) =>
    `/admin/superman/blog/for/home-page/get/blogs/by-author-id/${id}`,
  getOtherBlogs: (id) =>
    `/admin/superman/blog/for/home-page/get/other-blogs/by-author-id/${id}`,
};

export const getBlogList = () => get(SERVICE_URLS.getBlogList());
export const getAuthorBlogs = (id) => get(SERVICE_URLS.getAuthorBlogs(id));
export const getOtherBlogs = (id) => get(SERVICE_URLS.getOtherBlogs(id));
