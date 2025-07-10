import React from 'react'
import AboutTestImg from "../../assets/About/Talankey aboutTestImg.jfif";

function CompanyInfrastructure() {
  return (
    <div className="infoContainer">
        <div className="infoContainerHeading">
          <div className="subHeading">
            <div className="headingLine"></div>
            <p>Company Infrastructure</p>
            <div className="headingLine"></div>
          </div>
          <div className="heading">
            <h2>
              Robust Infrastructure for <br /> Seamless Operations
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
              <h3>Lorem Ipsum</h3>
            </div>
          </div>
          <div className="aboutInfoSet">
            <img src={AboutTestImg}></img>
            <div className="text">
              <h3>Lorem Ipsum</h3>
            </div>
          </div>
          <div className="aboutInfoSet">
            <img src={AboutTestImg}></img>
            <div className="text">
              <h3>Lorem Ipsum</h3>
            </div>
          </div>
          <div className="aboutInfoSet">
            <img src={AboutTestImg}></img>
            <div className="text">
              <h3>Lorem Ipsum</h3>
            </div>
          </div>
          <div className="aboutInfoSet">
            <img src={AboutTestImg}></img>
            <div className="text">
              <h3>Lorem Ipsum</h3>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CompanyInfrastructure