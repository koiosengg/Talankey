import React from 'react'
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
            Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
            arcu. Commodo senectus morbi faucibus lectus sit mi. Odio{" "}
          </p>
        </div>
      </div>
  )
}

export default Banner