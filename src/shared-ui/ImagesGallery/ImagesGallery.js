import React, { useState } from "react";

import { Image } from "antd";

import { MappedElement } from "../../utils/helper";
import Modal from "../Modal/Modal";

function ImagesGallery({
  title = "Photos",
  images = [
    "require('../../assets/images/sample/01.png')",
    "require('../../assets/images/sample/02.png')",
    "require('../../assets/images/sample/03.png')",
    "require('../../assets/images/sample/04.png')",
  ],
}) {
  const [openAllImages, setOpenAllImages] = useState(false);
  // const contentStyle = {
  //   height: "250px",
  //   color: "#fff",
  //   lineHeight: "160px",
  //   textAlign: "center",
  //   background: "#364d79",
  // };
  return (
    <div className="c-images-gallery">
      <span className="c-images-gallery-header">
        <h6 className="title">{title}</h6>
        <a onClick={() => setOpenAllImages(true)} className="action">
          See More
        </a>
      </span>

      <span className="images-container">
        <MappedElement
          data={images?.slice(0, 3)}
          renderElement={(obj, index) => {
            return <Image key={index} src={obj} />;
          }}
        />
      </span>

      <Modal
        show={openAllImages}
        className="center lg c-media-picker"
        backdrop="static"
        keyboard={false}
        onHide={() => setOpenAllImages(false)}>
        <span className="images-container-modal">
          <MappedElement
            data={images}
            renderElement={(obj, index) => {
              return <Image key={index} src={obj} />;
            }}
          />
        </span>
      </Modal>
    </div>
  );
}

export default ImagesGallery;
