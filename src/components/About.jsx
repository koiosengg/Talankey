import React from "react";
import AboutBanner from "../assets/About/AboutBanner.svg";
import AboutBannerBelow from "../assets/About/AboutBannerBelow.svg";
import AboutTestImg from "../assets/About/Talankey aboutTestImg.jfif";
import Journey from "./Journey";
import Gallery from "./Gallery";
import Marquee from "./Marquee";
import Testimonials from "./Testimonials";
import EnquiryDiv from "./EnquiryDiv";

function About() {
  return (
    <div className="About">
      <div className="productBanner">
        <img className="aboutProductBanner" src={AboutBanner}></img>
        <div className="heading">
          <h1>
            Building the Future with <br /> Precision and Passion
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
            arcu. Commodo senectus morbi faucibus lectus sit mi. Odio{" "}
          </p>
        </div>
      </div>
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
            Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
            arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem
            ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu.
            Commodo senectus morbi faucibusLorem ipsum dolor sit amet
            consectetur. Libero lacus nullam sit arcu. Commodo senectus morbi
            faucibus lectus sit mi. Odio Lorem ipsum dolor sit amet consectetur.
            Libero lacus nullam sit arcu. Commodo senectus morbi faucibus .
            Lacus nullam sit arcu. Commodo senectus morbi faucibus lectus sit
            mi. Odio Lorem ipsum dolor sit amet consectetur. Libero lacus nullam
            sit arcu. Commodo senectus morbi faucibus . Lorem ipsum dolor sit.
            Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
            arcu. gommodo senectus morbi faucibus lectus sit mi. Odio Lorem
            ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu.
            Commodo senectus morbi faucibusLorem ipsum dolor sit amet
            consectetur. Libero lacus nullam sit arcu. Commodo senectus morbi
            faucibus lectus sit{" "}
          </p>
        </div>
      </div>
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
              <p>
                Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
                arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem
                ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu.
                Commodo senectus morbi faucibus{" "}
              </p>
            </div>
          </div>
          <div className="aboutInfoSet">
            <img src={AboutTestImg}></img>
            <div className="text">
              <h3>Lorem Ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
                arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem
                ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu.
                Commodo senectus morbi faucibus{" "}
              </p>
            </div>
          </div>
          <div className="aboutInfoSet">
            <img src={AboutTestImg}></img>
            <div className="text">
              <h3>Lorem Ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
                arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem
                ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu.
                Commodo senectus morbi faucibus{" "}
              </p>
            </div>
          </div>
          <div className="aboutInfoSet">
            <img src={AboutTestImg}></img>
            <div className="text">
              <h3>Lorem Ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
                arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem
                ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu.
                Commodo senectus morbi faucibus{" "}
              </p>
            </div>
          </div>
          <div className="aboutInfoSet">
            <img src={AboutTestImg}></img>
            <div className="text">
              <h3>Lorem Ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
                arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem
                ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu.
                Commodo senectus morbi faucibus{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Journey />
      <Gallery />
      <Marquee />
      <Testimonials />
      <EnquiryDiv />
    </div>
  );
}

export default About;
