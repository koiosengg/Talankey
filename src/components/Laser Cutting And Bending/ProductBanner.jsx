import React from "react";
import BannerBackground from "../../assets/Laser Cutting And Bending/BannerBackground.svg";
import MobileBannerBackground from "../../assets/Laser Cutting And Bending/MobileBannerBackground.svg";
import BannerCenter from "../../assets/Laser Cutting And Bending/BannerCenter.svg";
import BannerWheel from "../../assets/Laser Cutting And Bending/BannerWheel.svg";

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
        <h1>Laser Cutting & Bending Services</h1>
        <p>
          Providing precise laser cutting and sheet metal bending services in
          Bangalore with advanced machinery, accuracy, and high-quality finishes
          for industrial applications.
        </p>
      </div>
    </div>
  );
}

export default ProductBanner;
