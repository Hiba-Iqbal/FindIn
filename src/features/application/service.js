import { get } from "../../utils/httpService";

const SERVICE_URLS = {
  getApplicationRequest: (id) => `/application-request/${id}`,
};

// export const getAuthorBlogs = (id) => get(SERVICE_URLS.getAuthorBlogs(id));

export const getApplicationRequest = (id) =>
  get(SERVICE_URLS.getApplicationRequest(id));
