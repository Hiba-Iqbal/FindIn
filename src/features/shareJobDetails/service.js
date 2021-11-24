import { get } from "../../utils/httpService";

const SERVICE_URLS = {
  getShareJobDeatils: (id) => `/jobs/shareById/${id}`,
  getShareUserDetails: (id) => `/jobseeker/profile/share/${id}`,
};

export const getShareJobDeatils = (id) =>
  get(SERVICE_URLS.getShareJobDeatils(id));

export const getShareUserDetails = (id) =>
  get(SERVICE_URLS.getShareUserDetails(id));
