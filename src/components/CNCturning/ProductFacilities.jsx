import React from "react";
import AboutTestImg from "../../assets/About/Talankey aboutTestImg.jfif";

function ProductFacilities() {
  return (
    <div className="infoContainer ProductFacilities">
      <div className="infoContainerHeading">
        <div className="subHeading">
          <div className="headingLine"></div>
          <p>Instrument Cluster</p>
          <div className="headingLine"></div>
        </div>
        <div className="heading">
          <h2>
            Cluster Features &<br /> Specifications
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
            arcu.<br></br> Commodo senectus morbi faucibus lectus sit mi. Odio{" "}
          </p>
        </div>
      </div>
      <div className="infoContainerDiv">
        <div className="aboutInfoSet">
          <img src={AboutTestImg}></img>
          <div className="text">
            <span>8 Station bi-directional turret</span>
            <h3>Smart Plus</h3>
            <p>Maximum Turning Diameter: 280mm</p>
            <p>Maximum Turning Length: 308mm</p>
            <p>Chuck Diameter: 200mm</p>
          </div>
        </div>
        <div className="aboutInfoSet">
          <img src={AboutTestImg}></img>
          <div className="text">
            <span>8 Station bi-directional turret</span>
            <h3>Smarturn</h3>
            <p>Maximum Turning Diameter: 200mm</p>
            <p>Maximum Turning Length: 262mm</p>
            <p>Chuck Diameter: 165mm</p>
          </div>
        </div>
        <div className="aboutInfoSet">
          <img src={AboutTestImg}></img>
          <div className="text">
            <span>8 Station bi-directional turret</span>
            <h3>LL 20T L5</h3>
            <p>Maximum Turning Diameter: 320mm</p>
            <p>Maximum Turning Length: 500mm</p>
            <p>Chuck Diameter: 210mm</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductFacilities;
