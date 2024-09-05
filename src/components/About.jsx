import React from "react";
import AboutBanner from "/AboutBanner.svg";
import AboutBannerBelow from "/AboutBannerBelow.svg";
import AboutTestImg from "../assets/About/Talankey aboutTestImg.jfif";
import AboutTestImg1 from "../assets/About/Talankey aboutTestImg1.jfif";
import AboutTestImg2 from "../assets/About/Talankey aboutTestImg2.jfif";
import AboutTestImg3 from "../assets/About/Talankey aboutTestImg3.jfif";
import AboutTestImg4 from "../assets/About/Talankey aboutTestImg4.jfif";
import AboutTestImg5 from "../assets/About/Talankey aboutTestImg5.jfif";
import AboutTestImg6 from "../assets/About/Talankey aboutTestImg6.jfif";
import AboutTestImg7 from "../assets/About/Talankey aboutTestImg7.jfif";
import Marquee from "./Marquee";
import Testimonials from "./Testimonials";
import EnquiryDiv from "./EnquiryDiv";

function About() {
  return (
    <div className="About">
      <div className="productBanner">
        <img src={AboutBanner}></img>
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
      <div className="journey">
        <div className="heading">
          <h2>
            Our Journey
            <br /> In Numbers
          </h2>
          <p></p>
        </div>
        <div className="journeySetContainer">
          <div className="journeySet">
            <span>1-56</span>
            <p>Companies Served</p>
          </div>
          <div className="journeySet">
            <span>07</span>
            <p>Years in Business</p>
          </div>
          <div className="journeySet">
            <span>138</span>
            <p>Unique Products Sold</p>
          </div>
          <div className="journeySet">
            <span>08</span>
            <p>Countries Shipped</p>
          </div>
        </div>
      </div>
      <div className="infoContainer">
        <div className="infoContainerHeading">
          <div className="subHeading">
            <div className="headingLine"></div>
            <p>Our Gallery</p>
            <div className="headingLine"></div>
          </div>
          <div className="heading">
            <h2>Our Work In Pictures</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
              arcu.<br></br> Commodo senectus morbi faucibus lectus sit mi. Odio{" "}
            </p>
          </div>
        </div>
        <div className="ourWork">
          <div className="ourWorkColumn1">
            <img src={AboutTestImg1}></img>
            <img src={AboutTestImg2}></img>
            <img src={AboutTestImg}></img>
          </div>
          <div className="ourWorkColumn2">
            <img src={AboutTestImg3}></img>
            <div className="ourWorkColumn2Sub">
              <img src={AboutTestImg4}></img>
              <img src={AboutTestImg5}></img>
            </div>
          </div>
          <div className="ourWorkColumn3">
            <img src={AboutTestImg6}></img>
            <img src={AboutTestImg7}></img>
          </div>
        </div>
      </div>
      <Marquee />
      <Testimonials />
      <EnquiryDiv />
    </div>
  );
}

export default About;
