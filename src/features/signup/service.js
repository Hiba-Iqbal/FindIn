import { get, post } from "../../utils/httpService";
import { jsonToQueryString } from "../../utils/helper";

const SERVICE_URLS = {
  getRole: () => `/role`,
  getFamilyStatus: () => `/family-status`,
  getNationality: (qs) => `/nationality${qs}`,
  getFindUsPlatform: () => `/find-us`,
  getCompany: (qs) => `/company-profile/name/list${qs}`,
  getCountry: (qs) => `/country${qs}`,
  getCity: () => `/city?page=1&limit=100`,
  getCitiesByCountry: (qs, categoryId) =>
    `/city/by-country-id/${categoryId}${qs}`,
  getJobTitle: (qs, id) => `/jobtitle/${id}${qs}`,
  jobseekerSignup: () => `/auth/jobseeker/signup`,
  employerSignup: () => `/auth/employer/signup`,
  agencySignup: () => "/auth/agency/signup",
  confirmEmail: () => `/auth/verify`,
  getCountryByIp: () => `https://pro.ip-api.com/json?key=YQnoAYJbrHbV7qS`,
  getSector: (qs) => `/categories${qs}`,
  uploadProfileImage: () => `/file-handle/signup/profile-picture`,
  uploadCompanyLogo: () => `/file-handle/signup/profile-picture`,
};

export const getRole = () => get(SERVICE_URLS.getRole());
export const getFamilyStatus = () => get(SERVICE_URLS.getFamilyStatus());
// export const getNationality = () => get(SERVICE_URLS.getNationality());
export const getFindUsPlatform = () => get(SERVICE_URLS.getFindUsPlatform());
export const getCompany = (params) => {
  console.log(params);
  if(params.title) {
    params.search = params.title;
    // delete params.title;
  }
  const qs = jsonToQueryString(params);
  // const qs = params?.search ? params.search : params?.title ? params.title: false;
  return get(SERVICE_URLS.getCompany(qs));
};
export const getCountry = (params) => {
  const qs = jsonToQueryString(params);
  return get(SERVICE_URLS.getCountry(qs));
};
export const getNationalities = (params) => {
  const qs = jsonToQueryString(params);
  return get(SERVICE_URLS.getNationality(qs));
};

export const getCity = () => get(SERVICE_URLS.getCity());
export const getCitiesByCountry = (params, categoryId) => {
  console.log("id from service", categoryId);
  if (!categoryId) {
    return null;
  }
  const qs = jsonToQueryString(params);
  return get(SERVICE_URLS.getCitiesByCountry(qs, categoryId));
};
export const getJobTitle = (params, id) => {
  if (!id) {
    return null;
  }
  const qs = jsonToQueryString(params);
  return get(SERVICE_URLS.getJobTitle(qs, id));
};

export const getNationality = (params) => {
  const qs = jsonToQueryString(params);
  return get(SERVICE_URLS.getNationality(qs));
};

export const getSector = (params) => {
  const qs = jsonToQueryString(params);
  return get(SERVICE_URLS.getSector(qs));
};
export const confirmEmail = () => get(SERVICE_URLS.confirmEmail());

export const jobseekerSignup = (body) =>
  post(SERVICE_URLS.jobseekerSignup(), body);
export const employerSignup = (body) =>
  post(SERVICE_URLS.employerSignup(), body);
export const agencySignup = (body) => post(SERVICE_URLS.agencySignup(), body);

export const getCountryByIp = () => fetch("https://pro.ip-api.com/json?key=YQnoAYJbrHbV7qS");

export const uploadProfileImage = (body, params) =>
  post(SERVICE_URLS.uploadProfileImage(), body, params);

export const uploadCompanyLogo = (body, params) =>
  post(SERVICE_URLS.uploadCompanyLogo(), body, params);
