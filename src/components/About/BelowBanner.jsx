import React from "react";
import AboutBannerBelow from "../../assets/About/AboutBannerBelow.svg";
import MobileAboutBannerBelow from "../../assets/About/MobileAboutBannerBelow.svg";

function BelowBanner() {
  return (
    <>
      <div className="aboutBannerBelow">
        <img src={AboutBannerBelow}></img>
        <div className="aboutBannerBelowText">
          <h2>
            <span style={{ color: "#F39200" }}>
              Our <span className="bold"> Story, </span>
            </span>{" "}
            <br /> Our <span className="bold">Expertise</span>
          </h2>
          <p>
            Talankey was built on a belief: that precision manufacturing can
            help industries build faster, better, and smarter. What began as a
            small, focused team in Bangalore has grown into a trusted partner
            for CNC machining, 3D printing, fabrication, and more.
            <br /> Over time, we’ve served clients across automotive, aerospace,
            EV, railways, and medical sectors—delivering components that meet
            high standards and real-world demands.
            <br /> Our mission is to deliver quality-driven manufacturing with
            accuracy and efficiency. Our vision is to be a dependable partner
            for businesses that value precision, innovation, and long-term
            collaboration.
            <br /> At Talankey, we’re not just making parts. We’re helping ideas
            come to life. With skilled people, advanced machines, and a
            commitment to every detail, we turn concepts into reliable
            solutions.
            <br /> Because to us, manufacturing is about more than just output.
            It’s about building trust, enabling progress, and shaping what comes
            next.
          </p>
        </div>
      </div>
      <div className="infoContainer mobileAboutBannerBelow mobile">
        <div className="infoContainerHeading">
          <div className="subHeading">
            <div className="headingLine"></div>
            <p>Our Story</p>
            <div className="headingLine"></div>
          </div>
        </div>
        <div className="infoContainerDiv">
          <img src={MobileAboutBannerBelow}></img>
          <div className="heading">
            <h4>
              <span style={{ color: "#F39200" }}>
                Our <span className="bold"> Story, </span>
              </span>{" "}
              Our <span className="bold">Expertise</span>
            </h4>
            <p>
              Talankey was built on a belief: that precision manufacturing can
              help industries build faster, better, and smarter. What began as a
              small, focused team in Bangalore has grown into a trusted partner
              for CNC machining, 3D printing, fabrication, and more.
              <br /> Over time, we’ve served clients across automotive,
              aerospace, EV, railways, and medical sectors—delivering components
              that meet high standards and real-world demands.
              <br /> Our mission is to deliver quality-driven manufacturing with
              accuracy and efficiency. Our vision is to be a dependable partner
              for businesses that value precision, innovation, and long-term
              collaboration.
              <br /> At Talankey, we’re not just making parts. We’re helping
              ideas come to life. With skilled people, advanced machines, and a
              commitment to every detail, we turn concepts into reliable
              solutions.
              <br /> Because to us, manufacturing is about more than just
              output. It’s about building trust, enabling progress, and shaping
              what comes next.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BelowBanner;
