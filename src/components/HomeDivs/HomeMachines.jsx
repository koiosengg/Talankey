import React from "react";
import TestIMG1 from "../../assets/Contact/Talankey CNC Milling.png";
import TestIMG2 from "../../assets/Contact/Talankey CNC Turning.png";
import TestIMG3 from "../../assets/Contact/Talankey EDM.png";
import TestIMG4 from "../../assets/Contact/Talankey Laser Cutting and Bending.png";

function HomeMachines() {
  return (
    <div className="infoContainer HomeMachines">
      <div className="infoContainerHeading">
        <div className="subHeading">
          <div className="headingLine"></div>
          <p>Machines We Rely On</p>
          <div className="headingLine"></div>
        </div>
        <div className="heading">
          <h2>Technology Behind the Craft</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
            arcu. Commodo senectus morbi faucibus lectus sit mi. Odio{" "}
          </p>
        </div>
      </div>
      <div className="infoContainerDiv">
        <div className="homeMachineSet">
          <div className="Line"></div>
          <div className="content">
            <h4>
              Cutting & <br /> Bending Machine
            </h4>
            <img src={TestIMG2}></img>
          </div>
        </div>
        <div className="homeMachineSet">
          <div className="Line"></div>
          <div className="content">
            <h4>
              Cutting & <br /> Bending Machine
            </h4>
            <img src={TestIMG3}></img>
          </div>
        </div>
        <div className="homeMachineSet">
          <div className="Line"></div>
          <div className="content">
            <h4>
              Cutting & <br /> Bending Machine
            </h4>
            <img src={TestIMG1}></img>
          </div>
        </div>
        <div className="homeMachineSet">
          <div className="Line"></div>
          <div className="content">
            <h4>
              Cutting & <br /> Bending Machine
            </h4>
            <img src={TestIMG1}></img>
          </div>
        </div>
        <div className="homeMachineSet">
          <div className="Line"></div>
          <div className="content">
            <h4>
              Cutting & <br /> Bending Machine
            </h4>
            <img src={TestIMG4}></img>
          </div>
        </div>
        <div className="homeMachineSet">
          <div className="Line"></div>
          <div className="content">
            <h4>
              Cutting & <br /> Bending Machine
            </h4>
            <img src={TestIMG3}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeMachines;
