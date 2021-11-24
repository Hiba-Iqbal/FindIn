import { createAsyncThunk } from "@reduxjs/toolkit";
import { jsonToQueryString } from "../../utils/helper";

import {
  getJob as getJobAPI,
  getJobTitle as getJobTitleAPI,
  getEmploymentType as getEmploymentTypeAPI,
  getCountry as getCountryAPI,
  getCountryisDesired as getCountryisDesiredAPI,
  getCity as getCityAPI,
  getQualification as getQualificationAPI,
  getFieldOfStudy as getFieldOfStudyAPI,
  getGrade as getGradeAPI,
  getCompany as getCompanyAPI,
  getAccommodation as getAccommodationAPI,
  getCategories as getCategoriesAPI,
  getJobTitlesById as getJobTitlesByIdAPI,
  getSalaryType as getSalaryTypeAPI,
  getJobByCategory as getJobByCategoryAPI,
  getJobsByCompany as getJobsByCompanyAPI,
  getSuitableFor as getSuitableForAPI,
  getFilteredJob as getFilteredJobAPI,
  getCitiesByCountry as getCitiesByCountryAPI,
  getCurrencyType as getCurrencyTypeAPI,
} from "./service";
import { getLanguage as getLanguageAPI } from "./../../app-ui/JobFilter/service";

export const getJob = createAsyncThunk("jobs/get-job", async ({ qs }) => {
  const _qs = jsonToQueryString(qs);
  const response = await getJobAPI(_qs);
  return response.data;
});

export const getJobTitle = createAsyncThunk("jobs/get-jobtitle", async () => {
  const response = await getJobTitleAPI();
  return response.data;
});

export const getEmploymentType = createAsyncThunk(
  "jobs/get-employment-type",
  async () => {
    const response = await getEmploymentTypeAPI();
    return response.data;
  }
);
export const getCurrencyType = createAsyncThunk(
  "auth/get-currency-type",
  async () => {
    const response = await getCurrencyTypeAPI();
    return response.data;
  }
);
export const getCountry = createAsyncThunk("jobs/get-country", async () => {
  const response = await getCountryAPI();
  return response.data;
});

export const getCountryisDesired = createAsyncThunk(
  "jobs/get-country-isDesired",
  async () => {
    const response = await getCountryisDesiredAPI();
    return response.data;
  }
);

export const getCity = createAsyncThunk("jobs/get-city", async () => {
  const response = await getCityAPI();
  return response.data;
});

export const getQualification = createAsyncThunk(
  "jobs/get-qualification",
  async () => {
    const response = await getQualificationAPI();
    return response.data;
  }
);

export const getFieldOfStudy = createAsyncThunk(
  "jobs/get-field-of-study",
  async () => {
    const response = await getFieldOfStudyAPI();
    return response.data;
  }
);

export const getGrade = createAsyncThunk("jobs/get-grade", async () => {
  const response = await getGradeAPI();
  return response.data;
});

export const getCompany = createAsyncThunk("jobs/get-company", async () => {
  const response = await getCompanyAPI();
  return response.data;
});

export const getAccommodation = createAsyncThunk(
  "jobs/get-accommodation",
  async () => {
    const response = await getAccommodationAPI();
    return response.data;
  }
);
export const getCategories = createAsyncThunk("jobs/get-category", async () => {
  const response = await getCategoriesAPI();

  return response.data;
});

export const getJobTitlesById = createAsyncThunk(
  "jobs/get-jobtitles-by-id",
  async (id) => {
    const response = await getJobTitlesByIdAPI(id);
    return response.data;
  }
);

export const getSalaryType = createAsyncThunk(
  "jobs/get-salarytype",
  async () => {
    const response = await getSalaryTypeAPI();
    return response.data;
  }
);

export const getJobByCategory = createAsyncThunk(
  "jobs/get-job-by-category",
  async (id) => {
    let categoryId = "";
    if (id) {
      categoryId = `&categoriesId=${id}`;
    }
    const response = await getJobByCategoryAPI(categoryId);
    return response.data;
  }
);

export const getJobsByCompany = createAsyncThunk(
  "jobs/get-job-by-company-id",
  async (id) => {
    const companyId = `&companyId=${id}`;
    const response = await getJobsByCompanyAPI(companyId);
    return response.data;
  }
);

export const getSuitableFor = createAsyncThunk(
  "jobs/get-suitable-for",
  async () => {
    const response = await getSuitableForAPI();
    return response.data;
  }
);

export const getFilteredJob = createAsyncThunk(
  "jobs/get-filtered-job",
  async (params) => {
    const newparams = String("&").concat(params);
    // console.log(newparams);
    const response = await getFilteredJobAPI(newparams);
    return response.data;
  }
);

export const getCitiesByCountry = createAsyncThunk(
  "jobs/get-cities-by-country",
  async (id) => {
    const response = await getCitiesByCountryAPI(id);
    return response.data;
  }
);

export const getLanguage = createAsyncThunk("/jobs/get-languages", async () => {
  const response = await getLanguageAPI();
  return response.data;
});
