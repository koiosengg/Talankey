import React from "react";
import CNC_Turning from "../../assets/Home/Machines/CNC Turning.png";
import VMC from "../../assets/Home/Machines/VMC.png";
import LaserCuttingMachine from "../../assets/Home/Machines/Laser Cutting Machine.png";
import CNC_BendingMachine from "../../assets/Home/Machines/CNC Bending Machine.png";
import ThreeD from "../../assets/Home/Machines/ThreeD.png";
import EDM from "../../assets/Home/Machines/EDM.png";

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
          <h2>Infrastructure Behind the Craft</h2>
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
            <h4>CNC Turning</h4>
            <img src={CNC_Turning}></img>
          </div>
        </div>
        <div className="homeMachineSet">
          <div className="Line"></div>
          <div className="content">
            <h4>Vertical Machining Center ( VMC )</h4>
            <img src={VMC}></img>
          </div>
        </div>
        <div className="homeMachineSet">
          <div className="Line"></div>
          <div className="content">
            <h4>Laser Cutting Machine</h4>
            <img src={LaserCuttingMachine}></img>
          </div>
        </div>
        <div className="homeMachineSet">
          <div className="Line"></div>
          <div className="content">
            <h4>CNC Bending Machine</h4>
            <img src={CNC_BendingMachine}></img>
          </div>
        </div>
        <div className="homeMachineSet">
          <div className="Line"></div>
          <div className="content">
            <h4>3D Scanning & Printing</h4>
            <img src={ThreeD}></img>
          </div>
        </div>
        <div className="homeMachineSet">
          <div className="Line"></div>
          <div className="content">
            <h4>EDM Wire Cutting & Sparking</h4>
            <img src={EDM}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeMachines;
