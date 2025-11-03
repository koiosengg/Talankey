import React from "react";
import AboutTestImg from "../../assets/About/Talankey aboutTestImg.jfif";
import VernierCaliper from "../../assets/About/Instrument Cluster/Vernier Caliper.png";
import Micrometer from "../../assets/About/Instrument Cluster/Micrometer.png";
import HeightGauge from "../../assets/About/Instrument Cluster/Height Gauge.png";
import PlungerDial from "../../assets/About/Instrument Cluster/Plunger Dial.png";
import PupitosDial from "../../assets/About/Instrument Cluster/Pupitos Dial.png";
import BoreGauge from "../../assets/About/Instrument Cluster/Bore Gauge.png";

function InstrumentCluster() {
  return (
    <div className="infoContainer">
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
            Equipped with advanced instrument clusters that ensure precision,
            consistency, and real-time quality monitoring in every process.
          </p>
        </div>
      </div>
      <div className="infoContainerDiv">
        <div className="aboutInfoSet">
          <img src={VernierCaliper} alt="Vernier Caliper"></img>
          <div className="text">
            <span>Digital & Dial</span>
            <h3>Vermier Caliper</h3>
            <p>Range(mm): 0-300</p>
            <p>Make: Mitutoyo</p>
            <p>Nos.: 04</p>
          </div>
        </div>
        <div className="aboutInfoSet">
          <img src={Micrometer} alt="Micrometer"></img>
          <div className="text">
            <span>Digital & Analog</span>
            <h3>Micrometer</h3>
            <p>Range(mm): 0-100</p>
            <p>Make: Mitutoyo</p>
            <p>Nos.: 05</p>
          </div>
        </div>
        <div className="aboutInfoSet">
          <img src={HeightGauge} alt="Height Gauge"></img>
          <div className="text">
            <span>Digital</span>
            <h3>Height Gauge</h3>
            <p>Range(mm): 0-300</p>
            <p>Make: Mitutoyo</p>
            <p>Nos.: 01</p>
          </div>
        </div>
        <div className="aboutInfoSet">
          <img src={PlungerDial} alt="Plunger Dial"></img>
          <div className="text">
            <span>Analog</span>
            <h3>Plunger Dial</h3>
            <p>Range(mm): 0.001-0.01</p>
            <p>Make: Mitutoyo</p>
            <p>Number: 02</p>
          </div>
        </div>
        <div className="aboutInfoSet">
          <img src={PupitosDial} alt="Pupitos Dial"></img>
          <div className="text">
            <span>Analog</span>
            <h3>Pupitos Dial</h3>
            <p>Range(mm):0.01</p>
            <p>Make: Baker</p>
            <p>Number: 01</p>
          </div>
        </div>
        <div className="aboutInfoSet">
          <img src={BoreGauge} alt="Bore Gauge"></img>
          <div className="text">
            <span>Analog</span>
            <h3>Bore Gauge</h3>
            <p>Range(mm): 10-50</p>
            <p>Make: Baker</p>
            <p>Number: 02</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstrumentCluster;
