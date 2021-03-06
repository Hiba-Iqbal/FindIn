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


  const onFinish = (values) => {
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
          <img
            className="login-background-image"
            src={require("../../assets/images/auth/login-background.png")}
            alt="img-bg"
          />
        </div>
        <div className="second-container">

          {/* Form */}
          <Form
            autoComplete="off"
            className="c-form login-form"
            layout="vertical"
            onFinish={onFinish}>

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
