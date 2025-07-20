import React from "react";
import AboutBannerBelow from "../../assets/About/AboutBannerBelow.svg";
import MobileAboutBannerBelow from "../../assets/About/MobileAboutBannerBelow.svg";

function BelowBanner() {
  return (
    <>
      <div className="aboutBannerBelow">
        <img src={AboutBannerBelow}></img>
        <div className="aboutBannerBelowText">
          <h2>
            <span style={{ color: "#F39200" }}>
              Our <span className="bold"> Story, </span>
            </span>{" "}
            <br /> Our <span className="bold">Expertise</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
            arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem
            ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu.
            Commodo senectus morbi faucibusLorem ipsum dolor sit amet
            consectetur. Libero lacus nullam sit arcu. Commodo senectus morbi
            faucibus lectus sit mi. Odio Lorem ipsum dolor sit amet consectetur.
            Libero lacus nullam sit arcu. Commodo senectus morbi faucibus .
            Lacus nullam sit arcu. Commodo senectus morbi faucibus lectus sit
            mi. Odio Lorem ipsum dolor sit amet consectetur. Libero lacus nullam
            sit arcu. Commodo senectus morbi faucibus . Lorem ipsum dolor sit.
            Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
            arcu. gommodo senectus morbi faucibus lectus sit mi. Odio Lorem
            ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu.
            Commodo senectus morbi faucibusLorem ipsum dolor sit amet
            consectetur. Libero lacus nullam sit arcu. Commodo senectus morbi
            faucibus lectus sit{" "}
          </p>
        </div>
      </div>
      <div className="infoContainer mobileAboutBannerBelow mobile">
        <div className="infoContainerHeading">
          <div className="subHeading">
            <div className="headingLine"></div>
            <p>Our Story</p>
            <div className="headingLine"></div>
          </div>
          <div className="heading">
            <h2>Company Overview</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
              arcu.<br className='notMobile'/> Commodo senectus morbi faucibus lectus sit mi. Odio{" "}
            </p>
          </div>
        </div>
        <div className="infoContainerDiv">
          <img src={MobileAboutBannerBelow}></img>
          <div className="heading">
            <h4>About Talankey</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
              arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem
              ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu.
              Commodo senectus morbi faucibusLorem ipsum dolor sit amet
              consectetur. Libero lacus nullam sit arcu. Commodo senectus morbi
              faucibus lectus sit mi. Odio Lorem ipsum dolor sit amet
              consectetur.dolor sit amet consectetur. Libero lacus nullam sit
              arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem
              ipsum dolor sit amet consectetur.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BelowBanner;
