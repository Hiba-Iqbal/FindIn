import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Form, Radio } from "antd";

import { userTypes } from "../../utils/constants";
import Button from "../../shared-ui/Button/Button";
import "./_SignUp.scss";
import "./_Responsive.scss";
import { useAppDispatch } from "../../store/hooks";
import {
  removePreExistingErrorMessages,
  removePreUploadedProfileImage,
} from "./slice";

function SignUp() {
  const [userType, setUserType] = useState(userTypes.JOBSEEKER.title);
  const history = useHistory();
  const dispatch = useAppDispatch();

  const onFinish = useCallback(() => {
    dispatch(removePreExistingErrorMessages());
    switch (userType) {
      case userTypes.JOBSEEKER.title:
        console.log("userType", userType);
        history.push("user-signup");
        return;
      case userTypes.EMPLOYER.title:
        console.log("userType", userType);

        history.push("employer-signup");

        return;
      case userTypes.AGENCY.title:
        console.log("userType", userType);
        history.push("agency-signup");
        return;
      default:
        console.log("default", userType);
        history.push("user-signup");
        return;
    }
  }, [userType]);

  const onChange = (e) => {
    setUserType(e.target.value);
  };

  return (
    <div className="c-container auth-wrapper">
      <div className="signup-container with-form role-container height-720">
        <Form
          className="second-container c-form w-100 signup-option"
          onFinish={onFinish}>
          {/* <img
            src={require("../../assets/images/auth/signup-illus.png")}
            alt="logo"
          /> */}

          <span class="mt-3">
            <h3 className="form-title">
              <mark>Create an account</mark>
            </h3>

            <Radio.Group onChange={onChange} value={userType}>
              <Radio value={userTypes.JOBSEEKER.title}>
                I'm looking for jobs
              </Radio>

              <Radio value={userTypes.EMPLOYER.title}>I'm an employer</Radio>

              {/* <Radio value={userTypes.AGENCY.title}>I'm a recruiter</Radio> */}
            </Radio.Group>
          </span>

          <Form.Item>
            <Button
              type="large"
              htmlType="submit"
              // loading={true}
              block
              themecolor="primary">
              Next
            </Button>
          </Form.Item>
        </Form>
        <div className="first-container on-right bg-2">
          <img
            className="logo"
            src={require("../../assets/images/logo/logo-white.png")}
            alt="logo"
          />
          <span className="inner-container">
            <div className="box">
              <img
                src={require("../../assets/images/icons/employee-signup-icons/emp-signup-1.svg")}
                alt="img"
              />
              <span>
                <h3 className="">Free CRM</h3>
                <p>Builtin CRM with drag and Drop function</p>
              </span>
            </div>
            <div className="box">
              <img
                src={require("../../assets/images/icons/employee-signup-icons/emp-signup-2.svg")}
                alt="img"
              />
              <span>
                <h3 className="">Save up to 75%</h3>
                <p>Save up to 75% of your annual recruitment budget</p>
              </span>
            </div>
            <div className="box">
              <img
                src={require("../../assets/images/icons/employee-signup-icons/emp-signup-3.svg")}
                alt="img"
              />
              <span>
                <h3 className="">Direct chat + Inbox</h3>
                <p>Connect with candidates direct, no more emails!</p>
              </span>
            </div>
            <div className="box">
              <img
                src={require("../../assets/images/icons/employee-signup-icons/emp-signup-4.svg")}
                alt="img"
              />
              <span>
                <h3 className="">Candidate Match</h3>
                <p>
                  Set accurate filters and let the system find you job seekers!
                </p>
              </span>
            </div>
          </span>
        </div>{" "}
      </div>
    </div>
  );
}

export default SignUp;
