import React from "react";
import Aerospace from "../../assets/ThreeDscanning/Aerospace.png";
import ElectricVehicle from "../../assets/ThreeDscanning/Electric Vehicle.png";
import Automtoive from "../../assets/ThreeDscanning/Automtoive.png";
import GeneralEngineering from "../../assets/ThreeDscanning/General Engineering.png";
import Machinery from "../../assets/ThreeDscanning/Machinery.png"

function ProductMachines() {
  return (
    <div className="infoContainer HomeMachines ProductMachines">
      <div className="infoContainerHeading">
        <div className="subHeading">
          <div className="headingLine"></div>
          <p>Our Industries</p>
          <div className="headingLine"></div>
        </div>
        <div className="heading">
          <h2>
            Empowering a Wide Range of
            <br /> Industries
          </h2>
          <p>
        Empowering diverse industries in Bangalore with versatile 3D printing and scanning solutions for rapid prototyping, reverse engineering, and precision manufacturing applications.
          </p>
        </div>
      </div>
      <div className="infoContainerDiv">
        <div className="homeMachineSet">
          <div className="Line"></div>
          <div className="content">
            <h4>Aerospace</h4>
            <img src={Aerospace}></img>
          </div>
        </div>
        <div className="homeMachineSet">
          <div className="Line"></div>
          <div className="content">
            <h4>Electric Vehicle</h4>
            <img src={ElectricVehicle}></img>
          </div>
        </div>
        <div className="homeMachineSet">
          <div className="Line"></div>
          <div className="content">
            <h4>Automtoive</h4>
            <img src={Automtoive}></img>
          </div>
        </div>
        <div className="homeMachineSet">
          <div className="Line"></div>
          <div className="content">
            <h4>General Engineering</h4>
            <img src={GeneralEngineering}></img>
          </div>
        </div>
        <div className="homeMachineSet">
          <div className="Line"></div>
          <div className="content">
            <h4>Machinery</h4>
            <img src={Machinery}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductMachines;
