import { get, post } from "../../utils/httpService";

const SERVICE_URLS = {
  getCategory: () => `/categories`,
  comingSoon: () => `/services-comming-soon`,
};

export const getCategories = () => get(SERVICE_URLS.getCategory());

export const comingSoon = (body) => post(SERVICE_URLS.comingSoon(), body);
