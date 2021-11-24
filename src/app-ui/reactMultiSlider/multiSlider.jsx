import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const MultiSlider = () => {
  const [dummydata] = React.useState([1, 2, 3]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="multi-slider-wrapper">
      <div className="main-card">
        <div className="inner-box">
          <div className="image-box">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyLHSvK6m4Bg78laNH8WxokgJEBUaqm6jDA&usqp=CAU"
              alt=""
            />
          </div>
          <div>
            <h1>Amy Adams</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium delectus provident quae sunt mollitia rerum alias animi
              molestias, modi quod perspiciatis dolorem, omnis velit obcaecati,
              quo dolores distinctio exercitationem accusantium.
            </p>
          </div>
        </div>
        <div className="inner-box2">
          <h3>Other Content By Ammy Adams</h3>
          <Carousel responsive={responsive}>
            {dummydata.map((value, key) => (
              <div className="inner-carousel" key={key}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBNu5PvPJy-sWyjFFFAB1oMHoYBuXSyZ5og&usqp=CAU"
                  alt=""
                />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default MultiSlider;
