import React from "react";
import { Link } from "react-router-dom";
import TalankeyLogo from "/TalankeyLogo.svg";
import CNCTurning from "/CNC Turning.svg";
import Laser from "/Laser.svg"
import CNCMillingServices from "/CNC Milling Services.svg";
import EDM from "/EDM.svg"

function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="navbar">
        <div className="navbarLogo">
          <Link to="/">
            <img src={TalankeyLogo} alt="Talankey Logo" />
          </Link>
        </div>
        <div className="navbarLinks">
          <div className="navbarLinksContainer">
            <div className="navbarDropdownContainer">
              <div className="navbarDropdownHeading">
                <p>Services</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <mask
                    id="mask0_454_2973"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="12"
                    height="12"
                  >
                    <rect
                      y="12"
                      width="12"
                      height="12"
                      transform="rotate(-90 0 12)"
                      fill="#D9D9D9"
                    />
                  </mask>
                  <g mask="url(#mask0_454_2973)">
                    <path
                      d="M11 4L6 9L1 4L1.8875 3.1125L6 7.225L10.1125 3.1125L11 4Z"
                      fill="#777777"
                    />
                  </g>
                </svg>
              </div>
              <div className="navbarDropdown">
                <Link to="/" className="navbarDropdownSet">
                  <img src={CNCTurning} />
                  <div className="navbarDropdownText">
                    <div className="heading">
                      <span>CNC Turning Services</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="11"
                        viewBox="0 0 10 11"
                        fill="none"
                      >
                        <path
                          d="M8.08467 6H0V5H8.08467L4.28717 1.2025L5 0.5L10 5.5L5 10.5L4.28717 9.7975L8.08467 6Z"
                          fill="#1C1B1F"
                        />
                      </svg>
                    </div>
                    <span>
                      Lorem ipsum dolor sit amet consectetur. Sed leo urna
                      vestibulum
                    </span>
                  </div>
                </Link>
                <Link to="/" className="navbarDropdownSet">
                  <img src={Laser} />
                  <div className="navbarDropdownText">
                    <div className="heading">
                      <span>Laser Cutting and Bending</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="11"
                        viewBox="0 0 10 11"
                        fill="none"
                      >
                        <path
                          d="M8.08467 6H0V5H8.08467L4.28717 1.2025L5 0.5L10 5.5L5 10.5L4.28717 9.7975L8.08467 6Z"
                          fill="#1C1B1F"
                        />
                      </svg>
                    </div>
                    <span>
                      Lorem ipsum dolor sit amet consectetur. Sed leo urna
                      vestibulum
                    </span>
                  </div>
                </Link>
                <Link to="/" className="navbarDropdownSet">
                  <img src={CNCMillingServices} />
                  <div className="navbarDropdownText">
                    <div className="heading">
                      <span>CNC Milling Services</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="11"
                        viewBox="0 0 10 11"
                        fill="none"
                      >
                        <path
                          d="M8.08467 6H0V5H8.08467L4.28717 1.2025L5 0.5L10 5.5L5 10.5L4.28717 9.7975L8.08467 6Z"
                          fill="#1C1B1F"
                        />
                      </svg>
                    </div>
                    <span>
                      Lorem ipsum dolor sit amet consectetur. Sed leo urna
                      vestibulum
                    </span>
                  </div>
                </Link>
                <Link to="/" className="navbarDropdownSet">
                  <img src={EDM} />
                  <div className="navbarDropdownText">
                    <div className="heading">
                      <span>EDM Services</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="11"
                        viewBox="0 0 10 11"
                        fill="none"
                      >
                        <path
                          d="M8.08467 6H0V5H8.08467L4.28717 1.2025L5 0.5L10 5.5L5 10.5L4.28717 9.7975L8.08467 6Z"
                          fill="#1C1B1F"
                        />
                      </svg>
                    </div>
                    <span>
                      Lorem ipsum dolor sit amet consectetur. Sed leo urna
                      vestibulum
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <Link to="/about">
              <p>About Us</p>
            </Link>
            <Link to="/">
              <p>Enquiry Form</p>
            </Link>
          </div>
          <div className="navbarContact">
            <Link to="/contact">
              <p>Contact Us</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <mask
                  id="mask0_303_2121"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                >
                  <rect width="20" height="20" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_303_2121)">
                  <path
                    d="M7.01668 16.6667L5.83334 15.4833L11.3167 9.99999L5.83334 4.51666L7.01668 3.33333L13.6833 9.99999L7.01668 16.6667Z"
                    fill="white"
                  />
                </g>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
