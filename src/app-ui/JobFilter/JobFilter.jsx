import React, { useState, useEffect } from "react";

import { Input, Form, Select, Switch, Slider, Divider, Row, Col } from "antd";

import Modal from "../../shared-ui/Modal/Modal";
import Button from "../../shared-ui/Button/Button";
import * as Rules from "../../utils/rules";
import {
  getCity,
  getCountry,
  getCountryisDesired,
  getFieldOfStudy,
  getGrade,
  getSalaryType,
  getSuitableFor,
  getFilteredJob,
  getJob,
  getJobTitlesById,
} from "../../features/jobs/thunk";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  selectCountries,
  selectEmploymentTypes,
  selectJobTitles,
  selectAccommodations,
  selectCategories,
  selectJobTitlesById,
  selectSalaryType,
  selectQualifications,
  selectSuitableFor,
  selectFilterApplySuccess,
} from "../../features/jobs/slice";
import CountryCityModal from "../CountryCityModal/CountryCityModal";
import { getTitleById } from "../../utils/helper";
import { useForm } from "antd/lib/form/Form";
import { SuperSelect } from "../../shared-ui/SuperSelect/SuperSelect";
import { ReloadOutlined } from "@ant-design/icons";

import { SuperSelectWithSelect } from "../../shared-ui/SuperSelect/SuperSelect-withSelect";
import {
  getAccommodation,
  getCategories,
  getEmploymentType,
  getQualification,
} from "../../features/jobs/service";
import { useRef } from "react";
import { getCategory, getJobTitles, getJobtype } from "./service";

const { Option } = Select;

