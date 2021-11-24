import { post } from "../../utils/httpService";

const SERVICE_URLS = {
  login: () => `/auth/signin`,
};

export const login = (body) => post(SERVICE_URLS.login(), body);
