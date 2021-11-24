import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";

const ImgageGallery = ({ image }) => {
  const [blogPhotos, setBlogPhotos] = useState([]);

  useEffect(() => {
    const imagesArr = [];
    if (image.length > 0) {
      image.forEach((img) => {
        imagesArr.push({
          original: img.photo,
          thumbnail: img.photo,
        });
      });
    }
    setBlogPhotos([...imagesArr]);
  }, [image]);

  return (
    <div className="react-image-wrapper">
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        items={blogPhotos}
      />
    </div>
  );
};

export default ImgageGallery;
