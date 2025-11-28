import React from "react";
import HomeBenefitSetHeadingBackground from "../../assets/Home/HomeBenefitSetHeadingBackground.png";

function ProductBenefits() {
  return (
    <div className="infoContainer HomeBenefits">
      <div className="infoContainerHeading">
        <div className="subHeading">
          <div className="headingLine"></div>
          <p>Why 3D Printing?</p>
          <div className="headingLine"></div>
        </div>
        <div className="heading">
          <h2>Why Choose 3D Printing</h2>
          <p>
            Precision, reliability, and efficiency—Talankey delivers top-tier
            manufacturing solutions in Bangalore, making us your one-stop CNC
            partner.
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
              Rapid
              <br /> <span>Production</span>
            </h4>
            <p>
              Create functional prototypes within hours, reducing development
              cycles and accelerating product testing.
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
              Complex
              <br /> <span>Geometry</span>
            </h4>
            <p>
              Manufacture intricate shapes and internal structures that are
              impossible with traditional machining.
            </p>
          </div>
        </div>{" "}
        <div className="homebenefitSet">
          <div className="heading">
            <img src={HomeBenefitSetHeadingBackground}></img>
            <h3>Commitment to Exellence</h3>
          </div>
          <div className="content">
            <h4>
              Cost Effective
              <br /> <span>Production</span>
            </h4>
            <p>
              Eliminate tooling expenses and produce low-volume parts at
              significantly low manufacturing costs.
            </p>
          </div>
        </div>{" "}
        <div className="homebenefitSet">
          <div className="heading">
            <img src={HomeBenefitSetHeadingBackground}></img>
            <h3>Commitment to Exellence</h3>
          </div>
          <div className="content">
            <h4>
              Material
              <br /> <span>Versatility</span>
            </h4>
            <p>
              Choose from plastics, composites, and metals to match performance,
              strength, and durability requirements.
            </p>
          </div>
        </div>{" "}
        <div className="homebenefitSet">
          <div className="heading">
            <img src={HomeBenefitSetHeadingBackground}></img>
            <h3>Commitment to Exellence</h3>
          </div>
          <div className="content">
            <h4>
              Design
              <br /> <span>Flexibility</span>
            </h4>
            <p>
              Modify CAD models instantly and iterate designs faster without
              production delays or retooling.
            </p>
          </div>
        </div>{" "}
        <div className="homebenefitSet">
          <div className="heading">
            <img src={HomeBenefitSetHeadingBackground}></img>
            <h3>Commitment to Exellence</h3>
          </div>
          <div className="content">
            <h4>
              Low Waste
              <br /> <span>Production</span>
            </h4>
            <p>
              Use only the required material per build, minimizing scrap and
              improving resource efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductBenefits;
