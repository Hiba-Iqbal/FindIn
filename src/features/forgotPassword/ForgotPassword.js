import React, { useEffect, useState } from "react";

import { FaRedo } from "react-icons/fa";
import { Input, Form, Steps } from "antd";
import { useHistory } from "react-router";

import * as rules from "../../utils/rules";
import Button from "../../shared-ui/Button/Button";
import companyLogo from "../../assets/images/logo/logo-md.png";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { showSuccessMessage, showErrorMessage } from "../../utils/message";
import {
  selectStatus,
  selectError,
  selectVerifyEmailSuccess,
  selectResendVerifyEmailSuccess,
  selectVerifyTokenSuccess,
  selectResetPasswordSuccess,
  selectVerifyTokenDetail,
} from "./slice";
import {
  postResendVerifyEmail,
  postResetPassword,
  postVerifyEmail,
  postVerifyToken,
} from "./thunk";

import "./_ForgotPassword.scss";

const { Step } = Steps;

const renderSteps = (currentStep, onResendCode, isResendLoading) => {
  switch (currentStep) {
    case 0:
      return (
        <Form.Item
          label="Email"
          name="email"
          className="c-input"
          rules={rules.requiredRule}>
          <Input
            autoComplete="off"
            placeholder="Enter your email"
            size="large"
            type="email"
          />
        </Form.Item>
      );
    case 1:
      return (
        <>
          {" "}
          <Form.Item
            label="Verification code"
            name="token"
            className="c-input"
            rules={rules.requiredRule}>
            <Input
              autoComplete="off"
              placeholder="Enter the verification code"
              size="large"
              type="text"
            />
          </Form.Item>
          <Form.Item>
            <p className="alt-text">
              We've sent you an email with password reset verification code
            </p>
            <Button
              block
              type="large"
              htmlType="button"
              themecolor="light"
              className="align-self-center"
              onClick={onResendCode}
              loading={isResendLoading}>
              <FaRedo className="mr-2" />
              Resend code
            </Button>
          </Form.Item>
        </>
      );
    case 2:
    default:
      return (
        <>
          <Form.Item
            label="New Password"
            name="password"
            className="c-input"
            rules={rules.passwordRule}>
            <Input
              autoComplete="off"
              placeholder="Enter your new password"
              size="large"
              type="password"
            />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            className="c-input"
            rules={rules.confirmPasswordRule}
            dependencies={["password"]}>
            <Input
              autoComplete="off"
              placeholder="Confirm your password"
              size="large"
              type="password"
            />
          </Form.Item>
        </>
      );
  }
};

function ForgotPassword() {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const isLoading = useAppSelector(selectStatus);
  const errorMessage = useAppSelector(selectError);
  const verifyTokenDetail = useAppSelector(selectVerifyTokenDetail);
  const verifyEmailSuccess = useAppSelector(selectVerifyEmailSuccess);
  const verifyTokenSuccess = useAppSelector(selectVerifyTokenSuccess);
  const resetPasswordSuccess = useAppSelector(selectResetPasswordSuccess);
  const resendVerifyEmailSuccess = useAppSelector(
    selectResendVerifyEmailSuccess
  );
  const [userEmail, setUserEmail] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isResendLoading, setResendLoading] = useState(false);

  useEffect(() => {
    if (errorMessage) {
      showErrorMessage(errorMessage);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (verifyEmailSuccess || verifyTokenSuccess) {
      setCurrentStep((prev) => prev + 1);
    }
    if (verifyTokenSuccess && verifyTokenDetail?.token) {
      localStorage.setItem("token", verifyTokenDetail?.token);
    }
  }, [verifyEmailSuccess, verifyTokenSuccess]);

  useEffect(() => {
    if (resetPasswordSuccess) {
      showSuccessMessage("Password reset successfully");
      localStorage.clear();
      history.push("/login");
    }
  }, [resetPasswordSuccess]);

  useEffect(() => {
    if (resendVerifyEmailSuccess) {
      setResendLoading(false);
      showSuccessMessage("Verification code sent to your email");
    }
  }, [resendVerifyEmailSuccess]);

  const onFinish = ({ email, token, password }) => {
    if (!verifyEmailSuccess) {
      const payload = {
        email,
      };
      setUserEmail(email);
      dispatch(postVerifyEmail({ payload }));
    } else if (!verifyTokenSuccess) {
      const payload = {
        token,
      };
      dispatch(postVerifyToken({ payload }));
    } else if (!resetPasswordSuccess) {
      const payload = {
        password,
      };
      dispatch(postResetPassword({ payload }));
    }
  };

  const onResendCode = () => {
    setResendLoading(true);
    const payload = {
      email: userEmail,
    };
    dispatch(postResendVerifyEmail({ payload }));
  };

  return (
    <div className="c-container auth-wrapper forgot-password">
      <div className="c-card-container login-container">
        <div className="first-container">
          <img src={companyLogo} alt="logo" />
          {/* <p className="ml-4">The <b>smartest</b> job site in the Middle East.</p> */}
        </div>
        <div className="second-container">
          <Form className="c-form" onFinish={onFinish} layout="vertical">
            <h3 className="form-title w-100">
              {" "}
              <mark>Password Reset </mark>
            </h3>
            <Steps size="small" current={currentStep}>
              <Step key={1} />
              <Step />
              <Step />
            </Steps>
            <span className="mt-3 mb-2 w-100">
              {renderSteps(currentStep, onResendCode, isResendLoading)}
            </span>
            <Form.Item>
              <Button type="large" htmlType="submit" loading={isLoading} block>
                {currentStep < 2 ? "Next" : "Submit"}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
