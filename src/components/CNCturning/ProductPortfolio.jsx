import React from "react";
import ProductPortfolioBackground from "../../assets/CNCturning/ProductPortfolioBackground.svg";
import ProductProcess1 from "../../assets/Home/HomeSector/Talankey HomeSector (1).jfif";
import ProductProcess2 from "../../assets/Home/HomeSector/Talankey HomeSector (1).jpg";
import ProductProcess3 from "../../assets/Home/HomeSector/Talankey HomeSector (2).jfif";
import ProductProcess4 from "../../assets/Home/HomeSector/Talankey HomeSector (2).jpg";

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
          <h2>Showcasing Our Work</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
            arcu. Commodo senectus morbi faucibus lectus sit mi. Odio{" "}
          </p>
        </div>
      </div>
      <div className="infoContainerDiv">
        <div className="ProductPortfolioContainer">
          <div className="ProductPortfolioSet">
            <div className="content">
              <h4>Portfolio Name</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
                arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem
                ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu.
                Commodo senectus morbi faucibus amet consectetur. Libero lacus
                nullam sit arcu. Commodo senectus morbi faucibus{" "}
              </p>
            </div>
            <img src={ProductProcess1}></img>
          </div>
          <div className="ProductPortfolioSet">
            <div className="content">
              <h4>Portfolio Name</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
                arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem
                ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu.
                Commodo senectus morbi faucibus amet consectetur. Libero lacus
                nullam sit arcu. Commodo senectus morbi faucibus{" "}
              </p>
            </div>
            <img src={ProductProcess2}></img>
          </div>
          <div className="ProductPortfolioSet">
            <div className="content">
              <h4>Portfolio Name</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
                arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem
                ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu.
                Commodo senectus morbi faucibus amet consectetur. Libero lacus
                nullam sit arcu. Commodo senectus morbi faucibus{" "}
              </p>
            </div>
            <img src={ProductProcess1}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPortfolio;
