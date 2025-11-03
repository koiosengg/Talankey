import React from "react";
import BannerBackground from "../../assets/CNCmilling/BannerBackground.svg";
import MobileBannerBackground from "../../assets/CNCmilling/MobileBannerBackground.svg";
import BannerCenter from "../../assets/CNCmilling/BannerCenter.svg";
import BannerWheel from "../../assets/CNCmilling/BannerWheel.svg";

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
        <h1>CNC Milling Services</h1>
        <p>
          Offering advanced CNC milling services in Bangalore with high
          accuracy, superior surface quality, and precision-engineered
          components for diverse industries.
        </p>
      </div>
    </div>
  );
}

export default ProductBanner;
