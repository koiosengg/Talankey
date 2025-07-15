import React from "react";
import CircleScanner from "../../assets/ThreeDscanning/Circle scanner.png";
import VisionSVG from "../../assets/ThreeDscanning/vision.svg";
import VisionMobile from "../../assets/ThreeDscanning/visionMobile.png";

function ProductManufacturing() {
  return (
    <div className="infoContainer ProductManufacturing">
      <div className="infoContainerHeading">
        <div className="subHeading">
          <div className="headingLine"></div>
          <p>Manufacturing Process</p>
          <div className="headingLine"></div>
        </div>
        <div className="heading">
          <h2>
            Key Steps to Precision and <br />
            Efficiency
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
            arcu. Commodo senectus morbi faucibus lectus sit mi. Odio{" "}
          </p>
        </div>
      </div>
      <div className="infoContainerDiv">
        <div className="threeD-vision-container">
          <img src={CircleScanner} className="circle-scanner" />
          <img src={VisionSVG} className="notMobile visionImg" />
          <img src={VisionMobile} className="mobile visionImg" />
        </div>
      </div>
    </div>
  );
}

export default ProductManufacturing;
