import { post } from "../../utils/httpService";

const SERVICE_URLS = {
  postVerifyEmail: () => `/auth/forgotpassword`,
  postVerifyToken: () => `/auth/verifyforgottoken`,
  postResetPassword: () => `/auth/restpassword`,
};

export const postVerifyEmail = (body) =>
  post(SERVICE_URLS.postVerifyEmail(), body);
export const postVerifyToken = (body) =>
  post(SERVICE_URLS.postVerifyToken(), body);
export const postResetPassword = (body) =>
  post(SERVICE_URLS.postResetPassword(), body);
