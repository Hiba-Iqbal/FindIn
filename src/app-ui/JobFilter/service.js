import { jsonToQueryString } from "../../utils/helper";
import { get, post, put } from "../../utils/httpService";

const SERVICE_URLS = {
  getCategory: (qs) => `categories${qs}`,
  getJobTitles: (qs, id) => `/jobtitle/${id}${qs}`,
  getJobTitle: (qs, id) => `/jobtitle/${id}${qs}`,
  getJobtitleByCategory: (v, qs) => `/jobtitle/${v}${qs}`,
  getCurrencies: (qs) => `currency${qs}`,
  getQualification: (qs) => `qualification${qs}`,
  getLanguage: (qs) => `language${qs}`,
};

export const getCategory = (params) => {
  const qs = jsonToQueryString(params);
  return get(SERVICE_URLS.getCategory(qs));
};

export const getJobTitle = (params, id) => {
  const qs = jsonToQueryString(params);
  if (!id) {
    return null;
  }
  return get(SERVICE_URLS.getJobTitle(qs, id));
};

export const getCurrencies = (params) => {
  const qs = jsonToQueryString(params);
  return get(SERVICE_URLS.getCurrencies(qs));
};

export const getQualification = (params) => {
  const qs = jsonToQueryString(params);
  return get(SERVICE_URLS.getQualification(qs));
};

export const getLanguage = (params) => {
  const qs = jsonToQueryString(params);
  return get(SERVICE_URLS.getLanguage(qs));
};

export const getJobTitles = (params, id) => {
  const qs = jsonToQueryString(params);
  if (!id) {
    return null;
  }
  return get(SERVICE_URLS.getJobTitles(qs, id));
};