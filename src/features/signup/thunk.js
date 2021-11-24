import { createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";

import {
  getRole as getRoleAPI,
  getFamilyStatus as getFamilyStatusAPI,
  getNationality as getNationalityAPI,
  getFindUsPlatform as getFindUsPlatformAPI,
  getCompany as getCompanyAPI,
  getCountry as getCountryAPI,
  getCity as getCityAPI,
  getJobTitle as getJobTitleAPI,
  jobseekerSignup as jobseekerSignupAPI,
  employerSignup as employerSignupAPI,
  confirmEmail as confirmEmailAPI,
  getCountryByIp as getCountryByIpAPI,
  getCitiesByCountry as getCitiesByCountryAPI,
  uploadProfileImage as uploadProfileImageAPI,
  uploadCompanyLogo as uploadCompanyLogoAPI,
  agencySignup as agencySignupAPI,
} from "./service";

// GET APIs
export const getRole = createAsyncThunk("signup/role", async () => {
  const response = await getRoleAPI();
  return response.data;
});

export const getFamilyStatus = createAsyncThunk(
  "signup/family-status",
  async () => {
    const response = await getFamilyStatusAPI();
    return response.data;
  }
);

export const getNationality = createAsyncThunk(
  "signup/nationality",
  async () => {
    const response = await getNationalityAPI();
    return response.data;
  }
);

export const getFindUsPlatform = createAsyncThunk(
  "signup/find-us",
  async () => {
    const response = await getFindUsPlatformAPI();
    return response.data;
  }
);

export const getCompany = createAsyncThunk("signup/company", async () => {
  const response = await getCompanyAPI();
  return response.data;
});

export const getCountry = createAsyncThunk("signup/country", async () => {
  const response = await getCountryAPI();
  return response.data;
});

export const getCity = createAsyncThunk("signup/city", async () => {
  const response = await getCityAPI();
  return response.data;
});

export const getCitiesByCountry = createAsyncThunk(
  "signup/cities-by-country",
  async (id) => {
    const response = await getCitiesByCountryAPI(id);
    return response.data;
  }
);

export const getJobTitle = createAsyncThunk("signup/job-title", async () => {
  const response = await getJobTitleAPI();
  return response.data;
});

export const confirmEmail = createAsyncThunk(
  "signup/confirm-email",
  async () => {
    const response = await confirmEmailAPI();
    localStorage.removeItem("token");
    message.success("Email verified!");
    window.location.href = "/login";
    return response.data;
  }
);

// POST APIs
export const jobseekerSignup = createAsyncThunk(
  "signup/jobseeker",
  async (payload) => {
    const response = await jobseekerSignupAPI(payload);
    return response.data;
  }
);

export const employerSignup = createAsyncThunk(
  "signup/employer",
  async (payload) => {
    const response = await employerSignupAPI(payload);
    return response.data;
  }
);

export const agencySignup = createAsyncThunk(
  "signup/agency",
  async (payload) => {
    const response = await agencySignupAPI(payload);
    return response.data;
  }
);
export const getCountryByIp = createAsyncThunk(
  "signup/country-by-ip",
  async () => {
    const response = await getCountryByIpAPI();
    return response.json();
  }
);

// profile image uploader

export const uploadProfileImage = createAsyncThunk(
  "signup/upload-image",
  async ({ payload }) => {
    const params = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const response = await uploadProfileImageAPI(payload, params);
    return response.data;
  }
);

export const uploadCompanyLogo = createAsyncThunk(
  "signup/Company-Logo",
  async ({ payload }) => {
    const params = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const response = await uploadCompanyLogoAPI(payload, params);
    return response.data;
  }
);