const JobFilter = (props) => {
  const jobFilterRef = useRef();
  const [selectedCitiesIds, setSelectedCitiesIds] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState(null);
  const [maxSalaryLimit, setMaxSalaryLimit] = useState(1000000);
  const [jobInfoForm] = Form.useForm();

  const dispatch = useAppDispatch();
  const jobTitles = useAppSelector(selectJobTitles);
  const [countriesCitiesModal, setCountriesCitiesModal] = useState(false);
  const employmentTypes = useAppSelector(selectEmploymentTypes);
  const countries = useAppSelector(selectCountries);
  const accommodations = useAppSelector(selectAccommodations);
  const qualifications = useAppSelector(selectQualifications);
  const categories = useAppSelector(selectCategories);
  const jobTitlesById = useAppSelector(selectJobTitlesById);
  const salaryType = useAppSelector(selectSalaryType);
  const suitableFor = useAppSelector(selectSuitableFor);
  const filterApplySuccess = useAppSelector(selectFilterApplySuccess);
  const [categoryId, setCategoryId] = useState(null);
  const [selectedSector, setSelectedSector] = useState(true);

  useEffect(() => {
    // dispatch(getCountry());
    dispatch(getCountryisDesired());
    dispatch(getCity());

    dispatch(getFieldOfStudy());
    dispatch(getGrade());

    dispatch(getSalaryType());
    dispatch(getSuitableFor());
  }, []);

  useEffect(() => {
    document.querySelectorAll(".ant-select-selector input").forEach((e) => {
      e.setAttribute("autocomplete", "off");
      //you can put any value but NOT "off" or "false" because they DO NOT works
    });
  });

  useEffect(() => {
    if (filterApplySuccess === true) {
      props.setCheckFilterValues(true);
      props.onHide();
    }
  }, [filterApplySuccess]);
  useEffect(() => {
    // console.log(selectedCountryId);
  }, [selectedCountryId]);

  const options = [
    { value: "Takashi" },
    { value: "John" },
    { value: "Frank" },
    { value: "Traver" },
    { value: "Mili" },
    { value: "Jack" },
  ];
  const [value, setValue] = useState([]);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // console.log("default", values);
    // console.log("EXTERNALLEY", form.getFieldsValue());
    // console.log("modified", values);
    if (selectedCountryId && selectedCitiesIds) {
      values.countryId = selectedCountryId;
      values.cityId = selectedCitiesIds[0];
    }
    if (selectedCountryId) {
      values.countryId = selectedCountryId;
    }
    // delete values.salaryRange;
    let o = Object.fromEntries(
      Object.entries(values).filter(([_, v]) => v != null)
    );
    const payload = new URLSearchParams(o).toString();
    // console.log("values", payload);

    dispatch(getFilteredJob(payload));
  };

  const handleMaxSalaryLimit = (value) => {
    if (value === 4) {
      setMaxSalaryLimit(10000000);
    } else {
      setMaxSalaryLimit(1000000);
    }
  };

  const handleReset = () => {
    form.resetFields();
    setCategoryId(null);
    setSelectedCountryId(null);
    dispatch(getJob());
    // props.onHide();
  };

  const jobFilterModal = document.querySelector(".job-filter-modal");

  const handleSetCountriesCitiesModal = () => {
    const modalBackdrop = document.querySelector(".modal-backdrop");
    // props.onHide();
    // console.log(modalBackdrop.style);
    // jobFilterRef.current.style.opacity = "0";
    // console.log(jobFilterRef.current.style);
    setCountriesCitiesModal(true);
  };
  return (
    <>
      <Modal
        className="center lg filter-modal override-width"
        show={props.show}
        onHide={props.onHide}>
        <Form
          style={{ zIndex: "50" }}
          form={form}
          onFinish={onFinish}
          className="filter-main">
          <div className="filter-header">
            <div className="filter-cell">
              <p>Filters</p>
              <Col>
                <Button
                  loading={props.isLoading}
                  htmlType="button"
                  onClick={() => {
                    handleReset();
                  }}
                  themecolor="outlined-red">
                  <ReloadOutlined id="star" />
                  Reset
                </Button>
              </Col>
            </div>
          </div>
          <div className="filter-section">
            <Row justify="center" wrap={true}>
              <Col
                span={8}
                style={{ zIndex: "400" }}
                className="jobs-grid switch-grid"
                lg={{ span: 8 }}
                sm={{ span: 12 }}
                xs={{ span: 24 }}>
                <Form.Item
                  label="Job type"
                  name="jobType"
                  className="c-input c-form p-0"
                  rules={null}
                  placeholder="select job type">
                  {/* <Select
                    getPopupContainer={(trigger) => trigger.parentNode}
                    placeholder="Select">
                    {employmentTypes?.map((d) => (
                      <Option value={d.id}>{d.title}</Option>
                    ))}
                  </Select> */}
                  <SuperSelectWithSelect
                    getPopupContainer={(trigger) => trigger.parentNode}
                    // defaultValue="Select Employment Type"
                    // placeholder="Bla Bla Bla"
                    fetchOptions={getEmploymentType}
                  />
                </Form.Item>
              </Col>
              <Col
                lg={{ span: 8 }}
                sm={{ span: 12 }}
                xs={{ span: 24 }}
                className="jobs-grid"
                span={8}>
                <Form.Item
                  label="Add location"
                  name="addLocation"
                  className="c-input c-input-with-icon c-form p-0"
                  rules={null}>
                  <img
                    className="input-icon"
                    src={require("../../assets/images/icons/country-select-icon.svg")}
                    alt=""
                  />
                  <Input
                    autoComplete={"" + Math.random()}
                    onClick={handleSetCountriesCitiesModal}
                    placeholder="Select countires and cities"
                    value={`${
                      selectedCountryId
                        ? getTitleById(countries, selectedCountryId)
                        : ""
                    }`}></Input>
                </Form.Item>
                <Modal
                  className="rm-padding medium country-city-modal-parent"
                  backdropClassName="country-city-modal-backdrop"
                  show={countriesCitiesModal}
                  onHide={() => setCountriesCitiesModal(false)}>
                  <CountryCityModal
                    selectedCitiesIds={selectedCitiesIds}
                    setSelectedCitiesIds={setSelectedCitiesIds}
                    setCountriesCitiesModal={setCountriesCitiesModal}
                    setSelectedCountryId={setSelectedCountryId}
                    selectedCountryId={selectedCountryId}
                  />
                </Modal>
              </Col>
              <Col
                style={{ zIndex: "392" }}
                lg={{ span: 8 }}
                sm={{ span: 12 }}
                xs={{ span: 24 }}
                className="jobs-grid"
                span={8}>
                <Form.Item
                  label="Category"
                  placeholder="Select category"
                  name="categoriesId"
                  className="c-input c-form p-0"
                  rules={null}>
                  {/* <Select
                    getPopupContainer={(trigger) => trigger.parentNode}
                    onSelect={(v) => dispatch(getJobTitlesById(v))}>
                    {categories?.map((d) => (
                      <Option value={d.id}>{d.title}</Option>
                    ))}
                  </Select> */}
                  {/* <SuperSelect
                    onSelect={(v) => dispatch(getJobTitlesById(v))}
                    getPopupContainer={(trigger) => trigger.parentNode}
                    defaultValue=""
                    fetchOptions={getCategories}
                  /> */}
                  {/* <SuperSelect
                  onSelect={(v) => {
                    jobInfoForm.resetFields(["jobTitleId"]);
                    setSelectedSector(false);
                    setCategoryId(v);
                  }}
                  // style={{ zIndex: 500 }}
                  getPopupContainer={(trigger) => trigger.parentNode}
                  fetchOptions={getSectors}
                /> */}
                  <SuperSelectWithSelect
                    style={{ zIndex: "392" }}
                    defaultValue="Select Category"
                    placeholder="Select Category"
                    onSelect={(v) => {
                      jobInfoForm.resetFields(["jobTitleId"]);
                      setSelectedSector(false);
                      setCategoryId(v);
                    }}
                    // style={{ zIndex: 500 }}
                    getPopupContainer={(trigger) => trigger.parentNode}
                    fetchOptions={getCategory}
                  />
                </Form.Item>
              </Col>
              <Col
                style={{ zIndex: "390" }}
                lg={{ span: 8 }}
                sm={{ span: 12 }}
                xs={{ span: 24 }}
                className="jobs-grid"
                span={8}>
                <Form.Item
                  label="Job title"
                  name="jobTitleId"
                  className="c-input c-form p-0"
                  rules={null}>
                  <SuperSelectWithSelect
                    style={{ zIndex: 390 }}
                    defaultValue="Select Job Title"
                    disabled={selectedSector}
                    dependencyId={categoryId}
                    getPopupContainer={(trigger) => trigger.parentNode}
                    fetchOptions={getJobTitles}
                  />
                  {/* <Select
                    getPopupContainer={(trigger) => trigger.parentNode}
                    placeholder="Select">
                    {" "}
                    {jobTitlesById?.map((d, i) => (
                      <Option key={i} value={d?.id}>
                        {d?.title}
                      </Option>
                    ))}
                  </Select> */}
                </Form.Item>
              </Col>
              <Col
                style={{ zIndex: "380" }}
                lg={{ span: 8 }}
                sm={{ span: 12 }}
                xs={{ span: 24 }}
                className="jobs-grid"
                span={8}>
                <Form.Item
                  label="Gender"
                  name="gender"
                  className="c-input c-form p-0"
                  rules={null}>
                  <Select
                    style={{ zIndex: 380 }}
                    getPopupContainer={(trigger) => trigger.parentNode}
                    placeholder="Select">
                    <Option value="Male">Male</Option>
                    <Option value="Female"> Female </Option>
                    <Option value="Other"> Other </Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col
                style={{ zIndex: "360" }}
                lg={{ span: 8 }}
                sm={{ span: 12 }}
                xs={{ span: 24 }}
                className="jobs-grid"
                span={8}>
                <Form.Item
                  label="Qualification"
                  name="qualificaionId"
                  className="c-input c-form p-0"
                  rules={null}>
                  <SuperSelectWithSelect
                    style={{ zIndex: 360 }}
                    getPopupContainer={(trigger) => trigger.parentNode}
                    defaultValue="Select Qualification"
                    fetchOptions={getQualification}
                  />
                </Form.Item>
              </Col>
              <Col
                style={{ zIndex: "350" }}
                lg={{ span: 8 }}
                sm={{ span: 12 }}
                xs={{ span: 24 }}
                className="jobs-grid"
                span={12}>
                <Form.Item
                  label="Salary type"
                  name="salaryTypeId"
                  className="c-input c-form p-0"
                  rules={null}>
                  <Select
                    style={{ zIndex: 350 }}
                    getPopupContainer={(trigger) => trigger.parentNode}
                    placeholder="Select salary type"
                    onSelect={handleMaxSalaryLimit}>
                    {salaryType?.map((d, i) => (
                      <Option key={i} value={d?.id}>
                        {d?.title}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col
                lg={{ span: 8 }}
                sm={{ span: 12 }}
                xs={{ span: 24 }}
                className="jobs-grid"
                span={12}>
                <Form.Item
                  label="Salary range from 0"
                  name="salaryRangeFrom"
                  className="c-input c-form p-0"
                  rules={null}>
                  <Input
                    type="number"
                    autoComplete={"" + Math.random()}
                    placeholder="Enter first name"
                  />
                </Form.Item>
              </Col>
              <Col
                lg={{ span: 8 }}
                sm={{ span: 12 }}
                xs={{ span: 24 }}
                className="jobs-grid"
                span={12}>
                <Form.Item
                  label="Upto 0"
                  name="salaryRangeUpto"
                  className="c-input c-form p-0"
                  rules={null}>
                  <Input
                    type="number"
                    autoComplete={"" + Math.random()}
                    placeholder="Enter first name"
                  />
                </Form.Item>
              </Col>
              {/* <Form.Item
                extra={<span>Equivalent to 2,000 GBP</span>}
                label="Salary range"
                name="salaryEnd"
                className="c-input c-form p-0"
                rules={null}>
                <Slider range={{ draggableTrack: true }} defaultValue={[0, 5000]} />
              </Form.Item> */}
              {/* <Col
                lg={{ span: 12 }}
                sm={{ span: 12 }}
                xs={{ span: 24 }}
                className="jobs-grid"
                span={8}>
                <Form.Item
                  // extra={
                  //   <span style={{ color: "green" }}>
                  //     Equivalent to 2,000 GBP
                  //   </span>
                  // }
                  label={
                    <div className="d-flex justify-content-between w-100 align-items-center">
                      <span>Select Salary Range</span>
                      <span style={{ fontSize: "10px" }}>
                        {salaryStart} - {salaryEnd} {"AED"}
                      </span>
                    </div>
                  }
                  name="salaryRange"
                  className="c-input c-form p-0"
                  rules={null}>
                  <Slider
                    onChange={(v) => {
                      setSalaryStart(v[0]);
                      setSalaryEnd(v[1]);
                    }}
                    min={0}
                    max={maxSalaryLimit}
                    range={{ draggableTrack: true }}
                    defaultValue={[0, 1000]}
                  />
                </Form.Item>
              </Col> */}
              <Col
                style={{ zIndex: "340" }}
                lg={{ span: 8 }}
                sm={{ span: 12 }}
                xs={{ span: 24 }}
                className="jobs-grid"
                span={12}>
                <Form.Item
                  label="Accommodation"
                  name="accommodationId"
                  className="c-input c-form p-0"
                  rules={null}>
                  <SuperSelectWithSelect
                    style={{ zIndex: "340" }}
                    getPopupContainer={(trigger) => trigger.parentNode}
                    defaultValue="Select"
                    fetchOptions={getAccommodation}
                  />
                </Form.Item>
              </Col>
              <Col
                style={{ zIndex: "330" }}
                lg={{ span: 8 }}
                sm={{ span: 12 }}
                xs={{ span: 24 }}
                className="jobs-grid"
                span={12}>
                <Form.Item
                  label="Suitable for"
                  name="suitableJobListId"
                  className="c-input c-form p-0"
                  rules={null}>
                  <Select
                    style={{ zIndex: 330 }}
                    getPopupContainer={(trigger) => trigger.parentNode}
                    placeholder="Select">
                    {" "}
                    {suitableFor?.map((d, i) => (
                      <Option key={i} value={d?.id}>
                        {d?.title}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            {/* <Row justify="center" wrap={true}></Row>
            <Row justify="center" wrap={true}></Row> */}
            {/* <Row justify="center" wrap={true}></Row> */}
          </div>
          <div className="filter-section ">
            <Row justify="center" wrap={true} className="width-auto">
              <Col
                span={8}
                className="jobs-grid switch-grid cent"
                lg={{ span: 8 }}
                sm={{ span: 12 }}
                xs={{ span: 24 }}>
                <Form.Item
                  className="switches"
                  valuePropName="checked"
                  name="isAnnualFlight"
                  label="Anual flight provided">
                  <Switch size="small" />
                </Form.Item>
              </Col>
              <Col
                span={8}
                className="jobs-grid switch-grid cent"
                lg={{ span: 8 }}
                sm={{ span: 12 }}
                xs={{ span: 24 }}>
                <Form.Item
                  className="switches"
                  valuePropName="checked"
                  name="isFamilyFlight"
                  label="Include family flights">
                  <Switch size="small" />{" "}
                </Form.Item>
              </Col>
              <Col
                span={8}
                className="jobs-grid switch-grid cent"
                lg={{ span: 8 }}
                sm={{ span: 12 }}
                xs={{ span: 24 }}>
                <Form.Item
                  className="switches"
                  label="Include utility bills"
                  name="isUtilityBills">
                  {" "}
                  <Switch size="small" />
                </Form.Item>
              </Col>
              <Col
                span={8}
                className="jobs-grid switch-grid cent"
                lg={{ span: 8 }}
                sm={{ span: 12 }}
                xs={{ span: 24 }}>
                <Form.Item
                  className="switches"
                  valuePropName="checked"
                  label="Include tuition fees"
                  name="isTuitionFee">
                  <Switch size="small" />
                </Form.Item>
              </Col>
              <Col
                span={8}
                className="jobs-grid switch-grid cent"
                lg={{ span: 8 }}
                sm={{ span: 12 }}
                xs={{ span: 24 }}>
                <Form.Item
                  className="switches"
                  valuePropName="checked"
                  label=" Provides gratuity bonus"
                  name="isGratuityBonus">
                  {" "}
                  <Switch size="small" />
                </Form.Item>
              </Col>
              <Col
                span={8}
                className="jobs-grid switch-grid cent"
                lg={{ span: 8 }}
                sm={{ span: 12 }}
                xs={{ span: 24 }}>
                <Form.Item
                  className="switches"
                  valuePropName="checked"
                  label="Provides visa"
                  name="isProvideVisa">
                  {" "}
                  <Switch size="small" />{" "}
                </Form.Item>
              </Col>
            </Row>
            <Divider></Divider>
            <divide>
              {/* <Button onClick={handleReset} themecolor="light mr-3">
                Reset Filter
              </Button> */}
              <Button
                loading={props.isLoading}
                type="submit"
                htmlType="submit"
                themecolor="outlined">
                Apply Filter
              </Button>
            </divide>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default JobFilter;
