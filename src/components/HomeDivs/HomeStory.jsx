import React from "react";
import { Link } from "react-router-dom";
import HomeStoryImg from "../../assets/Home/HomeStory.svg"
import MobileHomeStoryImg from "../../assets/Home/MobileHomeStory.svg";

function HomeStory() {
  return (
    <div className="infoContainer HomeStory">
      <div className="infoContainerHeading">
        <div className="subHeading">
          <div className="headingLine"></div>
          <p>Our Story</p>
          <div className="headingLine"></div>
        </div>
        <div className="heading">
          <h2>Company Overview</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
            arcu. Commodo senectus morbi faucibus lectus sit mi. Odio{" "}
          </p>
        </div>
      </div>
      <div className="infoContainerDiv">
        <div className="homeStoryText">
          <h4>About Talankey</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
            arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem
            ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu.
            Commodo senectus morbi faucibusLorem ipsum dolor sit amet
            consectetur. Libero lacus nullam sit arcu. Commodo senectus morbi
            faucibus lectus sit mi. Odio Lorem ipsum dolor sit amet consectetur.
            Libero lacus nullam sit arcu. Commodo senectus morbi faucibus{" "}
          </p>
          <Link to="/about">
            <p>View More</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <mask
                id="mask0_654_3973"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="20"
                height="20"
              >
                <rect width="20" height="20" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_654_3973)">
                <path
                  d="M7.01671 16.6667L5.83337 15.4833L11.3167 10L5.83337 4.51668L7.01671 3.33334L13.6834 10L7.01671 16.6667Z"
                  fill="#101010"
                />
              </g>
            </svg>
          </Link>
        </div>
        <img src={HomeStoryImg} alt="Talankey Home Story Img" className="notMobile"></img>
        <img src={MobileHomeStoryImg} alt="Talankey Mobile Home Story Img" className="mobile"></img>
      </div>
    </div>
  );
}

export default HomeStory;
