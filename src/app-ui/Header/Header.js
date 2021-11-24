import React, { useState } from "react";
import { Link } from "react-router-dom";

import { VscMenu, VscChromeClose } from "react-icons/vsc";

import Button from "../../shared-ui/Button/Button";
import LogoImage from "../../assets/images/logo/jobsmideast-logo.png";

function Header() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [menu, setMenu] = useState(false);

  const getActiveClassForPath = (currentLocation, path) => {
    return currentLocation === path ? "active b-text" : "";
  };

  return (
    <div className="c-header">
      <span className="inner-container">
        <Link to="/">
          <img className="logo" src={LogoImage} alt="Logo" />
        </Link>
        <nav className="menu">
          <Link
            onClick={() => setCurrentPath("/signup")}
            to="/employer-signup"
            className={getActiveClassForPath(currentPath, "/signup")}>
            Post a free job
          </Link>
          <Link
            to="/employee-and-agency"
            onClick={() => setCurrentPath("/employee-and-agency")}
            className={getActiveClassForPath(
              currentPath,
              "/employee-and-agency"
            )}>
            Employers & agencies
          </Link>
          <Link
            to="/job-seekers"
            onClick={() => setCurrentPath("/job-seekers")}
            className={getActiveClassForPath(currentPath, "/job-seekers")}>
            Job Seekers
          </Link>
          <Link
            to="/jobs"
            onClick={() => setCurrentPath("/jobs")}
            className={getActiveClassForPath(currentPath, "/jobs")}>
            Jobs
          </Link>
          <Link
            to="/blogs"
            onClick={() => setCurrentPath("/blog")}
            className={getActiveClassForPath(currentPath, "/blog")}>
            Blogs
          </Link>

          {/* S E R V I C E S ____ P A G E ______D O W N_______ F O R  ______ N O W */}

          {/* <Link
            to="/services"
            onClick={() => setCurrentPath("/services")}
            className={getActiveClassForPath(currentPath, "/services")}>
            Services
          </Link> */}
          {/* <Link
            to="/pricing"
            onClick={() => setCurrentPath("/pricing")}
            className={getActiveClassForPath(currentPath, "/pricing")}>
            Pricing
          </Link> */}
        </nav>
        <div className={`mobile-menu ${menu ? "menu-open" : ""}`}>
          <div className="links-wrapper">
            <Link
              to="/signup"
              onClick={() => {
                setCurrentPath("/");
                setMenu(false);
              }}>
              Post a free job
            </Link>
            <Link
              to="/employee-and-agency"
              onClick={() => {
                setCurrentPath("/employee-and-agency");
                setMenu(false);
              }}
              className={getActiveClassForPath(
                currentPath,
                "/employee-and-agency"
              )}>
              Employers & agencies
            </Link>
            <Link
              to="/job-seekers"
              onClick={() => {
                setCurrentPath("/job-seekers");
                setMenu(false);
              }}
              className={getActiveClassForPath(currentPath, "/job-seekers")}>
              Job Seekers
            </Link>
            <Link
              to="/jobs"
              onClick={() => {
                setCurrentPath("/jobs");
                setMenu(false);
              }}
              className={getActiveClassForPath(currentPath, "/jobs")}>
              Jobs
            </Link>
            <Link
              to="/blogs"
              onClick={() => {
                setCurrentPath("/blog");
                setMenu(false);
              }}
              className={getActiveClassForPath(currentPath, "/blog")}>
              Blogs
            </Link>
            {/* D O W N ____ F O R _____ N O W */}
            {/* <Link
              to="/services"
              onClick={() => {
                setCurrentPath("/services");
                setMenu(false);
              }}>
              Services
            </Link> */}
            {/* <Link
              to="/pricing"
              onClick={() => {
                setCurrentPath("/pricing");
                setMenu(false);
              }}
              className={getActiveClassForPath(currentPath, "/pricing")}>
              Pricing
            </Link> */}
            <Link
              to="/login"
              onClick={() => {
                setCurrentPath("/login");
                setMenu(false);
              }}
              className="login">
              Login
            </Link>
          </div>
        </div>
        <nav className="align-items-center">
          <Link to="/login" className="login">
            Login
          </Link>
          <Link
            className="text-decoration-none"
            to="/signup"
            onClick={() => {
              setCurrentPath("/signup");
              setMenu(false);
            }}>
            <Button className="sign-up-btn">Sign up</Button>
          </Link>
          <button onClick={() => setMenu(!menu)} className="toggle-button">
            {menu ? (
              <VscChromeClose className="close-icon" size="25px" />
            ) : (
              <VscMenu className="menu-icon" size="25px" />
            )}
          </button>
        </nav>
      </span>
      <span className="shadow-box"></span>
    </div>
  );
}

export default Header;
