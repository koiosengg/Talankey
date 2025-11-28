import React from "react";
import VisionSVG from "../../assets/ThreeDprinting/vision.svg";
import VisionMobile from "../../assets/ThreeDprinting/visionMobile.svg";

function ProductManufacturing() {
  return (
    <div className="infoContainer ProductManufacturing">
      <div className="infoContainerHeading">
        <div className="subHeading">
          <div className="headingLine"></div>
          <p>Materials</p>
          <div className="headingLine"></div>
        </div>
        <div className="heading">
          <h2>
            Why Choose FDM for
            <br />
            your 3D Printing Project
          </h2>
          <p>
            Choose FDM for strong, dimensionally stable, cost-efficient parts
            ideal for rapid prototyping, functional testing, and low-volume
            manufacturing.
          </p>
        </div>
      </div>
      <div className="infoContainerDiv" style={{ width: "100%" }}>
        <div className="threeD-vision-container">
          <img src={VisionSVG} className="notMobile visionImg" />
          <img src={VisionMobile} className="mobile visionImg" />
        </div>
      </div>
    </div>
  );
}

export default ProductManufacturing;
