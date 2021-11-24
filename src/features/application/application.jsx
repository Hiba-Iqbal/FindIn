import React, { useEffect, useState } from "react";
import "./application.scss";
import Button from "../../shared-ui/Button/Button.js";
import { getApplicationRequest } from "./service.js";
import { useParams } from "react-router";
import { Spin } from "antd";

const Application = () => {
  let params = useParams();

  const [application, setApplication] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let fn = async () => {
      let application = await getApplicationRequest(params?.id);
      setApplication(application);
      setLoading(false);
    };
    fn();
  }, []);

  let {
    data: {
      firstName = "",
      lastName = "",
      dpURL,
      aRDesiredLocation = [],
      id,
      additionalNote = "",
    } = {},
  } = application;

  return (
    <div className="application-wrapper">
      <div className="app-items">
        {loading && (
          <div className="loader">
            <Spin />
          </div>
        )}
        <div className="logo mb-5">
          <img
            src={require("../../assets/images/logo/jobsmideast-logo.png")}
            alt=""
          />
        </div>
        <div className="user-info">
          <img src={dpURL} alt="" />
          <p className="mt-3">{`${firstName} ${lastName}`}</p>
          <p className="desc">{additionalNote}</p>
        </div>
        {aRDesiredLocation?.length > 0 && (
          <div className="fields">
            <div className="fields-items">
              <p>Desired Location</p>
              <div className="fields-items-row">
                {aRDesiredLocation?.map((res, i) => {
                  return <p key={i}>{res}</p>;
                })}
              </div>
            </div>
          </div>
        )}
        <Button themecolor="light">Download Resume</Button>
      </div>
    </div>
  );
};

export default Application;
