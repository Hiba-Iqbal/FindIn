import React from "react";

import { Input, Form, Select, DatePicker, Checkbox } from "antd";

import Button from "../../../shared-ui/Button/Button";
import * as Rules from "../../../utils/rules";
import Modal from "../../../shared-ui/Modal/Modal";

const { Option } = Select;

const DashboardFrom = () => {
  // const WithHintText = ({ children }) => (
  //   <Popover
  //     placement="topLeft"
  //     overlayInnerStyle={{ width: 400 }}
  //     content={helperText}
  //     trigger="click"
  //   >
  //     {children}
  //   </Popover>
  // );
  // let helperText =
  //   "This helps employers understand your family needs and accommodate accordingly such as booking you flights, providing accommodation and benefits such as free or discounted tuition fees.";

  return (
    <>
      <Modal show={true}>
        <div className="modal-formContainer">
          <div className="modal-type">
            <h5>Add education</h5>
          </div>

          <Form className="c-form second-container align-items-start">
            <div className="m-form-row spacing">
              <Form.Item
                name="email"
                className="c-input"
                rules={Rules.emailRule}>
                <div className="c-label">
                  <label className="required">Qualification</label>
                </div>

                <Select
                  size="large"
                  defaultValue=""
                  style={{ width: 120 }}></Select>
              </Form.Item>

              <Form.Item
                name="email"
                className="c-input"
                rules={Rules.emailRule}>
                <div className="c-label">
                  <label className="required">Subject / Field of study</label>
                </div>

                <Select
                  size="large"
                  defaultValue=""
                  style={{ width: 120 }}></Select>
              </Form.Item>
            </div>

            <div className="m-form-row">
              <Form.Item
                name="firstName"
                className="c-input w-100 "
                rules={Rules.firstNameRule}>
                <label className="required">Desired locations to work in</label>
                <Input
                  autoComplete="off"
                  className="w-100"
                  placeholder=""
                  size="large"
                  type="text"
                />
              </Form.Item>
            </div>

            <div className="m-form-row spacing">
              <Form.Item
                name="dateOfbirth"
                className="c-input "
                rules={Rules.phoneRule}>
                <label className="required">Start year</label>
                <DatePicker format="DD-MM-YYYY" />
              </Form.Item>

              <Form.Item
                name="dateOfbirth"
                className="c-input "
                rules={Rules.phoneRule}>
                <label className="required">End year</label>
                <DatePicker format="DD-MM-YYYY" />
              </Form.Item>

              <Form.Item
                name="email"
                className="c-input"
                rules={Rules.emailRule}>
                <div className="c-label">
                  <label className="required">Grade</label>
                </div>

                <Select
                  size="large"
                  defaultValue=""
                  style={{ width: 120 }}></Select>
              </Form.Item>
            </div>

            <div className="m-form-row">
              <Form.Item name="remember" className="mb-0">
                <Checkbox value="">I currently study here</Checkbox>
              </Form.Item>
            </div>

            <div className="m-form-row">
              <textarea className="w-100 my-4"></textarea>
            </div>

            <div className="m-form-row left-align">
              <Button
                themecolor="light"
                type="large"
                htmlType="submit"
                // loading={true}
                block>
                Update
              </Button>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default DashboardFrom;
