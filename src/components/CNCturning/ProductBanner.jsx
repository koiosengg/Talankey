import React from "react";
import BannerBackground from "../../assets/CNCturning/BannerBackground.svg";
import MobileBannerBackground from "../../assets/CNCturning/MobileBannerBackground.svg";
import BannerCenter from "../../assets/CNCturning/BannerCenter.svg";
import BannerWheel from "../../assets/CNCturning/BannerWheel.svg";

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
        <h1>CNC Turning Services</h1>
        <p>
          Providing high-precision CNC turning services in Bangalore with
          advanced machinery, tight tolerances, and superior surface finishes
          for complex components.
        </p>
      </div>
    </div>
  );
}

export default ProductBanner;
