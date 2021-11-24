import React from "react";
import { Input, Form } from "antd";
import Button from "../../../shared-ui/Button/Button";
import * as Rules from "../../../utils/rules";
import Checkbox from "antd/lib/checkbox/Checkbox";
import { Switch } from "antd";

const DashboardFrom = () => {
  return (
    <>
      <div className="container-fluid notifucation-setting-contaier">
        <div className="container setting-main">
          <div className="row">
            <div className="col-lg-10 col-12 m-auto settings-grid">
              <div className="settings-header">
                <h4 className="notfication-heading">
                  Notification and Settigns
                </h4>
              </div>

              <Form className="">
                <div className="set-notification">
                  <div className="setiings-rows">
                    <div className="settings-grids cust-spaceing">
                      <h1 className="settings-items-heaidns">Job Alerts</h1>

                      <div className="inner-items">
                        <Form.Item name="remember" className="mb-0">
                          <Checkbox value="">
                            Get email alerts for jobs that match your saved
                            searches.
                          </Checkbox>
                        </Form.Item>

                        <Form.Item name="remember" className="mb-0">
                          <Checkbox value="">
                            Every time a new jobs posted
                          </Checkbox>
                        </Form.Item>

                        <Form.Item name="remember" className="mb-0">
                          <Checkbox value="">Once a day</Checkbox>
                        </Form.Item>

                        <Form.Item name="remember" className="mb-0">
                          <Checkbox value="">Once a week</Checkbox>
                        </Form.Item>

                        <Form.Item name="remember" className="mb-0">
                          <Checkbox value="">Turn off completely</Checkbox>
                        </Form.Item>

                        <Form.Item name="remember" className="mb-0">
                          <Checkbox className="font-cehckbox" value="">
                            I currently study here
                          </Checkbox>
                        </Form.Item>
                      </div>
                    </div>

                    <div className="settings-grids">
                      <h1 className="settings-items-heaidns">
                        Following companies notifications <br />
                        <span className="set-heading-desc">
                          Receive job alerts once companies you follow post new
                          jobs
                        </span>
                      </h1>

                      <div className="inner-items">
                        <Form.Item name="remember" className="mb-0">
                          <Checkbox value="">
                            Every time a new jobs posted
                          </Checkbox>
                        </Form.Item>

                        <Form.Item name="remember" className="mb-0">
                          <Checkbox value="">Once a day</Checkbox>
                        </Form.Item>

                        <Form.Item name="remember" className="mb-0">
                          <Checkbox value="">Once a week</Checkbox>
                        </Form.Item>

                        <Form.Item name="remember" className="mb-0">
                          <Checkbox value="">Turn off completely</Checkbox>
                        </Form.Item>
                      </div>
                    </div>
                  </div>

                  <div className="setiings-rows">
                    <div className="settings-grids">
                      <h1 className="settings-items-heaidns">
                        SMS notifications
                      </h1>

                      <div className="inner-items">
                        <Form.Item name="remember" className="mb-0 toggle-btns">
                          <label className="toggle-btn-lable">
                            SMS notifications from Employers and Agencies
                          </label>

                          <Switch size="small" defaultChecked />
                        </Form.Item>

                        <Form.Item name="remember" className="mb-0 toggle-btns">
                          <label className="toggle-btn-lable">
                            SMS notifications from Jobsmideast.com
                          </label>

                          <Switch size="small" defaultChecked />
                        </Form.Item>

                        <Form.Item name="remember" className="mb-0 toggle-btns">
                          <label className="toggle-btn-lable">
                            Inbox messages notifications
                          </label>

                          <Switch size="small" defaultChecked />
                        </Form.Item>
                      </div>
                    </div>

                    <div className="settings-grids">
                      <h1 className="settings-items-heaidns">
                        Change email and Password
                      </h1>

                      <div className="inner-items my-3">
                        <Form.Item
                          name="email"
                          className="c-input form-padding"
                          rules={Rules.emailRule}>
                          <Input
                            autoComplete="off"
                            placeholder=""
                            size="small"
                            type="text"
                          />
                        </Form.Item>

                        <Form.Item
                          name="password"
                          className="c-input form-padding"
                          rules={Rules.passwordRule}>
                          <Input
                            autoComplete="off"
                            placeholder=""
                            size="small"
                            type="password"
                          />
                        </Form.Item>

                        <p className="items-desc item-desc-width">
                          Password must at least 8 characters and a mixture of
                          both uppercase and lowercase letters.
                        </p>

                        <Button
                          themecolor="light"
                          type="small"
                          htmlType="password"
                          block>
                          {" "}
                          Update
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="setiings-rows">
                    <div className="settings-grids">
                      <h1 className="settings-items-heaidns">
                        Career development
                      </h1>

                      <div className="inner-items">
                        <Form.Item name="remember" className="mb-0 toggle-btns">
                          <span className="x-form-items">
                            <label className="toggle-btn-lable mr-3">
                              Career Advice
                            </label>

                            <Switch size="small" defaultChecked />
                          </span>
                        </Form.Item>

                        <p className="items-desc">
                          Allow career pages, course providers and other
                          educational institutes to contact me
                        </p>
                      </div>
                    </div>

                    <div className="settings-grids">
                      <h1 className="settings-items-heaidns">
                        Inbox settings <br />
                        <span className="set-heading-desc">
                          Send me an e-mail, when
                        </span>
                      </h1>

                      <div className="inner-items">
                        <Form.Item name="remember" className="mb-0">
                          <Checkbox value="">
                            Someone shares a document with me
                          </Checkbox>
                        </Form.Item>

                        <Form.Item name="remember" className="mb-0">
                          <Checkbox value="">Someone messages me</Checkbox>
                        </Form.Item>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardFrom;
