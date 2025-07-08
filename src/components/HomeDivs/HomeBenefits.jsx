import React from "react";
import HomeBenefitSetHeadingBackground from "../../assets/Home/HomeBenefitSetHeadingBackground.svg";

function HomeBenefits() {
  return (
    <div className="infoContainer HomeBenefits">
      <div className="infoContainerHeading">
        <div className="subHeading">
          <div className="headingLine"></div>
          <p>Benefits</p>
          <div className="headingLine"></div>
        </div>
        <div className="heading">
          <h2>
            Key Benefits of Talankey <br />
            Manufacturing Services
          </h2>
          <p>
            Precision, reliability, and efficiency -Talankey delivers top-tier
            manufacturing solutions in Bangalore, making us your one-stop
            Manufacturing partner.
          </p>
        </div>
      </div>
      <div className="infoContainerDiv">
        <div className="homebenefitSet">
          <div className="heading">
            <img src={HomeBenefitSetHeadingBackground}></img>
            <h3>Commitment to Exellence</h3>
          </div>
          <div className="content">
            <h4>
             Quality & <br /> <span>Accuracy</span>
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
              arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem
              ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu.
              Commodo senectus morbi faucibus lectus sit mi. Odio Lorem ipsum
              dolor sit amet consectetur.
            </p>
          </div>
        </div>
        <div className="homebenefitSet">
          <div className="heading">
            <img src={HomeBenefitSetHeadingBackground}></img>
            <h3>Commitment to Exellence</h3>
          </div>
          <div className="content">
            <h4>
        Lead Time & <br /> <span>Precision</span>
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
              arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem
              ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu.
              Commodo senectus morbi faucibus lectus sit mi. Odio Lorem ipsum
              dolor sit amet consectetur.
            </p>
          </div>
        </div>
        <div className="homebenefitSet">
          <div className="heading">
            <img src={HomeBenefitSetHeadingBackground}></img>
            <h3>Commitment to Exellence</h3>
          </div>
          <div className="content">
            <h4>
        Competitive  <br /> <span>Pricing</span>
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
              arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem
              ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu.
              Commodo senectus morbi faucibus lectus sit mi. Odio Lorem ipsum
              dolor sit amet consectetur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBenefits;
