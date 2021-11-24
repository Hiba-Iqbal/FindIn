import React from "react";

import Slider from "react-slick";
import { selectCountries, selectEmploymentTypes, selectJobTitles } from "../../features/jobs/slice";
import { transformJobData } from "../../features/jobs/transformers";
import { useAppSelector } from "../../store/hooks";

import JobCard from "../JobCard/JobCard";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// }

const JobsCarouselv2 = ({ jobs = [], responsiveSlides = 2 }) => {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    swipeToslide: true,

    responsive: [
      {
        breakpoint: 2200,
        settings: {
          slidesToShow: responsiveSlides + 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: responsiveSlides + 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: responsiveSlides,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const countries = useAppSelector(selectCountries);
  const jobTitles = useAppSelector(selectJobTitles);
  const employmentTypes = useAppSelector(selectEmploymentTypes);

  return (
    <div>
      <Slider {...settings}>
        {jobs.map((obj, index) => {
          return (
            <div className="d-flex justify-content-center align-items-center">
              <JobCard job={transformJobData(obj, jobTitles, employmentTypes, countries)} type="box" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default JobsCarouselv2;
