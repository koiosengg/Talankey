import React from "react";
import TestImg from "../../assets/Contact/Talankey Laser Cutting and Bending.png";
import { Link } from "react-router-dom";

function HomeProducts() {
  return (
    <div className="infoContainer HomeProducts">
      <div className="infoContainerHeading">
        <div className="subHeading">
          <div className="headingLine"></div>
          <p>Our Diverse Products</p>
          <div className="headingLine"></div>
        </div>
        <div className="heading">
          <h2>
            Highlighting <br /> Industry Expertise
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
            arcu. Commodo senectus morbi faucibus lectus sit mi. Odio{" "}
          </p>
        </div>
      </div>
      <div className="infoContainerDiv">
        <Link to="CNCturning" className="homeProductSet">
          <div className="HomeProductBackground1"></div>
          <div className="text">
            <div className="info">
              <h4>
                CNC Turning <span>Services</span>{" "}
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
                arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem
                ipsum dolor sit amet consectetur.{" "}
              </p>
            </div>
            <div className="homeProductButton">
              <div className="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <mask
                    id="mask0_199_3682"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="35"
                    height="35"
                  >
                    <rect
                      x="16.5371"
                      y="34.1993"
                      width="24"
                      height="24"
                      transform="rotate(-130.82 16.5371 34.1993)"
                      fill="#D9D9D9"
                    />
                  </mask>
                  <g mask="url(#mask0_199_3682)">
                    <path
                      d="M21.5101 14.6827L21.0344 21.1924L19.5154 21.0814L19.8009 17.1756L14.4453 21.8016L13.4396 20.6374L18.7952 16.0113L14.8893 15.7258L15.0003 14.2069L21.5101 14.6827Z"
                      fill="#101010"
                    />
                  </g>
                </svg>
              </div>
              <p>Learn More</p>
            </div>
          </div>
          <div className="Image">
            <div className="HomeProductBackground2"></div>
            <img src={TestImg}></img>
          </div>
        </Link>
        <Link to="/about" className="homeProductSet">
          <div className="HomeProductBackground1"></div>
          <div className="text">
            <div className="info">
              <h4>
                CNC Turning <span>Services</span>{" "}
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
                arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem
                ipsum dolor sit amet consectetur.{" "}
              </p>
            </div>
            <div className="homeProductButton">
              <div className="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <mask
                    id="mask0_199_3682"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="35"
                    height="35"
                  >
                    <rect
                      x="16.5371"
                      y="34.1993"
                      width="24"
                      height="24"
                      transform="rotate(-130.82 16.5371 34.1993)"
                      fill="#D9D9D9"
                    />
                  </mask>
                  <g mask="url(#mask0_199_3682)">
                    <path
                      d="M21.5101 14.6827L21.0344 21.1924L19.5154 21.0814L19.8009 17.1756L14.4453 21.8016L13.4396 20.6374L18.7952 16.0113L14.8893 15.7258L15.0003 14.2069L21.5101 14.6827Z"
                      fill="#101010"
                    />
                  </g>
                </svg>
              </div>
              <p>Learn More</p>
            </div>
          </div>
          <div className="Image">
            <div className="HomeProductBackground2"></div>
            <img src={TestImg}></img>
          </div>
        </Link>
        <Link to="/about" className="homeProductSet">
          <div className="HomeProductBackground1"></div>
          <div className="text">
            <div className="info">
              <h4>
                CNC Turning <span>Services</span>{" "}
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
                arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem
                ipsum dolor sit amet consectetur.{" "}
              </p>
            </div>
            <div className="homeProductButton">
              <div className="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <mask
                    id="mask0_199_3682"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="35"
                    height="35"
                  >
                    <rect
                      x="16.5371"
                      y="34.1993"
                      width="24"
                      height="24"
                      transform="rotate(-130.82 16.5371 34.1993)"
                      fill="#D9D9D9"
                    />
                  </mask>
                  <g mask="url(#mask0_199_3682)">
                    <path
                      d="M21.5101 14.6827L21.0344 21.1924L19.5154 21.0814L19.8009 17.1756L14.4453 21.8016L13.4396 20.6374L18.7952 16.0113L14.8893 15.7258L15.0003 14.2069L21.5101 14.6827Z"
                      fill="#101010"
                    />
                  </g>
                </svg>
              </div>
              <p>Learn More</p>
            </div>
          </div>
          <div className="Image">
            <div className="HomeProductBackground2"></div>
            <img src={TestImg}></img>
          </div>
        </Link>
        <Link to="/about" className="homeProductSet">
          <div className="HomeProductBackground1"></div>
          <div className="text">
            <div className="info">
              <h4>
                CNC Turning <span>Services</span>{" "}
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
                arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem
                ipsum dolor sit amet consectetur.{" "}
              </p>
            </div>
            <div className="homeProductButton">
              <div className="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <mask
                    id="mask0_199_3682"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="35"
                    height="35"
                  >
                    <rect
                      x="16.5371"
                      y="34.1993"
                      width="24"
                      height="24"
                      transform="rotate(-130.82 16.5371 34.1993)"
                      fill="#D9D9D9"
                    />
                  </mask>
                  <g mask="url(#mask0_199_3682)">
                    <path
                      d="M21.5101 14.6827L21.0344 21.1924L19.5154 21.0814L19.8009 17.1756L14.4453 21.8016L13.4396 20.6374L18.7952 16.0113L14.8893 15.7258L15.0003 14.2069L21.5101 14.6827Z"
                      fill="#101010"
                    />
                  </g>
                </svg>
              </div>
              <p>Learn More</p>
            </div>
          </div>
          <div className="Image">
            <div className="HomeProductBackground2"></div>
            <img src={TestImg}></img>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HomeProducts;
