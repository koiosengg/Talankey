import React, { useEffect, useState } from "react";

import GalleryImage1 from "../assets/Gallery/Gallery Image 1.jpg";
import GalleryImage2 from "../assets/Gallery/Gallery Image 2.jpg";
import GalleryImage3 from "../assets/Gallery/Gallery Image 3.jpg";
import GalleryImage4 from "../assets/Gallery/Gallery Image 4.jpg";
import GalleryImage5 from "../assets/Gallery/Gallery Image 5.jpg";
import GalleryImage6 from "../assets/Gallery/Gallery Image 6.jpg";
import GalleryImage7 from "../assets/Gallery/Gallery Image 7.jpg";
import GalleryImage8 from "../assets/Gallery/Gallery Image 8.jpg";
import GalleryImage9 from "../assets/Gallery/Gallery Image 9.jpg";
import GalleryImage10 from "../assets/Gallery/Gallery Image 10.jpg";
import GalleryImage11 from "../assets/Gallery/Gallery Image 11.jpg";
import GalleryImage12 from "../assets/Gallery/Gallery Image 12.jpg";
import GalleryImage13 from "../assets/Gallery/Gallery Image 13.jpg";
import GalleryImage14 from "../assets/Gallery/Gallery Image 14.jpg";
import GalleryImage15 from "../assets/Gallery/Gallery Image 15.jpg";
import GalleryImage16 from "../assets/Gallery/Gallery Image 16.jpg";
import GalleryImage17 from "../assets/Gallery/Gallery Image 17.jpg";

const allImages = [
  GalleryImage1,
  GalleryImage2,
  GalleryImage3,
  GalleryImage4,
  GalleryImage5,
  GalleryImage6,
  GalleryImage7,
  GalleryImage8,
  GalleryImage9,
  GalleryImage10,
  GalleryImage11,
  GalleryImage12,
  GalleryImage13,
  GalleryImage14,
  GalleryImage15,
  GalleryImage16,
  GalleryImage17,
];

function Gallery() {
  const [images, setImages] = useState([]);

  const shuffleImages = () => {
    const shuffled = [...allImages].sort(() => Math.random() - 0.5);
    setImages(shuffled.slice(0, 8)); 
  };

  useEffect(() => {
    shuffleImages();
    const interval = setInterval(shuffleImages, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="infoContainer">
      <div className="infoContainerHeading">
        <div className="subHeading">
          <div className="headingLine"></div>
          <p>Our Gallery</p>
          <div className="headingLine"></div>
        </div>
        <div className="heading">
          <h2>Our Work In Pictures</h2>
          <p>
            Explore projects we’ve proudly built. Our work showcases the
            quality, detail, and trust we deliver every day.
          </p>
        </div>
      </div>

      {images.length > 0 && (
        <div className="ourWork">
          <div className="ourWorkColumn1">
            <img src={images[0]} alt="" />
            <img src={images[1]} alt="" />
            <img src={images[2]} alt="" />
          </div>

          <div className="ourWorkColumn2">
            <img src={images[3]} alt="" />
            <div className="ourWorkColumn2Sub">
              <img src={images[4]} alt="" />
              <img src={images[5]} alt="" />
            </div>
          </div>

          <div className="ourWorkColumn3">
            <img src={images[6]} alt="" />
            <img src={images[7]} alt="" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
