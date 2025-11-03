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
   Using high-resolution 3D scanners with micron-level accuracy and rapid data capture speeds, we deliver precise digital models for engineering, inspection, and reverse design in Bangalore.
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
