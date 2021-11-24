import React from "react";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import JobCard from "../JobCard/JobCard";

// install Swiper modules
SwiperCore.use([Navigation]);

function JobsCarousel({ jobs = [] }) {
  return (
    <div className="c-carousel">
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        shouldSwiperUpdate={true}
        observer={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          "@0.60": {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          "@1.6": {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
      >
        {jobs.map((obj, index) => {
          return (
            <SwiperSlide>
              <JobCard job={obj} type="box" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default JobsCarousel;
