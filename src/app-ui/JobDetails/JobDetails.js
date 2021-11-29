import React from "react";

import { Link, useHistory } from "react-router-dom";
import { Col, Divider, Popover, Row, Select } from "antd";
import { IoMdCloseCircle } from "react-icons/io";
import { BsFillChatFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactPlayer from "react-player";
import { JobMap, Map } from "../../shared-ui/Map/Map";
import { getTitleById, useWindowSize } from "../../utils/helper";
import Button from "../../shared-ui/Button/Button";
import defaultImage from "../../assets/images/default.png";
import ImagesGallery from "../../shared-ui/ImagesGallery/ImagesGallery";
import defaultBanner from "../../assets/images/sample/job-banner.png";
import "./_JobDetails.scss";
import "./_Responsive.scss";
import {
    selectCountries,
    selectAllCountries,
    selectCategories,
    selectCurrencyType,
    selectEmploymentTypes,
    selectJobTitles,
    selectOtherJobs,
    selectSalaryType,
    selectLanguage,
} from "../../features/jobs/slice";
import JobCard from "../../shared-ui/JobCard/JobCard";
import { transformJobData } from "../../features/jobs/transformers";
import { useAppSelector } from "../../store/hooks";
import moment from "moment";

const { Option } = Select;
export const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};

