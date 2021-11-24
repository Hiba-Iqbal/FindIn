import { Menu, Popover } from "antd";
import moment from "moment";
import React from "React";
import { toCommas } from "../../utils/helper";
export const additionalInfo = (
  profile,
  countries,
  findTitleById,
  jobseekerProfileById
) => (
  <Menu>
    <div className="title">Additional Info</div>

    <Menu.Item>
      <div>
        <span>Current location : </span>
        <span>{jobseekerProfileById?.country?.title}</span>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        <span>Current city : </span>
        <span>{jobseekerProfileById?.city?.title}</span>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        <span>Desired locations to work in : </span>

        {jobseekerProfileById?.jobseekerDesiredLocation?.length === 1 && (
          <span>
            {jobseekerProfileById?.jobseekerDesiredLocation?.[0]?.city?.title}
          </span>
        )}
        {jobseekerProfileById?.jobseekerDesiredLocation?.length > 1 && (
          <Popover
            className="desired-location-popover"
            getPopupContainer={(trigger) =>
              document.getElementById("cv-container")
            }
            placement="right"
            // visible={jobseekerProfileById?.jobseekerDesiredLocation?.length > 1}
            content={jobseekerProfileById?.jobseekerDesiredLocation?.map(
              (data, i) => (
                <div key={i}>{data.city.title}</div>
              )
            )}>
            <span>
              {!jobseekerProfileById?.jobseekerDesiredLocation?.length
                ? "-"
                : jobseekerProfileById?.jobseekerDesiredLocation?.length === 1
                ? jobseekerProfileById?.jobseekerDesiredLocation?.[0]?.city
                    .title
                : "View"}
            </span>
          </Popover>
        )}
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        <span>Family status : </span>
        <span>{jobseekerProfileById?.familyStatus?.title}</span>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        <span>Gender : </span>
        <span>
          {jobseekerProfileById?.gender &&
            jobseekerProfileById?.gender[0].toUpperCase() +
              jobseekerProfileById.gender.slice(1)}
        </span>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        <span>Date of birth : </span>
        <span>{moment(jobseekerProfileById?.dob).format("DD-MM-YYYY")}</span>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        <span> Nationality : </span>
        <span>
          {jobseekerProfileById?.nationality?.title.length > 40
            ? jobseekerProfileById?.nationality?.title.substring(0, 40) + "..."
            : jobseekerProfileById?.nationality?.title}
        </span>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        <span> Min-monthly salary in AED: </span>
        <span>{toCommas(jobseekerProfileById?.salary)}</span>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        <span> Notice period: </span>
        <span>{jobseekerProfileById?.noticePeriod?.title}</span>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        <span> Native language: </span>
        <span>{jobseekerProfileById?.nativeLanguage?.title}</span>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        <span> Other language: </span>
        {/* <span>
					check it why notice in other language
					{profile?.jobseeker?.jobSeekerProfile?.noticePeriod?.title ||
						profile?.noticePeriod?.title}
				</span> */}

        {jobseekerProfileById?.otherLanguages?.length === 1 && (
          <span>
            {jobseekerProfileById?.otherLanguages?.[0]?.language?.title}
          </span>
        )}
        {jobseekerProfileById?.otherLanguages?.length > 1 && (
          <Popover
            getPopupContainer={(trigger) =>
              document.getElementById("cv-container")
            }
            placement="right"
            trigger={["hover"]}
            overlayClassName="overlay-language"
            className="other-language-popover"
            content={jobseekerProfileById?.otherLanguages?.map((data, i) => (
              <div key={i}>{data.language.title} </div>
            ))}>
            <span>View</span>
          </Popover>
        )}
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        <span> Medical conditions: </span>
        <span>
          {jobseekerProfileById?.medicalConditions
            ? jobseekerProfileById?.medicalConditions
            : "None"}
        </span>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        <span> Visa status: </span>
        <span>{jobseekerProfileById?.visaStatus?.title}</span>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        <span> Clear police certificate: </span>
        <span>
          {jobseekerProfileById?.isClearPoliceCertificaete ? "Yes" : "No"}
        </span>
      </div>
    </Menu.Item>
  </Menu>
);
