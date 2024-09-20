import React from "react";
import BannerBackground from "../../assets/CNCturning/BannerBackground.svg";
import BannerCenter from "../../assets/CNCturning/BannerCenter.svg";
import BannerWheel from "../../assets/CNCturning/BannerWheel.svg";

function ProductBanner() {
  return (
    <div className="productBanner">
      <div className="productBannerDiv">
        <img src={BannerBackground} className="BannerBackground"></img>
        <img src={BannerCenter} className="BannerCenter"></img>
        <img src={BannerWheel} className="BannerWheel"></img>
      </div>
      <div className="heading">
        <h1>CNC Turning Services</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu.
          Commodo senectus morbi faucibus lectus sit mi. Odio{" "}
        </p>
      </div>
    </div>
  );
}

export default ProductBanner;
