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
            Key Benefits of Talankey <br /> Machine Manufacturing
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
            arcu. Commodo senectus morbi faucibus lectus sit mi. Odio{" "}
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
              Technology & <br /> <span>Equipment</span>{" "}
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
              Technology & <br /> <span>Equipment</span>{" "}
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
              Technology & <br /> <span>Equipment</span>{" "}
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
