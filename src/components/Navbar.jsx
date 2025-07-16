import React, { useState } from "react";
import { Link } from "react-router-dom";
import CNCTurning from "/Navbar/CNC Turning.svg";
import Laser from "/Navbar/Laser.svg";
import CNCMillingServices from "/Navbar/CNC Milling Services.svg";
import EDM from "/Navbar/EDM.svg";

function Navbar({ homeNavbar }) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [hasToggled, setHasToggled] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
    setHasToggled(true);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (isMobileNavOpen) {
      setIsMobileNavOpen(false);
    }
  };

  return (
    <div className={`navbarContainer ${homeNavbar ? "homeNavbar" : ""}`}>
      <div className="navbar">
        <div className="navbarLogo">
          <Link to="/" onClick={handleLinkClick}>
            <svg
              width="142"
              height="24"
              viewBox="0 0 142 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 1.1853H16.5486V4.87144H10.0833V22.6585H6.42637V4.87144H0V1.1853Z"
                fill="black"
              />
              <path
                d="M30.226 19.7233H21.5372L20.172 22.6585H16.125L26.0717 1.1853L35.5406 22.6585H31.5229L30.226 19.7233ZM28.5877 16.0371L25.9742 10.0886L23.234 16.0371H28.5877Z"
                fill="black"
              />
              <path
                d="M36.1875 1.1853H39.8834V19.0016H49.7716V22.6585H36.1875V1.1853Z"
                fill="black"
              />
              <path
                d="M64.1986 19.7233H55.5098L54.1446 22.6585H50.0977L60.0444 1.1853L69.5133 22.6585H65.4956L64.1986 19.7233ZM62.5603 16.0371L59.9469 10.0886L57.2066 16.0371H62.5603Z"
                fill="black"
              />
              <path
                d="M73.8561 22.6585H70.1992V0.85376L83.4518 14.1063V1.18532H87.1087V23.1461L73.8561 9.89358V22.6585Z"
                fill="black"
              />
              <path
                className="logoPath"
                d="M97.2596 11.5319L105.412 22.6585H100.878L95.0362 14.6914L88.9609 23.1461V1.1853H92.6178V11.6879L100.195 1.1853H104.7L97.2596 11.5319Z"
                fill="#F39200"
              />
              <path
                className="logoPath"
                d="M106.225 1.1853H119.809V4.87144H109.921V10.0593H117.361V13.7455H109.921V19.0016H119.809V22.6585H106.225V1.1853Z"
                fill="#F39200"
              />
              <path
                className="logoPath"
                d="M124.73 1.1853L131.127 11.5904L137.593 1.1853H142L132.961 15.4813V22.6585H129.304V15.4813L120.361 1.1853H124.73Z"
                fill="#F39200"
              />
            </svg>
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
                <Link to="/CNCturning" className="navbarDropdownSet">
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
                <Link
                  to="/LaserCuttingAndBending"
                  className="navbarDropdownSet"
                >
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
                <Link to="/CNCmilling" className="navbarDropdownSet">
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
                <Link to="/EDM" className="navbarDropdownSet">
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
                <Link to="/3D_Scanning" className="navbarDropdownSet">
                  <img src={CNCMillingServices} />
                  <div className="navbarDropdownText">
                    <div className="heading">
                      <span>3D Scanning</span>
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
                <Link to="/3D_Printing" className="navbarDropdownSet">
                  <img src={EDM} />
                  <div className="navbarDropdownText">
                    <div className="heading">
                      <span>3D Printing</span>
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
            <Link to="/enquiry">
              <p>Request For Qoutation</p>
            </Link>
          </div>
          <Link to="/contact" className="navbarContact">
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
        <div className="mobileNavbarButton" onClick={toggleMobileNav}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            style={{
              display: isMobileNavOpen ? "none" : hasToggled ? "block" : "",
            }}
          >
            <path
              d="M8 8H24M8 16H24M8 24H24"
              stroke="#111111"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            style={{
              display: isMobileNavOpen ? "block" : hasToggled ? "none" : "none",
            }}
          >
            <path
              d="M8 8L24 24M8 24L24.5 8"
              stroke="#111111"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div
        className={`mobileNavbar ${
          isMobileNavOpen
            ? "activeMobileNavbar"
            : hasToggled
            ? "nonactiveMobileNavbar"
            : ""
        }`}
      >
        <div className="mobileNavbarLinks">
          <div className="mobileNavbarLinkSetDropDown">
            <div className="heading" onClick={toggleDropdown}>
              <p>Services</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                style={{
                  transform: isOpen ? "rotate(-90deg)" : "rotate(90deg)",
                  transition: "transform 0.3s ease",
                }}
              >
                <path
                  d="M1.53247 0L7.53247 6L1.53247 12L0.467471 10.935L5.40247 6L0.467471 1.065L1.53247 0Z"
                  fill="#F39200"
                />
              </svg>
            </div>
            <div
              className="mobileNavbarDropdown"
              style={{
                display: isOpen ? "flex" : "none",
                flexDirection: "column",
                transition: "display 0.3s ease",
              }}
            >
              <Link
                to="/CNCturning"
                onClick={toggleDropdown}
                className="mobileNavbarDropdownSet"
              >
                <img src={CNCTurning} alt="CNC Turning"></img>
                <div className="content">
                  <h4>CNC Turning Services</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Sed leo urna
                    vestibulum
                  </p>
                </div>
              </Link>
              <Link
                to="/CNCturning"
                onClick={toggleDropdown}
                className="mobileNavbarDropdownSet"
              >
                <img src={CNCMillingServices} alt="CNC Milling"></img>
                <div className="content">
                  <h4>CNC Milling Services</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Sed leo urna
                    vestibulum
                  </p>
                </div>
              </Link>
              <Link
                to="/CNCturning"
                onClick={toggleDropdown}
                className="mobileNavbarDropdownSet"
              >
                <img src={Laser} alt="Laser Cutting"></img>
                <div className="content">
                  <h4>Laser Cutting and Bending</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Sed leo urna
                    vestibulum
                  </p>
                </div>
              </Link>
              <Link
                to="/CNCturning"
                onClick={toggleDropdown}
                className="mobileNavbarDropdownSet"
              >
                <img src={EDM} alt="EDM Services"></img>
                <div className="content">
                  <h4>EDM Services</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Sed leo urna
                    vestibulum
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <Link
            to="/about"
            onClick={toggleMobileNav}
            className="mobileNavbarLinkSet"
          >
            <p>About Us</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
            >
              <path
                d="M1.53247 0L7.53247 6L1.53247 12L0.467471 10.935L5.40247 6L0.467471 1.065L1.53247 0Z"
                fill="#F39200"
              />
            </svg>
          </Link>
          <Link
            to="/enquiry"
            onClick={toggleMobileNav}
            className="mobileNavbarLinkSet"
          >
            <p>Enquiry Form</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
            >
              <path
                d="M1.53247 0L7.53247 6L1.53247 12L0.467471 10.935L5.40247 6L0.467471 1.065L1.53247 0Z"
                fill="#F39200"
              />
            </svg>
          </Link>
        </div>
        <Link
          to="/contact"
          onClick={toggleMobileNav}
          className="mobileContactButton"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
