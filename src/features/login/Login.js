import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Input, Form, Checkbox, Alert } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

import * as Rules from "../../utils/rules";
import { userTypes } from "../../utils/constants";
import Button from "../../shared-ui/Button/Button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { login } from "./thunk";
import { getRole } from "../signup/thunk";
import { selectRole } from "../signup/slice";
import {
  selectLogin,
  selectLoginError,
  selectLoginResponse,
  selectLoginStatus,
} from "./slice";
import "./_Login.scss";
import "./_Responsive.scss";

function Login() {
  const dispatch = useAppDispatch();
  const [userType, setUserType] = useState(userTypes.JOBSEEKER.title);
  const [rememberMe, setRememberMe] = useState(false);
  const isLoading = useAppSelector(selectLoginStatus);
  const loginSuccess = useAppSelector(selectLogin);
  const loginErrorMessage = useAppSelector(selectLoginError);
  const loginResponse = useAppSelector(selectLoginResponse);
  const roles = useAppSelector(selectRole);

  useEffect(() => {
    dispatch(getRole());
  }, []);

  useEffect(() => {
    if (loginSuccess === true) {
      // debugger;
      const token = loginResponse.token;
      const roleId = loginResponse.roleId;
      const role = roles.find((r) => r.id === roleId);
      if (rememberMe) {
        localStorage.setItem("token", token);
        localStorage.setItem("role", JSON.stringify(role));
      }

      const url = userTypes[role.title.toUpperCase()].url;
      if (url) {
        window.location = `${url}/?token=${token}`;
      }
    }
  }, [loginSuccess]);

  const getIsActive = (type) => {
    return userType === type ? "active" : "";
  };

  const getFormTitle = (type) => {
    switch (type) {
      case userTypes.AGENCY.title:
        return "Agency login";
      case userTypes.EMPLOYER.title:
        return "Employer login";
      case userTypes.JOBSEEKER.title:
        return "Job Seeker login";
      default:
        return "";
    }
  };

  const onFinish = (values) => {
    console.log("values: ", values);
    if (values.remember) {
      setRememberMe(true);
    } else {
      setRememberMe(false);
    }

    dispatch(login(values));
  };

  return (
    <div className="c-container auth-wrapper">
      <div className="c-card-container login-container">
        <div className="first-container display">
          <img
            src={require("../../assets/images/logo/logo-white.png")}
            alt="logo"
          />
          {/* <p className="ml-4">The <b>smartest</b> job site in the Middle East.</p> */}
          <img
            className="login-background-image"
            src={require("../../assets/images/auth/login-background.png")}
            alt="img-bg"
          />
        </div>
        <div className="second-container">
          {/* <div className="user-type">
            {Object.keys(userTypes).map((ut) => (
              <span className={`${getIsActive(userTypes[ut].title)}`} onClick={() => setUserType(userTypes[ut].title)}>
                {userTypes[ut].title}
              </span>
            ))}
          </div> */}

          {/* Form */}
          <Form
            autoComplete="off"
            className="c-form login-form"
            layout="vertical"
            onFinish={onFinish}>
            {/* <h3 className="form-title w-100 mb-4">
              <mark>{getFormTitle(userType)}</mark>
            </h3> */}

            <label>Email *</label>
            <Form.Item name="email" className="c-input" rules={Rules.emailRule}>
              <Input
                autoComplete="off"
                placeholder="Enter your email"
                size="large"
              />
            </Form.Item>

            <label>Password *</label>
            <Form.Item
              name="password"
              className="c-input mb-0"
              rules={Rules.passwordRule}>
              <Input.Password
                autoComplete="off"
                placeholder="Enter your password"
                size="large"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>

            <span className="d-flex justify-content-between align-items-center w-100 alt-text forget-password-app">
              <Form.Item
                valuePropName="checked"
                name="remember"
                className="mb-0">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Link to="/forgot-password" className="alt-text">
                Forgot Password
              </Link>
            </span>

            <Form.Item className="mt-5">
              <Button type="large" htmlType="submit" loading={isLoading} block>
                Login
              </Button>
            </Form.Item>

            {loginErrorMessage && (
              <Alert message={loginErrorMessage} type="error" />
            )}

            <Form.Item className="alt-text mb-0">
              <p className="mb-0">
                Don't have an account?{" "}
                <Link to="/signup">
                  <span className="sign-up"> Signup</span>
                </Link>
              </p>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
