import React from "react";
import { useHistory } from "react-router";
import Fade from "react-reveal/Fade";
import { Row, Col } from "antd";
import Button from "../../shared-ui/Button/Button";
import BannerWithImages from "../../shared-ui/BannerWithImages/BannerWithImages";
import "./_Home.scss";
import "./_Responsive.scss";

function Home() {
  const history = useHistory();
  return (
    <>
      <div className="home">
        <div className="container-fluid">
          <div className="row banner-spacing">
            <div className="col-lg-6 col-xl-6 px-xl-5 px-lg-3 first-banner-heading-container">
              <span className="inner-container">
                {/* <Fade delay={300} bottom duration={1200}> */}
                {/* <div> */}
                <Fade bottom>
                  <h2 className="main-heading">
                    THE{" "}
                    <span className="banner-heading-highlight">SMARTEST </span>{" "}
                    JOB SITE IN THE MIDDLE EAST.
                  </h2>
                </Fade>
                <Fade bottom delay={500}>
                  <h5 className="sub-heading color-text">
                    Be the best. Find the best. Choose the best.
                  </h5>
                </Fade>

                <Fade bottom delay={500}>
                  <p className="banner-content mobile-textalign">
                    Jobsmideast is the fastest growing career platform in the
                    Middle East. Our portal allows job seekers and companies to
                    connect directly, chat in real time, track of all
                    applications sent or received, and other cutting-edge
                    features to help you find the right fit.
                  </p>
                </Fade>

                <Fade bottom delay={700}>
                  <div>
                    <Button
                      onClick={() => history.push("/signup")}
                      className="mt-4 mb-3 button-center get-started-btn"
                      themecolor="blue"
                      type={"large"}>
                      Get Started{" "}
                      <img
                        className="animated-icon"
                        src={require("../../assets/images/icons/right-arrow-icon.svg")}
                        alt="->"
                      />
                    </Button>
                    <p className="small-txt mobile-textalign">
                      It’s free to join, for everyone!
                    </p>
                    {/* /Join us for free. Launch date: June 2021. */}
                  </div>
                </Fade>
                {/* </div> */}
                {/* </Fade> */}
              </span>
            </div>

            <Fade bottom duration={1200} delay={300}>
              <div className="col-lg-6 col-xl-6 p-0 margin-mobile">
                <BannerWithImages className="c-banner-responsive" />
              </div>
            </Fade>
          </div>
        </div>

        <Fade bottom duration={1200}>
          <div>
            <div className="home-content-container">
              <h2 className="main-heading">EMPLOYERS, AGENCIES, JOBSEEKERS,</h2>
              <h5 className="mobile-textalign">connected in one platform.</h5>
            </div>

            <div className="container-fluid mid-image p-0 d-flex justify-content-center">
              <img
                className="img-mobile h-100"
                src={require("../../assets/images/home/1-homepage.png")}
                alt=""
              />
            </div>
          </div>
        </Fade>
        <div className="container-benefit">
          <Fade bottom duration={1200}>
            <div className="inner-container">
              <div className="box">
                <img
                  src={require("../../assets/images/icons/ea/ea-1.svg")}
                  alt="img"
                />
                <span>
                  <h3 className="a-text">Free CRM</h3>
                  <p>Built-in CRM with drag and drop function.</p>
                </span>
              </div>

              <div className="box">
                <img
                  src={require("../../assets/images/icons/ea/ea-2.svg")}
                  alt="img"
                />
                <span>
                  <h3 className="a-text">Save up to 75%</h3>
                  <p>Save up to 75% of your annual recruitment budget</p>
                </span>
              </div>
              <div className="box">
                <img
                  src={require("../../assets/images/icons/ea/ea-3.svg")}
                  alt="img"
                />
                <span>
                  <h3 className="a-text">Direct chat + Inbox</h3>
                  <p>
                    No more emails; connect & chat with candidates directly.
                  </p>
                </span>
              </div>
              <div className="box">
                <img
                  src={require("../../assets/images/icons/ea/ea-4.svg")}
                  alt="img"
                />
                <span>
                  <h3 className="a-text">Candidate Match</h3>
                  <p>
                    Our smart filters will find you the perfect match in no
                    time.
                  </p>
                </span>
              </div>
            </div>
          </Fade>
        </div>
        {/* <div className="space"></div> */}
        <Fade bottom duration={1200}>
          <div>
            <div className="home-content-container">
              <h2 className="main-heading">KEEP EVERYTHING IN ONE PLACE.</h2>
              <h5 className="mobile-textalign">
                interviews, calls, connections and more.
              </h5>
            </div>
            {/* <div className="space"></div> */}

            <div className="container-fluid p-0 d-flex justify-content-center">
              <img
                className="w-75 img-mobile h-50"
                src={require("../../assets/images/home/8.png")}
                alt=""
              />
            </div>
          </div>
        </Fade>
        <div className="space"></div>
        <div className="container-filters">
          <Fade bottom duration={1200}>
            <span className="inner-container">
              <div className="box">
                <img
                  src={require("../../assets/images/icons/ma/ma-1.svg")}
                  alt="img"
                />
                <span>
                  <h3 className="b-text">One click apply</h3>
                  <p>
                    Short list multiple jobs and apply to them all with just 1
                    click
                  </p>
                </span>
              </div>

              <div className="box">
                <img
                  src={require("../../assets/images/icons/ma/ma-2.svg")}
                  alt="img"
                />
                <span>
                  <h3 className="b-text">Job Match</h3>
                  <p>
                    Set filters and let our clever system to match you with the
                    right jobs
                  </p>
                </span>
              </div>
              <div className="box">
                <img
                  src={require("../../assets/images/icons/ma/ma-3.svg")}
                  alt="img"
                />
                <span>
                  <h3 className="b-text">Direct chat + Inbox</h3>
                  <p>
                    Chat to employers & agencies in real time, no more emails!
                  </p>
                </span>
              </div>
              <div className="box">
                <img
                  src={require("../../assets/images/icons/ma/ma-4.svg")}
                  alt="img"
                />
                <span>
                  <h3 className="b-text">Follow Companies</h3>
                  <p>
                    Follow your favorite companies and stay up to date with
                    their latest vacancies
                  </p>
                </span>
              </div>
            </span>
          </Fade>
        </div>
        <div className="pr-0 bottom-container">
          {/* <Fade bottom duration={1000}> */}
          <div className="bottom-container-row">
            <div className="padding-mobile bottom-text-section text-column ">
              <img
                className="bottom-logo"
                src={require("..//..//assets/images/logo/jobsmideast-logo.png")}
                alt=""
              />
              <span className="small-paragraph">
                <strong>The smartest job site in the Middle East</strong>
                <br />
                <p>
                  Jobsmideast.com is the most advanced recruitment platform in
                  the Middle East. Whether you’re a job seeker or looking to
                  hire, Jobsmideast is here to support you in finding the right
                  fit. We have partnered with over thousands of Middle East
                  based companies, as well as other international companies that
                  use our intelligent features to look for qualified candidates.
                </p>

                <p>
                  We’re striving to innovate technologies that bring employers
                  and candidates together, using cutting edge software solution
                  allowing companies to shortlist profiles by filtering through
                  bulks of applicants and finding the right people for the job
                  in a few clicks.
                </p>

                <p>
                  Our creative team consists of some of the most talented and
                  experienced web developers, recruitment consultants, social
                  media specialists, and client account managers to make your
                  hiring experience efficient, effortless, and enjoyable. Client
                  service is at the heart of our operations, and it is our
                  priority at Jobsmideast.com.
                </p>

                <p>
                  Jobsmideast.com operates in Bahrain, Egypt, India, Kuwait,
                  Oman, Pakistan, Qatar, Saudi Arabia & the United Arab
                  Emirates, providing the most advanced recruitment tools,
                  communication systems, and API capabilities which will cater
                  to a minimum of 38 sectors and over 439 sub-sectors.
                </p>
              </span>
              <Button className="demo-btn" themecolor="blue">
                <a
                  className="book-a-demo-btn"
                  href="https://calendly.com/jobsmideast/demo?month=2021-04&back=1">
                  Book a Demo
                </a>
              </Button>
            </div>

            <div className="btm-container-img">
              {/* <div className="p-0 d-flex justify-content-center"> */}
              <img
                className="w-100 safari-fix"
                src={require("../../assets/images/home/20778407.png")}
                alt=""
              />
              {/* </div> */}
            </div>
          </div>
          {/* </Fade> */}
        </div>
      </div>
    </>
  );
}

export default Home;
