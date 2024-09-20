import React from "react";
import HomeBannerBackground from "../../assets/Home/HomeBannerBackground.svg";
import { Link } from "react-router-dom";

function HomeBanner() {
  return (
    <div className="homeBannerContainer">
      <div className="HomeBannerBackground">
        <img src={HomeBannerBackground}></img>
      </div>
      <div className="HomeBannerText">
        <div className="heading">
          <h1>Precision Engineering for Tomorrow's Innovations</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
            arcu. Commodo senectus morbi faucibus lectus sit mi. Odio{" "}
          </p>
        </div>
        <Link className="HomeBannerButton">
          <p>Let’s Get Started</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <mask
              id="mask0_630_3959"
              style={{maskType:"alpha"}}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_630_3959)">
              <path
                d="M8.42 20L7 18.58L13.58 12L7 5.42L8.42 4L16.42 12L8.42 20Z"
                fill="#101010"
              />
            </g>
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default HomeBanner;