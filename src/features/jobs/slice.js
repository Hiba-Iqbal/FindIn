import { createSlice, isPending, isRejected } from "@reduxjs/toolkit";

import {
  getJob,
  getJobTitle,
  getEmploymentType,
  getCountry,
  getCountryisDesired,
  getCity,
  getQualification,
  getFieldOfStudy,
  getGrade,
  getCompany,
  getAccommodation,
  getCategories,
  getJobTitlesById,
  getSalaryType,
  getJobByCategory,
  getJobsByCompany,
  getSuitableFor,
  getFilteredJob,
  getCitiesByCountry,
  getCurrencyType,
  getLanguage,
} from "./thunk";

const thunks = [
  getJob,
  getJobTitle,
  getEmploymentType,
  getCountry,
  getCountryisDesired,
  getCity,
  getQualification,
  getFieldOfStudy,
  getGrade,
  getCompany,
  getAccommodation,
  getCurrencyType,
  getSalaryType,
  getSuitableFor,
  getFilteredJob,
];

const initialState = {
  status: "idle",
  errorMessage: "",
  jobs: [],
  jobTitles: [],
  employmentTypes: [],
  countries: [],
  allCountries: [],
  cities: [],
  qualifications: [],
  fieldsOfStudy: [],
  currencyType: [],
  grades: [],
  companies: [],
  accommodations: [],
  categories: [],
  jobTitlesById: [],
  salaryType: [],
  otherJobs: [],
  otherJobsByCompany: [],
  suitableFor: [],
  language: [],
  citiesByCountry: [],
  applyFilterSuccess: false,
};

export const slice = createSlice({
  name: "job",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getJob.fulfilled, (state, action) => {
        state.status = "idle";
        state.jobs = action.payload;
      })
      .addCase(getFilteredJob.fulfilled, (state, action) => {
        state.status = "idle";
        state.jobs = action.payload;
        state.applyFilterSuccess = true;
      })
      .addCase(getJobByCategory.fulfilled, (state, action) => {
        state.status = "idle";
        state.otherJobs = action.payload;
      })
      .addCase(getJobTitle.fulfilled, (state, action) => {
        state.status = "idle";
        state.jobTitles = action.payload;
      })
      .addCase(getEmploymentType.fulfilled, (state, action) => {
        state.status = "idle";
        state.employmentTypes = action.payload;
      })
      .addCase(getCountry.fulfilled, (state, action) => {
        state.status = "idle";
        state.allCountries = action.payload;
      })
      .addCase(getCountryisDesired.fulfilled, (state, action) => {
        state.status = "idle";
        state.countries = action.payload;
      })
      .addCase(getCity.fulfilled, (state, action) => {
        state.status = "idle";
        state.cities = action.payload;
      })
      .addCase(getQualification.fulfilled, (state, action) => {
        state.status = "idle";
        state.qualifications = action.payload;
      })
      .addCase(getFieldOfStudy.fulfilled, (state, action) => {
        state.status = "idle";
        state.fieldsOfStudy = action.payload;
      })
      .addCase(getGrade.fulfilled, (state, action) => {
        state.status = "idle";
        state.grades = action.payload;
      })
      .addCase(getCompany.fulfilled, (state, action) => {
        state.status = "idle";
        state.companies = action.payload;
      })
      .addCase(getAccommodation.fulfilled, (state, action) => {
        state.status = "idle";
        state.accommodations = action.payload;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.status = "idle";
        state.categories = action.payload;
      })
      .addCase(getJobTitlesById.fulfilled, (state, action) => {
        state.status = "idle";
        state.jobTitlesById = action.payload;
      })
      .addCase(getSalaryType.fulfilled, (state, action) => {
        state.status = "idle";
        state.salaryType = action.payload;
      })
      .addCase(getJobsByCompany.fulfilled, (state, action) => {
        state.status = "idle";
        state.otherJobsByCompany = action.payload;
      })
      .addCase(getLanguage.fulfilled, (state, action) => {
        state.status = "idle";
        state.language = action.payload;
      })
      .addCase(getSuitableFor.fulfilled, (state, action) => {
        state.status = "idle";
        state.suitableFor = action.payload;
      })
      .addCase(getCitiesByCountry.fulfilled, (state, action) => {
        state.status = "idle";
        state.citiesByCountry = action.payload;
      })
      .addCase(getCurrencyType.fulfilled, (state, action) => {
        state.status = "idle";
        state.currencyType = action.payload;
      })
      .addMatcher(isPending(...thunks), (state) => {
        state.status = "loading";
        state.errorMessage = null;
        state.applyFilterSuccess = false;
      })
      .addMatcher(isRejected(...thunks), (state, action) => {
        state.status = "failed";
        state.errorMessage = action.error.message;
        state.applyFilterSuccess = false;
      });
  },
});

export const selectStatus = (state) => state.jobs.status === "loading";
export const selectError = (state) => state.jobs.errorMessage;
export const selectJobs = (state) => state.jobs.jobs;
export const selectOtherJobs = (state) => state.jobs.otherJobs;
export const selectJobTitles = (state) => state.jobs.jobTitles;
export const selectEmploymentTypes = (state) => state.jobs.employmentTypes;
export const selectCountries = (state) => state.jobs.countries;
export const selectAllCountries = (state) => state.jobs.allCountries;
export const selectCities = (state) => state.jobs.cities;
export const selectLanguage = (state) => state.jobs.language;
export const selectQualifications = (state) => state.jobs.qualifications;
export const selectFieldsOfStudy = (state) => state.jobs.fieldsOfStudy;
export const selectGrades = (state) => state.jobs.grades;
export const selectCompanies = (state) => state.jobs.companies;
export const selectAccommodations = (state) => state.jobs.accommodations;
export const selectCategories = (state) => state.jobs.categories;
export const selectJobTitlesById = (state) => state.jobs.jobTitlesById;
export const selectSalaryType = (state) => state.jobs.salaryType;
export const selectOtherJobsByCompany = (state) =>
  state.jobs.otherJobsByCompany;
export const selectSuitableFor = (state) => state.jobs.suitableFor;
export const selectCitiesByCountry = (state) => state.jobs.citiesByCountry;
export const selectFilterApplySuccess = (state) =>
  state.jobs.applyFilterSuccess;
export const selectCurrencyType = (state) => state.jobs.currencyType;

// export const { getProfile } = slice.actions;

export default slice.reducer;
