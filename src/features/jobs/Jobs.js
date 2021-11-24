import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { Form, Empty, Spin } from "antd";
import { SuperSelectFindJobs } from "../../shared-ui/superselectfindjobs/superselectfindjobs";
import { transformJobData } from "./transformers";
import { useForm } from "antd/lib/form/Form";
import Button from "../../shared-ui/Button/Button";
import { MappedElement } from "../../utils/helper";
import JobCard from "../../shared-ui/JobCard/JobCard";
import JobFilter from "../../app-ui/JobFilter/JobFilter";
import JobDetails from "../../app-ui/JobDetails/JobDetails";
import filterIcon from "../../assets/images/icons/filter_icon.svg";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { RiCloseCircleLine } from "react-icons/ri";
import { useHistory } from "react-router";
import {
  getJob,
  getAccommodation,
  getCity,
  getCountryisDesired,
  getEmploymentType,
  getFieldOfStudy,
  getGrade,
  getJobTitle,
  getQualification,
  getJobByCategory,
  getJobsByCompany,
  getCurrencyType,
  getLanguage,
  getCountry,
  getCategories,
} from "./thunk";

import {
  getCountryisDesired as countryisDesired,
  getCityisDesired as cityisDesired,
  jobTitlesFindJobs,
  getCityById,
} from "./service";
import {
  selectCurrencyType,
  selectJobs,
  selectStatus,
  selectSalaryType,
} from "./slice";
import {
  selectCountries,
  selectAllCountries,
  selectEmploymentTypes,
  selectJobTitles,
  selectAccommodations,
  selectOtherJobs,
  selectOtherJobsByCompany,
} from "./slice";

import "./_Jobs.scss";
import "./_Responsive.scss";
import { SuperSelect } from "../../shared-ui/SuperSelect/SuperSelect";

