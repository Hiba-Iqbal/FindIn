import { createSlice, isPending, isRejected } from "@reduxjs/toolkit";

import {
  getRole,
  getFamilyStatus,
  getFindUsPlatform,
  getNationality,
  getCompany,
  getCountry,
  getCity,
  getJobTitle,
  jobseekerSignup,
  employerSignup,
  confirmEmail,
  getCountryByIp,
  getCitiesByCountry,
  uploadProfileImage,
  uploadCompanyLogo,
  agencySignup,
} from "./thunk";

const thunks = [getCitiesByCountry, uploadProfileImage, uploadCompanyLogo];

const initialState = {
  status: "idle",
  roles: [],
  familyStatuses: [],
  nationalities: [],
  findUsPlatforms: [],
  companies: [],
  countries: [],
  cities: [],
  jobTitles: [],
  jobseekerSignupSuccess: false,
  employerSignupSuccess: false,
  agencySignupSuccess: false,
  confirmEmailSuccess: false,
  confirmEmailResponse: {},
  errorMessage: null,
  countryByIp: {},
  citiesByCountry: [],
  profileImage: null,
  companyLogo: null,
};

function isPendingAction(action) {
  return action.type.endsWith("/pending");
}

export const slice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    removePreUploadedProfileImage: (state) => {
      state.profileImage = null;
    },
    removePreUploadedCompanyLogo: (state) => {
      state.companyLogo = null;
    },
    removePreExistingErrorMessages: (state) => {
      state.errorMessage = null;
      state.employerSignupSuccess = false;
    },
    setSignupStateFalse: (state) => {
      state.jobseekerSignupSuccess = false;
      state.employerSignupSuccess = false;
      state.agencySignupSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRole.fulfilled, (state, action) => {
        state.status = "idle";
        state.roles = action.payload;
      })
      .addCase(getFamilyStatus.fulfilled, (state, action) => {
        state.status = "idle";
        state.familyStatuses = action.payload;
      })
      .addCase(getNationality.fulfilled, (state, action) => {
        state.status = "idle";
        state.nationalities = action.payload;
      })
      .addCase(getFindUsPlatform.fulfilled, (state, action) => {
        state.status = "idle";
        state.findUsPlatforms = action.payload;
      })
      .addCase(getCountryByIp.fulfilled, (state, action) => {
        state.status = "idle";
        state.countryByIp = action.payload;
      })
      .addCase(getCompany.fulfilled, (state, action) => {
        state.status = "idle";
        state.companies = action.payload;
      })
      .addCase(getCountry.fulfilled, (state, action) => {
        state.status = "idle";
        state.countries = action.payload;
      })
      .addCase(getCity.fulfilled, (state, action) => {
        state.status = "idle";
        state.cities = action.payload;
      })
      .addCase(getCitiesByCountry.fulfilled, (state, action) => {
        state.status = "idle";
        state.citiesByCountry = action.payload;
      })
      .addCase(getJobTitle.fulfilled, (state, action) => {
        state.status = "idle";
        state.jobTitles = action.payload;
      })
      .addCase(jobseekerSignup.fulfilled, (state, action) => {
        state.status = "idle";
        state.jobseekerSignupSuccess = true;
      })
      .addCase(employerSignup.fulfilled, (state, action) => {
        state.status = "idle";
        state.employerSignupSuccess = true;
      })
      .addCase(agencySignup.fulfilled, (state, action) => {
        state.status = "idle";
        state.agencySignupSuccess = true;
      })
      .addCase(confirmEmail.fulfilled, (state, action) => {
        state.status = "idle";
        state.confirmEmailSuccess = true;
        state.confirmEmailResponse = action.payload;
      })
      .addCase(jobseekerSignup.rejected, (state, action) => {
        state.status = "failed";
        state.jobseekerSignupSuccess = false;
        state.errorMessage = action.error.message;
      })
      .addCase(employerSignup.rejected, (state, action) => {
        state.status = "failed";
        state.employerSignupSuccess = false;
        state.errorMessage = action.error.message;
      })
      .addCase(agencySignup.rejected, (state, action) => {
        state.status = "failed";
        state.agencySignupSuccess = false;
        state.errorMessage = action.error.message;
      })
      .addCase(confirmEmail.rejected, (state, action) => {
        state.status = "failed";
        state.confirmEmailSuccess = false;
        state.errorMessage = action.error.message;
      })
      .addCase(uploadProfileImage.fulfilled, (state, action) => {
        state.status = "idle";
        state.profileImage = action.payload;
      })
      .addCase(uploadProfileImage.pending, (state) => {
        state.isProfileImageLoading = true;
      })
      .addCase(uploadCompanyLogo.fulfilled, (state, action) => {
        state.status = "idle";
        state.companyLogo = action.payload;
      })
      .addCase(uploadCompanyLogo.pending, (state) => {
        state.isCompanyLogoLoading = true;
      })
      .addMatcher(isPending(...thunks), (state) => {
        state.status = "loading";
        state.errorMessage = null;
      })
      .addMatcher(isRejected(...thunks), (state, action) => {
        state.status = "failed";
        state.errorMessage = action.error.message;
        state.isProfileImageLoading = false;
      });
  },
});

export const selectLoadingStatus = (state) => state.signup.status === "loading";
export const selectErrorMessage = (state) => state.signup.errorMessage;
export const selectSignupStatus = (state) => state.signup.status;
export const selectEmployerSignUpSuccess = (state) =>
  state.signup.employerSignupSuccess;
export const selectAgencySignUpSuccess = (state) =>
  state.signup.agencySignupSuccess;
export const selectRole = (state) => state.signup.roles;
export const selectFamilyStatus = (state) => state.signup.familyStatuses;
export const selectNationality = (state) => state.signup.nationalities;
export const selectFindUsPlatform = (state) => state.signup.findUsPlatforms;
export const selectCompany = (state) => state.signup.companies;
export const selectCountry = (state) => state.signup.countries;
export const selectCity = (state) => state.signup.cities;
export const selectJobTitles = (state) => state.signup.jobTitles;
export const selectConfirmEmail = (state) => state.signup.confirmEmailSuccess;
export const selectConfirmEmailResponse = (state) =>
  state.signup.confirmEmailResponse;
export const selectJobseekerSignup = (state) =>
  state.signup.jobseekerSignupSuccess;
export const selectEmployerSignup = (state) =>
  state.signup.employerSignupSuccess;
export const selectCountryByIp = (state) => state.signup.countryByIp;
export const selectCitiesByCountry = (state) => state.signup.citiesByCountry;
export const selectIsProfileImageLoading = (state) =>
  state.signup.isProfileImageLoading;
export const selectProfileImage = (state) => state.signup.profileImage;
export const selectIsCompanyLogoLoading = (state) =>
  state.signup.isCompanyLogoLoading;
export const selectCompanyLogo = (state) => state.signup.companyLogo;

export const {
  removePreUploadedProfileImage,
  removePreUploadedCompanyLogo,
  setSignupStateFalse,
  removePreExistingErrorMessages,
} = slice.actions;

export default slice.reducer;
