import React from "react";
import AboutTestImg from "../assets/Gallery/Talankey aboutTestImg.jfif";
import AboutTestImg1 from "../assets/Gallery/Talankey aboutTestImg1.jfif";
import AboutTestImg2 from "../assets/Gallery/Talankey aboutTestImg2.jfif";
import AboutTestImg3 from "../assets/Gallery/Talankey aboutTestImg3.jfif";
import AboutTestImg4 from "../assets/Gallery/Talankey aboutTestImg4.jfif";
import AboutTestImg5 from "../assets/Gallery/Talankey aboutTestImg5.jfif";
import AboutTestImg6 from "../assets/Gallery/Talankey aboutTestImg6.jfif";
import AboutTestImg7 from "../assets/Gallery/Talankey aboutTestImg7.jfif";

function Gallery() {
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
      <div className="ourWork">
        <div className="ourWorkColumn1">
          <img src={AboutTestImg1}></img>
          <img src={AboutTestImg2}></img>
          <img src={AboutTestImg}></img>
        </div>
        <div className="ourWorkColumn2">
          <img src={AboutTestImg3}></img>
          <div className="ourWorkColumn2Sub">
            <img src={AboutTestImg4}></img>
            <img src={AboutTestImg5}></img>
          </div>
        </div>
        <div className="ourWorkColumn3">
          <img src={AboutTestImg6}></img>
          <img src={AboutTestImg7}></img>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
