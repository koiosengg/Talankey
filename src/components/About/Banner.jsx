import React from "react";
import AboutBanner from "../../assets/About/AboutBanner.svg";

function Banner() {
  return (
    <div className="productBanner">
      <img className="aboutProductBanner" src={AboutBanner}></img>
      <div className="heading">
        <h1>
          The <span>KEY</span> to Your Manufacturing Needs
        </h1>
        <p>
          Built on precision and trust, Talankey blends advanced manufacturing
          with real-world impact. Discover our journey, values, and the people
          behind the work.
        </p>
      </div>
    </div>
  );
}

export default Banner;
