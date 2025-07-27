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
              We uphold the highest standards of manufacturing excellence. Every
              part we produce undergoes rigorous quality checks. Precision
              engineering and advanced CNC machining ensure dimensional accuracy
              across metal, plastic, or nylon. Our QA processes deliver
              components that meet exact specifications, time after time.
            </p>
          </div>
        </div>
        <div className="homebenefitSet">
          <div className="heading">
            <img src={HomeBenefitSetHeadingBackground}></img>
            <h3>Timelines with Accuracy</h3>
          </div>
          <div className="content">
            <h4>
              Lead Time & <br /> <span>Precision</span>
            </h4>
            <p>
              We understand that time is critical in every project. We ensures
              fast, dependable turnaround without sacrificing precision. Whether
              prototyping or production, our streamlined operations and
              automated machining reduce downtime. Our clients trust us for
              tight timelines with no compromise on quality.
            </p>
          </div>
        </div>
        <div className="homebenefitSet">
          <div className="heading">
            <img src={HomeBenefitSetHeadingBackground}></img>
            <h3>Value without Compromise</h3>
          </div>
          <div className="content">
            <h4>
              Competitive <br /> <span>Pricing</span>
            </h4>
            <p>
              Our localized setup in Bangalore, coupled with in-house SPM
              manufacturing, expert sub-assembly services, and streamlined
              operations, allows us to optimize production costs. We provide
              pricing that delivers exceptional value while maintaining the
              highest levels of quality, reliability, and consistency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBenefits;
