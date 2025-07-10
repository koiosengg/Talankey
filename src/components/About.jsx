import React, { useState, useEffect } from "react";
import AboutTestImg from "../assets/About/Talankey aboutTestImg.jfif";
import Journey from "./Journey";
import Gallery from "./Gallery";
import Marquee from "./Marquee";
import Testimonials from "./Testimonials";
import LogoMarquee from "./LogoMarquee";
import EnquiryDiv from "./EnquiryDiv";
import Banner from "./About/Banner";
import MissionVision from "./About/MissionVision";
import BelowBanner from "./About/BelowBanner";
import CompanyInfrastructure from "./About/CompanyInfrastructure";
import Certificate from "./About/Certificate";
import InstrumentCluster from "./About/InstrumentCluster";

function About() {
  return (
    <div className="About">
      <Banner />
      <MissionVision />
      <BelowBanner />
      <CompanyInfrastructure />
      <Journey />
      <Certificate />
      <InstrumentCluster />
      <Gallery />
      <Marquee />
      <Testimonials />
      <LogoMarquee />
      <EnquiryDiv />
    </div>
  );
}

export default About;
