import React from "react";
import defaultImage from "../../assets/images/default.png";
import { dayTimeLeftFromNowTrue, readableDate } from "../../utils/helper";

const JobTagTypes = {
  MESSAGED: "MESSAGED",
  APPLIED: "APPLIED",
  SHORTLISTED: "SHORLISTED",
  FEATURED: "FEATURED",
};

const getTagByType = (type) => {
  switch (type) {
    case JobTagTypes.FEATURED:
      return (
        <span className="featured-tag">
          <img
            className="tag-icon"
            src={require("../../assets/images/icons/diamond_white_icon.svg")}
            alt=""
          />

          <p className="tag-text">Featured</p>
        </span>
      );

    case JobTagTypes.APPLIED:
      return (
        <span className="job-tag">
          <img
            className="tag-icon"
            src={require("../../assets/images/icons/check-icon-green.svg")}
            alt=""
          />

          <p className="tag-text">Applied</p>
        </span>
      );

    case JobTagTypes.SHORTLISTED:
      return (
        <span className="job-tag">
          <img
            className="tag-icon"
            src={require("../../assets/images/icons/shortlisted-job-icon.svg")}
            alt=""
          />

          <p className="tag-text">Shorlisted</p>
        </span>
      );

    case JobTagTypes.MESSAGED:
      return (
        <span className="job-tag">
          <img
            className="tag-icon"
            src={require("../../assets/images/icons/messaged-job-icon.svg")}
            alt=""
          />

          <p className="tag-text">Messaged</p>
        </span>
      );

    default:
      return null;
  }
};

function JobCard({ job = {}, type, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`c-job-card ${job.featured && "featured"} ${type}`}>
      <div id="for-flex" className="job-card-first-container">
        <img
          className="job-thumbnail"
          src={job?.company?.companyLogo || defaultImage}
          alt="logo"
        />

        <span className={type === "box" ? "" : "info-wrapper"}>
          <span className={type === "box" ? "" : "info"}>
            {type !== "box" && (
              <span className="title-row">
                <h6 className="title">{job?.jobTitle?.title || ""}</h6>

                <span className="location-container">
                  <img
                    className="location-icon"
                    src={require("../../assets/images/icons/location_icon.svg")}
                    alt="icon"
                  />

                  <p className="location-text">{job.country || ""}</p>
                </span>
              </span>
            )}

            {type !== "box" && (
              <span>
                <p>{job.company?.companyName}</p>

                {/* <p>Open till {readableDate(job.endDate)}</p> */}
                <p>Ends in {dayTimeLeftFromNowTrue(job.expiredAt)}</p>
                {/* {console.log(readableDate(job.expiredAt))} */}
              </span>
            )}
          </span>

          {type === "box" && (
            <>
              <span className="more-info">
                <p>Ends on {readableDate(job.expiredAt)}</p>
              </span>
            </>
          )}

          {type !== "box" && (
            <span className="more-info">
              <p>{job.employmentType}</p>
              <p>
                {job?.salaryRangeFrom}-{job?.salaryRangeUpto} {job?.currency}{" "}
                {job?.currency && job?.salaryType && "/"}
                {job?.salaryType}
              </p>
            </span>
          )}
        </span>
      </div>

      <div
        className={
          type === "box" ? "details-container-box" : "details-container"
        }>
        {type !== "box" ? (
          <p>
            {job?.jobBrief ? String(job?.jobBrief).slice(0, 145) + "..." : ""}
          </p>
        ) : null}

        {type === "box" && (
          <div>
            <p style={{ fontSize: "14px" }}>{job?.jobTitle?.title || job?.title}</p>
            <p>{job?.company?.companyName}</p>
            <p>{job?.employmentType}</p>
            <p>
              {job?.salaryRangeFrom}-{job?.salaryRangeUpto} {job?.currency}/
              {job?.salaryType}{" "}
            </p>
            <p style={{ color: "#5271FF" }}>{job.country}</p>
          </div>
        )}
      </div>

      <span className="tag-container">
        {type !== "box" && getTagByType(job.messaged)}

        {type !== "box" &&
          getTagByType(
            job?.shortListJob?.length ? JobTagTypes.SHORTLISTED : null
          )}

        {type !== "box" && getTagByType(job.applied)}

        {job?.isFeature && getTagByType(JobTagTypes.FEATURED)}
        {/* <Checkbox className="jobcard-checkbox-mobile job-tag" /> */}

        {/* {type !== "box" && getTagByType(job.MESSAGE)} */}

        {/* {type !== "box" && getTagByType(JobTagTypes.SHORTLISTED)}
        
        {type !== "box" && getTagByType(JobTagTypes.APPLIED)} */}

        {/* {job?.featured && getTagByType(JobTagTypes.FEATURED)} */}
      </span>
    </div>
  );
}

export default React.memo(JobCard);
