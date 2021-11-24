import React, { useEffect } from "react";
import "./_services.scss";
import "./_Responsive.scss";
import { Input, Form, Select } from "antd";
import Button from "../../shared-ui/Button/Button";
import * as Rules from "../../utils/rules";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  selectCategories,
  selectComingSoonSuccess,
  selectStatus,
} from "./slice";
import { getCategories, comingSoon } from "./thunk";
import { showSuccessMessage } from "../../utils/message";

const { Option } = Select;
const { TextArea } = Input;

const Services = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategories);
  const comingSoonSuccess = useAppSelector(selectComingSoonSuccess);
  const isLoading = useAppSelector(selectStatus);

  const [form] = Form.useForm();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    if (comingSoonSuccess === true) {
      form.resetFields();
      showSuccessMessage("Thank you");
    }
  }, [comingSoonSuccess]);

  const onFinish = (v) => {
    const payload = v;
    dispatch(comingSoon({ payload }));
  };

  return (
    <div className="services-main">
      <div className="cust-reward-section">
        <h1 className="coming-soon">Coming soon...</h1>
        <h1 className="">
          Our loyalty and customer reward section, built around what you love.
        </h1>
        <p className="full-desc">
          This page will be for services such as restaurants, estate agencies,
          air lines and other sectors that provide services to our users,
          providing you with discount codes and the best offers on the market
          exclusively available to Jobsmideast.com users.
        </p>
        <div className="icons">
          <img
            src={require("../../assets/images/Services/glass.svg")}
            alt=""
            className="icons"
          />
          <img
            src={require("../../assets/images/Services/restaurants.svg")}
            alt=""
            className="icons"
          />
          <img
            src={require("../../assets/images/Services/home.svg")}
            alt=""
            className="icons"
          />
          <img
            src={require("../../assets/images/Services/airplane.svg")}
            alt=""
            className="icons"
          />
          <img
            src={require("../../assets/images/Services/construction.svg")}
            alt=""
            className="icons"
          />
        </div>
      </div>
      <div className="user-services">
        <div className="services-form">
          <p className="services-desc">
            If you would like to provide our users with your services, then
            please fill out the form below and we'll be in touch with you
            shortly.
          </p>
          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            className="services-form-wrapper c-form">
            <Form.Item
              label="Name"
              name="name"
              className="c-input"
              rules={Rules.nameRule}>
              <Input autoComplete="off" className="" size="" type="text" />
            </Form.Item>
            <Form.Item
              label="Work email adress"
              name="email"
              className="c-input"
              rules={Rules.emailRule}>
              <Input autoComplete="off" className="" size="" type="text" />
            </Form.Item>
            <Form.Item
              label="Mobile phone number"
              name="mobile"
              className="c-input"
              rules={Rules.phoneRule}>
              <Input autoComplete="off" className="" size="" type="number" />
            </Form.Item>
            <Form.Item
              label="Category"
              name="categoryId"
              className="c-input select-w100"
              rules={Rules.requiredRule}>
              <Select getPopupContainer={(trigger) => trigger.parentNode}>
                {categories?.map((d) => (
                  <Option value={d.id}>{d.title}</Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="Short Message (Optional)"
              name="message"
              className="text-area">
              <TextArea rows={4} />
            </Form.Item>
            <div className="submit-btn">
              <Button
                themecolor={"green"}
                loading={isLoading}
                htmlType="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Services;
