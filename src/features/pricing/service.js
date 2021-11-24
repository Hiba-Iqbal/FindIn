import { post, get, put, del } from "../../utils/httpService";

const SERVICE_URLS = {
  getPackages: () => `/jobsmideast-package/employer`,
  getPackageAddOns: () => `/jobsmideast-package/employer-addons`,
};

export const getPackages = () => get(SERVICE_URLS.getPackages());

export const getPackageAddOns = () => get(SERVICE_URLS.getPackageAddOns());
