import React from "react";
import BannerBackground from "../../assets/ThreeDprinting/BannerBackground.svg";
import MobileBannerBackground from "../../assets/ThreeDprinting/MobileBannerBackground.svg";
import BannerCenter from "../../assets/ThreeDprinting/BannerCenter.svg";
import BannerWheel from "../../assets/ThreeDprinting/BannerWheel.svg";

function ProductBanner() {
  return (
    <div className="productBanner">
      <div className="productBannerDiv">
        <img
          src={BannerBackground}
          className="BannerBackground notMobile"
        ></img>
        <img
          src={MobileBannerBackground}
          className="BannerBackground mobile"
        ></img>
        <img src={BannerCenter} className="BannerCenter"></img>
        <img src={BannerWheel} className="BannerWheel"></img>
      </div>
      <div className="heading">
        <h1>3D Sacnning Services</h1>
        <p>
          Offering advanced 3D scanning services in Bangalore with high
          accuracy, detailed surface mapping, and precise digital measurements
          for engineering and manufacturing needs.
        </p>
      </div>
    </div>
  );
}

export default ProductBanner;
