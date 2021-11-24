import React, { useEffect, useRef, useState } from "react";

const BannerWithImages = ({ className }) => {
  const [opacity, setOpacity] = useState(false);
  const [opacity2, setopacity2] = useState(true);
  const interval = useRef(null);

  useEffect(() => {
    const shuffleImg = () => {
      setOpacity(!opacity);
      setopacity2(!opacity2);
    };
    interval.current = setInterval(() => shuffleImg(), 4000);

    return () => {
      clearInterval(interval.current);
    };
  }, [opacity, opacity2]);

  return (
    <div className={`c-banner-with-images ${className}`}>
      <div className="imgs-row">
        <div className="banner-img-main">
          <div className={`first  ${opacity ? "showimg" : null}`}>
            <img
              alt="banner-img"
              src={require(`../../assets/images/ms/ms-1.png`)}
            />
          </div>

          <div className="second">
            <img
              alt="banner-img"
              src={require(`../../assets/images/lp/1.png`)}
            />
          </div>
        </div>
        <div className="banner-img-main">
          <div className={`first  ${opacity2 ? "showimglate" : null}`}>
            <img
              alt="banner-img"
              src={require(`../../assets/images/ms/ms-2.png`)}
            />
          </div>

          <div className="second">
            <img
              alt="banner-img"
              src={require(`../../assets/images/lp/2.png`)}
            />
          </div>
        </div>

        <div className="banner-img-main">
          <div className={`first  ${opacity ? "showimg" : null}`}>
            <img
              alt="banner-img"
              src={require(`../../assets/images/ms/ms-3.png`)}
            />
          </div>

          <div className="second">
            <img
              alt="banner-img"
              src={require(`../../assets/images/lp/3.png`)}
            />
          </div>
        </div>
      </div>
      <div className="imgs-row">
        <div className="banner-img-main">
          <div className={`first  ${opacity2 ? "showimglate" : null}`}>
            <img
              alt="banner-img"
              src={require(`../../assets/images/ms/ms-4.png`)}
            />
          </div>

          <div className="second">
            <img
              alt="banner-img"
              src={require(`../../assets/images/lp/4.png`)}
            />
          </div>
        </div>
        <div className="banner-img-main">
          <div className={`first  ${opacity ? "showimg" : null}`}>
            <img
              alt="banner-img"
              src={require(`../../assets/images/ms/ms-5.png`)}
            />
          </div>

          <div className="second">
            <img
              alt="banner-img"
              src={require(`../../assets/images/lp/5.png`)}
            />
          </div>
        </div>

        <div className="banner-img-main">
          <div className={`first  ${opacity2 ? "showimglate" : null}`}>
            <img
              alt="banner-img"
              src={require(`../../assets/images/ms/ms-6.png`)}
            />
          </div>

          <div className="second">
            <img
              alt="banner-img"
              src={require(`../../assets/images/lp/6.png`)}
            />
          </div>
        </div>
      </div>
      <div className="imgs-row">
        <div className="banner-img-main">
          <div className={`first  ${opacity ? "showimg" : null}`}>
            <img
              alt="banner-img"
              src={require(`../../assets/images/ms/ms-7.png`)}
            />
          </div>

          <div className="second">
            <img
              alt="banner-img"
              src={require(`../../assets/images/lp/7.png`)}
            />
          </div>
        </div>
        <div className="banner-img-main">
          <div className={`first  ${opacity2 ? "showimglate" : null}`}>
            <img
              alt="banner-img"
              src={require(`../../assets/images/ms/ms-8.png`)}
            />
          </div>

          <div className="second">
            <img
              alt="banner-img"
              src={require(`../../assets/images/lp/8.png`)}
            />
          </div>
        </div>

        <div className="banner-img-main">
          <div className={`first  ${opacity ? "showimg" : null}`}>
            <img
              alt="banner-img"
              src={require(`../../assets/images/ms/ms-9.png`)}
            />
          </div>

          <div className="second">
            <img
              alt="banner-img"
              src={require(`../../assets/images/lp/9.png`)}
            />
          </div>
        </div>
      </div>
      <div className="imgs-row">
        <div className="banner-img-main">
          <div className={`first  ${opacity ? "showimg" : null}`}>
            <img
              alt="banner-img"
              src={require(`../../assets/images/ms/ms-10.png`)}
            />
          </div>

          <div className="second">
            <img
              alt="banner-img"
              src={require(`../../assets/images/lp/10.png`)}
            />
          </div>
        </div>
        <div className="banner-img-main">
          <div className={`first  ${opacity2 ? "showimglate" : null}`}>
            <img
              alt="banner-img"
              src={require(`../../assets/images/ms/ms-11.png`)}
            />
          </div>

          <div className="second">
            <img
              alt="banner-img"
              src={require(`../../assets/images/lp/11.png`)}
            />
          </div>
        </div>

        <div className="banner-img-main">
          <div className={`first  ${opacity ? "showimg" : null}`}>
            <img
              alt="banner-img"
              src={require(`../../assets/images/ms/ms-12.png`)}
            />
          </div>

          <div className="second">
            <img
              alt="banner-img"
              src={require(`../../assets/images/lp/12.png`)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerWithImages;