function JobDetails({
    data = {},
    showAllDetails = true,
    setJobDetails,
    extraData = {},
    setSelectedJobId,
    otherJobs,
    executeScroll,
    setShowJobDetails,
    searchedCompany,
}) {
    const countries = useAppSelector(selectCountries);
    const allCountries = useAppSelector(selectAllCountries);
    const jobTitles = useAppSelector(selectJobTitles);
    const employmentTypes = useAppSelector(selectEmploymentTypes);
    const categories = useAppSelector(selectCategories);
    const currencyType = useAppSelector(selectCurrencyType);
    const salaryTypes = useAppSelector(selectSalaryType);
    const languages = useAppSelector(selectLanguage);

    const history = useHistory();
    const createMarkup = (html) => {
        return { __html: html };
    };
    const { width, height } = useWindowSize();
    const {
        company: { specialities, companySize, categoryId, videoUrl },
    } = data;
    const category = getTitleById(categories, categoryId);

    return (
        <div className="c-job-detail-card">
            {/* Header */}
            <div className="header">
                <img className="job-banner-img" src={data.company?.companyBanner || defaultBanner} alt="banner-img" />
                <span className="banner-img-overlay"></span>

                <span className="job-info-wrapper">
                    <img className="job-img" src={data?.company?.companyLogo || defaultImage} alt="" />
                    <span className="company-details">
                        <h1 className="company-name">{data?.company?.companyName}</h1>
                        <h1 className="company-type">{data?.company?.tagLine || " "}</h1>
                        <h1 className="company-location small-text-common">
                            {data?.country || " "} {data?.country && data?.city?.title && ","}
                            {data?.city?.title || " "}{" "}
                        </h1>
                        <p className="job-date small-text-common">
                            Job start date: {moment(data?.startDate ? data?.startDate : " ").format("DD/MM/YYYY")}{" "}
                        </p>

                        <p className="job-date small-text-common">
                            Contract end date: {moment(data?.endDate ? data?.endDate : " ").format("DD/MM/YYYY")}{" "}
                        </p>
                        {width > 769 ? (
                            <>
                                {specialities?.length >= 1 && (
                                    <p className="company-specialities small-text-common">Specializes in: {specialities?.join(", ")}</p>
                                )}
                            </>
                        ) : null}
                    </span>
                </span>
                {width > 769 ? (
                    <div className="display-flex company-details-wrapper">
                        <div className="display-flex align-items company-sector-details">
                            <span className="company-details center">
                                <img className="mr-1" src={require("./../../assets/images/icons/Pie.svg")} />{" "}
                                <div>
                                    <h1 className="company-type d-flex align-items-center"> Company Sector </h1>
                                    <p className="company-category">{category || "N/A"}</p>
                                </div>
                            </span>

                            <span className="company-details center">
                                <img className="mr-1" src={require("./../../assets/images/icons/Users-3.svg")} />{" "}
                                <div className="short-details">
                                    <h1 className="company-type d-flex align-items-center">Company Size </h1>
                                    <p className="company-category">{companySize || "N/A"}</p>
                                </div>
                            </span>
                        </div>
                        {/* V I E W __ A L L ___ J O B S */}
                        <div
                            className="close-btn"
                            onClick={() => {
                                setShowJobDetails(false);
                                setSelectedJobId(null);
                            }}
                        >
                            <IoMdCloseCircle color="white" size="24px" />
                        </div>
                        {!searchedCompany ? <div className="view-jobs"></div> : null}
                    </div>
                ) : (
                    <>
                        {/* V I E W __ A L L ___ J O B S */}
                        <div
                            className="close-btn"
                            onClick={() => {
                                setShowJobDetails(false);
                                setSelectedJobId(null);
                            }}
                        >
                            <IoMdCloseCircle color="white" size="24px" />
                        </div>
                        {!searchedCompany ? <div className="view-jobs"></div> : null}
                    </>
                )}
                <div onClick={() => setJobDetails(data)} className="back-btn">
                    <img src={require("../../assets/images/icons/back-button.svg")} alt="" />
                </div>
            </div>

            {/* Content */}
            <div className="job-details-wrapper content-box">
                <span className="content-box first">
                    <span className="content-section">
                        {width > 1025 && (
                            <>
                                <span className="details-header">
                                    <span className="job-title content-block">
                                        <h6 className="company-page-heading">Job title:</h6>
                                        <span className="title">{data?.jobTitle?.title || ""}</span>{" "}
                                    </span>

                                    <span className="actions-wrapper">
                                        <Button className="applied" themecolor="outlined">
                                            <Link to="/login">Apply</Link>
                                        </Button>
                                        <Button className="applied" themecolor="outlined">
                                            <Link to="/login">Follow Company</Link>
                                        </Button>
                                        <Button className="applied" themecolor="outlined">
                                            <Link to="/login">Shorlist Job</Link>
                                        </Button>{" "}
                                    </span>
                                </span>
                                <span className="content-block">
                                    <h6 className="block-title company-page-heading">Job brief</h6>
                                    <p className="block-text">{data.jobBrief}</p>
                                </span>
                            </>
                        )}

                        <span className="content-block ">
                            <h6 className="block-title company-page-heading">Requirements</h6>

                            <ul className="">
                                {data?.qualification?.title && <li>{data?.qualification?.title}</li>}
                                {data?.certificate?.title && <li>Certificate required{data?.certificate?.title}</li>}
                                {data?.experienceListId >= 0 && (
                                    <li>
                                        {data?.experienceListId === 0
                                            ? "No experience required"
                                            : data.experienceListId + " years of minimum experience"}
                                        &nbsp;
                                    </li>
                                )}
                                {data?.language?.title && <li>Native language: &nbsp;{data?.language?.title}</li>}
                                {data?.otherLanguageId?.length > 0 && (
                                    <li>
                                        Other languages: &nbsp;
                                        {data?.otherLanguageId.map((lang) => getTitleById(languages, parseInt(lang)))?.join(", ")}
                                    </li>
                                )}

                                {data?.ageLimit && <li>Age Limit: &nbsp;{data?.ageLimit}</li>}
                                {data?.suitableJob?.title && <li>{data?.suitableJob?.title}</li>}
                            </ul>

                            <div dangerouslySetInnerHTML={createMarkup(data?.additionalRequirement)} />
                        </span>
                    </span>
                    {width < 1025 && (
                        <>
                            <span className="mobile-button">
                                <span className="content-section">
                                    <span className="job-title content-block">
                                        <h6 className="company-page-heading">Job title:</h6>
                                        <span className="title">{data?.jobTitle?.title || ""}</span>{" "}
                                    </span>
                                    <span className="content-block">
                                        <h6 className="block-title company-page-heading">Job brief</h6>
                                        <p className="block-text">{data.jobBrief}</p>
                                    </span>
                                </span>
                                <span className="actions-wrapper">
                                    <Button className="applied" themecolor="outlined">
                                        <Link to="/login">Apply</Link>
                                    </Button>
                                    <Button className="applied" themecolor="outlined">
                                        <Link to="/login">Follow Company</Link>
                                    </Button>
                                    <Button className="applied" themecolor="outlined">
                                        <Link to="/login">Shorlist Job</Link>
                                    </Button>
                                </span>
                            </span>
                        </>
                    )}
                    {showAllDetails && (
                        <div className="benefits-list">
                            <span>
                                <h6 className="title">Benefits</h6>
                            </span>
                            <span style={{ gap: "4px" }}>
                                Salary
                                <mark style={{ textAlign: "end" }}>
                                    {data?.salaryRangeFrom}-{data?.salaryRangeUpto} {data?.currency}/{data?.salaryType}
                                </mark>
                            </span>
                            <span>
                                Flights provided
                                <mark>{data.isAnnualFlight ? "Yes" : "No"}</mark>
                            </span>
                            <span>
                                Family flights included
                                <mark>{data.isFamilyFlight ? "Yes" : "No"}</mark>
                            </span>
                            <span>
                                Tuition fees covered
                                <mark>{data.isTuitionFee ? "Yes" : "No"}</mark>
                            </span>
                            <span style={{ gap: "1px" }}>
                                Accommodation
                                {!data.accommodationListId && <mark></mark>}
                                {data?.accommodationListId && (
                                    <mark style={{ textAlign: "end" }}>
                                        {!isNaN(Number(data?.accommodationListId))
                                            ? getTitleById(extraData.accommodations, Number(data?.accommodationListId?.[0]))
                                            : data?.accommodationListId?.[0]}
                                    </mark>
                                )}
                            </span>
                            <span>
                                Utility bills
                                <mark>{data.isUtilityBills ? "Yes" : "No"}</mark>
                            </span>
                            <span>
                                Visa provided
                                <mark>{data.isProvideVisa ? "Yes" : "No"}</mark>
                            </span>
                            <span>
                                Gratuity bonus
                                <mark>{data.isGratuityBonus ? "Yes" : "No"}</mark>
                            </span>
                        </div>
                    )}
                </span>

                <span className="content-box">
                    <span className="content-section">
                        <span className="content-block">
                            <h6 className="block-title company-page-heading">Jobs description</h6>

                            {/* <p className="block-text">{data.description}</p> */}
                            <div dangerouslySetInnerHTML={createMarkup(data?.description)} />
                        </span>
                        <span className="content-block">
                            {data?.lisence?.length >= 1 && <h6 className="company-page-heading mt-5">Licenses</h6>}
                            <div className="license-tags">
                                {data?.lisence?.map((tag) => (
                                    <span className="tags">{tag}</span>
                                ))}
                            </div>
                        </span>
                        <span className="content-block">
                            <h6 className="block-title company-page-heading">Skills required</h6>

                            <div dangerouslySetInnerHTML={createMarkup(data?.skills)} />
                        </span>

                        {showAllDetails && (
                            <>
                                {data?.city?.lat && data?.city?.lng && (
                                    <span className="content-block mt-2 pr-0">
                                        <h6 className=" company-page-heading thick-title mb-3">Job Location</h6>
                                        <span className="padding-left">
                                            <div className="block-map">
                                                <JobMap data={data?.company} lat={data?.city?.lat} lng={data?.city?.lng} zoom={16} />
                                            </div>
                                        </span>
                                    </span>
                                )}
                                <Divider className="divider" />
                                <span className="content-block">
                                    <h6 className="  d-flex justify-content-between align-items-center">
                                        <h6 className=" block-title company-page-heading">
                                            About company:
                                            <span style={{ color: "#2a8fff" }} className="ml-2 blue">
                                                {data?.company?.companyName || ""}
                                            </span>
                                        </h6>
                                    </h6>

                                    <span
                                        className="block-text markup"
                                        dangerouslySetInnerHTML={createMarkup(data?.company?.introduction)}
                                    ></span>
                                </span>
                                {data?.company?.photoUrl && data?.company?.photoUrl?.length > 0 && (
                                    <Carousel
                                        className="company-photos-carousel"
                                        swipeable={true}
                                        draggable={true}
                                        showDots
                                        responsive={responsive}
                                        infinite={true}
                                        autoPlaySpeed={1000}
                                        keyBoardControl={true}
                                        customTransition="all 1s"
                                        transitionDuration={1000}
                                        containerClass="carousel-container"
                                        dotListClass="custom-dot-list-style"
                                    >
                                        {data?.company?.photoUrl?.length &&
                                            data.company.photoUrl.map((img, i) => (
                                                <img className="company-single-photo" src={img} alt={`image ${i}`} />
                                            ))}
                                    </Carousel>
                                )}

                                {data?.company?.videoUrl && (
                                    <span className="content-block mt-4 pr-0">
                                        <h6 className="block-title company-page-heading thick-title mb-3">Company Video </h6>
                                        {data?.company?.videoUrl && (
                                            <div className="page-layouts video-section">
                                                <div className="w-100">
                                                    <ReactPlayer
                                                        width={"100%"}
                                                        style={{ width: "100%" }}
                                                        url={data.company?.videoUrl}
                                                        className="company-profile-video"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </span>
                                )}

                                <span className="content-block mt-4 pr-0">
                                    <h6 className=" company-page-heading thick-title mb-3">Map</h6>
                                    <div className="block-map">
                                        <Map data={data?.company} location={data?.company?.companyLocation} zoom={16} />
                                    </div>
                                </span>
                            </>
                        )}
                    </span>
                </span>

                {showAllDetails && (
                    <>
                        <span className="content-box first">
                            <span className="content-section">
                                <span className="content-block">
                                    <h6 className="block-title company-page-heading thick-title mb-3">Other jobs in your sector</h6>

                                    <Row
                                        gutter={16}
                                        style={{ margin: "0 auto", width: "100%" }}
                                        // justify={`${otherJobs?.length === 4 ? " " : "flex-start"}`}
                                        justify="flex-start"
                                    >
                                        {otherJobs?.map((otherJob, i) => (
                                            <Col key={i} span={8} lg={{ span: 8 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                                                <JobCard
                                                    onClick={() => {
                                                        setJobDetails(otherJob);
                                                        executeScroll();
                                                    }}
                                                    job={transformJobData(
                                                        otherJob,
                                                        jobTitles,
                                                        employmentTypes,
                                                        allCountries,
                                                        salaryTypes,
                                                        currencyType
                                                    )}
                                                    type="box"
                                                />
                                            </Col>
                                        ))}
                                    </Row>
                                </span>
                            </span>
                        </span>
                    </>
                )}
            </div>
        </div>
    );
}

export default React.memo(JobDetails);
