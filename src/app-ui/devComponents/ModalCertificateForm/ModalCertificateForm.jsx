import React from "react";

import { Input, Form, DatePicker, Checkbox } from "antd";

import Modal from "../../../shared-ui/Modal/Modal";
import Button from "../../../shared-ui/Button/Button";
import * as Rules from "../../../utils/rules";

const ModalCertificateForm = () => {
  return (
    <>
      <Modal show={true}>
        <div className="certificate-form-container">
          <h1 className="cer-headings">Post graduate certificate</h1>

          <Form className="c-form">
            <div className="cer-form-rows cer-x-spacing">
              <Form.Item
                name="firstName"
                className="c-input w-100 "
                rules={Rules.firstNameRule}>
                <label className="required">Certificate</label>
                <Input
                  autoComplete="off"
                  className="w-100"
                  placeholder="e.g. PGCE, QTS, Fork lift driver license, TEFL"
                  size="large"
                  type="text"
                />
              </Form.Item>
            </div>

            <div className="cer-form-rows">
              <Form.Item
                name="dateOfbirth"
                className="c-input mx-auto"
                rules={Rules.phoneRule}>
                <label className="required">Start date</label>
                <DatePicker format="DD-MM-YYYY" />
              </Form.Item>

              <Form.Item
                name="dateOfbirth"
                className="c-input mx-auto"
                rules={Rules.phoneRule}>
                <span className="spacing-between">
                  <label className="required">End date</label>
                  <Checkbox className="mb-2" value="">
                    Present
                  </Checkbox>
                </span>

                <DatePicker format="DD-MM-YYYY" />
              </Form.Item>
            </div>

            <div className="cer-form-rows cer-x-spacing">
              <textarea className="w-100 my-4"></textarea>
            </div>

            <div className="cer-form-rows cer-x-spacing">
              <Button themecolor="light" type="large" htmlType="submit" block>
                Update
              </Button>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default ModalCertificateForm;
