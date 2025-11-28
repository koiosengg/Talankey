import React from "react";
import ProductPortfolioBackground from "../../assets/CNCturning/ProductPortfolioBackground.svg";
import ProductPortfolio1 from "../../assets/CNCturning/ProductPortfolio1.png";

function ProductPortfolio() {
  return (
    <div className="infoContainer ProductPortfolio">
      <img
        src={ProductPortfolioBackground}
        className="ProductPortfolioBackground"
      ></img>
      <div className="infoContainerHeading">
        <div className="subHeading">
          <div className="headingLine"></div>
          <p>Portfolio</p>
          <div className="headingLine"></div>
        </div>
        <div className="heading">
          <h2>Critical Capability</h2>
          <p>
            An example of the precision, strength, and complex engineering
            challenges we solve with reliability.
          </p>
        </div>
      </div>
      <div className="infoContainerDiv">
        <div className="ProductPortfolioContainer">
          <div className="ProductPortfolioSet">
            <div className="content">
              <h4>Criticality</h4>
              <ul>
                <li>Bore tolerances as less as ±0.005mm</li>
                <li>OD tolerance of +0.007mm</li>
                <li>Drill sizes down to 0.4mm</li>
                <li>Wall thickness as less as 0.5mm</li>
                <li>
                  Grinding finishes achieved on punch OD with taper within 10
                  microns for 100mm length
                </li>
                <li>OD threads with 0.4 pitch</li>
              </ul>
            </div>
            <img src={ProductPortfolio1}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPortfolio;