function Jobs() {
  const myRef = useRef(null);
  const formRef = useRef();
  const [form] = useForm();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectStatus);
  const jobTitles = useAppSelector(selectJobTitles);
  const employmentTypes = useAppSelector(selectEmploymentTypes);
  const currencyType = useAppSelector(selectCurrencyType);
  const salaryTypes = useAppSelector(selectSalaryType);
  const countries = useAppSelector(selectCountries);
  const allCountries = useAppSelector(selectAllCountries);

  const jobs = useAppSelector(selectJobs);
  const accommodations = useAppSelector(selectAccommodations);
  const otherJobs = useAppSelector(selectOtherJobs);
  const otherJobsByCompany = useAppSelector(selectOtherJobsByCompany);
  const [jobDetails, setJobDetails] = useState(null);
  const [filter, setFilter] = useState(false);
  const [showJobDetails, setShowJobDetails] = useState(false);
  const [categoryId, setcategoryId] = useState(null);
  const [companyId, setcompanyId] = useState(null);
  const [searchedCityId, setSearchedCityId] = useState(null);
  const [checkFilterValues, setCheckFilterValues] = useState(false);

  const history = useHistory();
  const searchId = history.location.search;

  // console.log("searchId", searchId);
  // console.log("history", history);

  const [queryParams, setQueryParams] = useState({
    page: 1,
    limit: 100,
  });

  const searchCityName = async (id) => {
    try {
      console.log("id api call", id);
      let res = await getCityById(id);
      res.data.length && setSearchedCityId(res.data[0].title);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(getJob());
    dispatch(getJobTitle());
    dispatch(getEmploymentType());
    dispatch(getCountryisDesired());
    dispatch(getCity());
    dispatch(getQualification());
    dispatch(getFieldOfStudy());
    dispatch(getGrade());
    dispatch(getAccommodation());
    dispatch(getCurrencyType());
    dispatch(getLanguage());
    dispatch(getCountry());
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    dispatch(getJob({ qs: queryParams }));
  }, []);
  useEffect(() => {
    dispatch(getJob({ qs: queryParams }));
  }, [queryParams]);
  useEffect(() => {
    typeof searchedCityId === "number" && searchCityName(searchedCityId);
  }, [searchedCityId]);

  useEffect(() => {
    dispatch(getJobByCategory(categoryId));
  }, [categoryId]);

  useEffect(() => {
    companyId && dispatch(getJobsByCompany(companyId));
  }, [companyId]);

  useEffect(() => {
    if (jobs.length) {
      setJobDetails(jobs[0]);
      setcategoryId(jobs[0].categoriesId);
      setcompanyId(jobs[0].companyId);
    }
  }, [jobs]);

  let ShowFilter = () => {
    setFilter(!filter);
  };
  const executeScroll = () =>
    myRef.current.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

  const onSearchJob = (values) => {
    console.log("values", values);
    const qs = { ...queryParams, ...values };
    setQueryParams(qs);
    setSearchedCityId(values.location);

    dispatch(getJob({ qs }));
  };
  let timeout = 0;
  // const onFinish = () => {};
  const doSearch = (evt) => {
    if (evt.target.value.length > 1 || evt.target.value == "") {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        //search function
        formRef.current.submit();
      }, 500);
    }
  };

  return (
    <div className="jobs-page">
      <div className="jobs-wrapper">
        <JobFilter
          isLoading={isLoading}
          show={filter}
          onHide={ShowFilter}
          setCheckFilterValues={setCheckFilterValues}
        />
        {/* {console.log("jobs", jobs)} */}

        {/* Job List */}
        <div className="find-jobs-section">
          {/* {isLoading && !jobs.length && !checkFilterValues && (
            <div className="preloader">
              <Spin />
            </div>
          )} */}

          <Form
            className="job-sc"
            onFinish={onSearchJob}
            form={form}
            ref={formRef}>
            <span className="form-fields job-filter-section">
              <div className="jobs-filter-header-secrion">
                <Form.Item
                  style={{ zIndex: "390" }}
                  name="jobTitleName"
                  className="find-job-super-select c-input">
                  <SuperSelectFindJobs
                    style={{ zIndex: "390" }}
                    placeholder="Job title"
                    allowClear={true}
                    onType={false}
                    onChange={() => formRef.current.submit()}
                    getPopupContainer={(trigger) => trigger.parentNode}
                    fetchOptions={jobTitlesFindJobs}
                    // className="small"
                  />
                </Form.Item>
                <Form.Item
                  name="location"
                  className="find-job-super-select c-input">
                  {/* <Input
                    size="small"
                    className="xs"
                    type="text"
                    placeholder="Location"
                    prefix={
                      <img className="input-icon" src={locationIcon} alt="ico" />
                    }></Input> */}
                  {/* <SuperSelect
                    placeholder="Desired location"
                    allowClear={true}
                    mode={true}
                    getPopupContainer={(trigger) => trigger.parentNode}
                    // style={{ width: 200 }}
                    fetchOptions={cityisDesired}
                    // className="super-select"
                  /> */}
                  <SuperSelectFindJobs
                    placeholder="Desired location"
                    allowClear={true}
                    onType={false}
                    onChange={() => formRef.current.submit()}
                    getPopupContainer={(trigger) => trigger.parentNode}
                    fetchOptions={cityisDesired}
                    // className="small"
                  />
                </Form.Item>
              </div>
              <div className="jobs-button-section">
                <Button
                  type="small"
                  htmlType="submit"
                  className="filter-btns"
                  themecolor="rounded light"
                  style={{ height: "32px" }}>
                  Go
                </Button>

                <Button
                  icon={<img src={filterIcon} alt="ico" />}
                  className=" filter-icon rounded shadowed filter-btns"
                  onClick={ShowFilter}></Button>
              </div>
            </span>
          </Form>

          <div className="jobs-list">
            {/* {console.log(isLoading, !jobs.length, !checkFilterValues)} */}
            {isLoading ||
              (!jobs.length &&
                !checkFilterValues &&
                !searchedCityId &&
                !form.getFieldValue("jobTitleName") && (
                  <div className="preloader">
                    <Spin />
                  </div>
                ))}
            {(searchedCityId ||
              checkFilterValues ||
              form.getFieldValue("jobTitleName")) &&
              !jobs.length && (
                <>
                  {/* <Empty
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "95%",
                    justifyContent: "center",
                  }}
                  description={"No job"}
                  image={require("../../assets/images/icons/noData.png")}
                  imageStyle={{
                    height: 150,
                  }}
                /> */}
                  <p>
                    We couldn't find any jobs that matches your search. Your
                    Search for job <b> {form.getFieldValue("jobTitleName")} </b>{" "}
                    in
                    <b> {searchedCityId} </b> didn't match any jobs{" "}
                  </p>
                  <br />
                  <p>Here are some tips: </p>
                  <ul>
                    <li>Try other job titles</li>
                    <li>Try Alternative Locations</li>
                    <li>Adjust the filter to broaden your search</li>
                  </ul>
                  <Link to="/jobs">
                    <Button
                      className="applied"
                      themecolor="filled_blue"
                      onClick={() => {
                        setQueryParams({ page: 1, limit: 100 });
                      }}
                      // onClick={onApplyJob}
                      // loading={applyJobLoading}
                      // need to use reset job functionality here
                    >
                      Back to jobs
                    </Button>
                  </Link>
                </>
              )}

            <MappedElement
              data={jobs}
              renderElement={(obj, index) => {
                return (
                  <JobCard
                    key={index}
                    onClick={() => {
                      setJobDetails(obj);
                      executeScroll();
                      setShowJobDetails(true);
                      setcategoryId(obj.categoriesId);
                      setcompanyId(obj.companyId);
                    }}
                    job={transformJobData(
                      obj,
                      jobTitles,
                      employmentTypes,
                      allCountries,
                      salaryTypes,
                      currencyType
                    )}
                  />
                );
              }}
            />
          </div>
        </div>

        {/* Job Detail */}
        <div
          ref={myRef}
          className={`job-details ${showJobDetails ? "job-details-show" : ""}`}>
          {isLoading && (
            <div className="preloader">
              <Spin />
            </div>
          )}

          <RiCloseCircleLine
            className="back-icon-job"
            onClick={() => setShowJobDetails(false)}
          />

          {!jobDetails && (
            <div className="preloader">
              <Spin />
            </div>
          )}
          {jobDetails && (
            <JobDetails
              setShowJobDetails={() => setJobDetails(false)}
              otherJobs={otherJobs}
              data={transformJobData(
                jobDetails,
                jobTitles,
                employmentTypes,
                allCountries,
                salaryTypes,
                currencyType
              )}
              extraData={{ accommodations }}
              setJobDetails={setJobDetails}
              executeScroll={executeScroll}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Jobs;

const CEmpty = ({ description }) => (
  <Empty
    style={{
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "center",
    }}
    image={require("../../assets/images/icons/noData.png")}
    imageStyle={{
      height: 150,
    }}
    description={description}
  />
);
