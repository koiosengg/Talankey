import React, { useState, useEffect } from "react";
import Journey from "./Journey";
import Gallery from "./Gallery";
import Marquee from "./Marquee";
import Testimonials from "./Testimonials";
import EnquiryDiv from "./EnquiryDiv";
import Banner from "./About/Banner";
import MissionVision from "./About/MissionVision";
import BelowBanner from "./About/BelowBanner";
import Certificate from "./About/Certificate";
import InstrumentCluster from "./About/InstrumentCluster";
import HomeMachines from "./HomeDivs/HomeMachines";

function About() {
  return (
    <div className="About">
      <Banner />
      <MissionVision />
      <BelowBanner />
      <HomeMachines />
      <Journey />
      <Certificate />
      <InstrumentCluster />
      <Gallery />
      <Marquee />
      <Testimonials />
      <EnquiryDiv />
    </div>
  );
}

export default About;
