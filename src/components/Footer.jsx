import React from "react";
import { Link } from "react-router-dom";
import TalankeyOtherLogo from "/Logos/TalankeyOtherLogo.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footerLinkLogo">
        <div className="footerLogo">
          <Link to="/">
            <img src={TalankeyOtherLogo} />{" "}
          </Link>
          <div className="footerSocialLink">
            <a className="facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M9.33268 9.2924H10.9993L11.666 6.62573H9.33268V5.2924C9.33268 4.60573 9.33268 3.95907 10.666 3.95907H11.666V1.71907C11.4487 1.6904 10.628 1.62573 9.76135 1.62573C7.95135 1.62573 6.66602 2.7304 6.66602 4.75907V6.62573H4.66602V9.2924H6.66602V14.9591H9.33268V9.2924Z"
                  fill="white"
                />
              </svg>
            </a>
            <a className="twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M12.6007 1.06104H15.054L9.694 7.1877L16 15.523H11.0627L7.196 10.467L2.77067 15.523H0.316L6.04933 8.9697L0 1.0617H5.06267L8.558 5.68304L12.6007 1.06104ZM11.74 14.055H13.0993L4.324 2.45237H2.86533L11.74 14.055Z"
                  fill="white"
                />
              </svg>
            </a>
            <a className="linkedIn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M3.16667 1.54236C2.79094 1.54236 2.43061 1.69161 2.16493 1.95729C1.89926 2.22297 1.75 2.5833 1.75 2.95903C1.75 3.33475 1.89926 3.69508 2.16493 3.96076C2.43061 4.22644 2.79094 4.37569 3.16667 4.37569C3.54239 4.37569 3.90272 4.22644 4.1684 3.96076C4.43408 3.69508 4.58333 3.33475 4.58333 2.95903C4.58333 2.5833 4.43408 2.22297 4.1684 1.95729C3.90272 1.69161 3.54239 1.54236 3.16667 1.54236ZM1.83333 5.54236C1.81123 5.54236 1.79004 5.55114 1.77441 5.56677C1.75878 5.58239 1.75 5.60359 1.75 5.62569V14.2924C1.75 14.3384 1.78733 14.3757 1.83333 14.3757H4.5C4.5221 14.3757 4.5433 14.3669 4.55893 14.3513C4.57455 14.3357 4.58333 14.3145 4.58333 14.2924V5.62569C4.58333 5.60359 4.57455 5.58239 4.55893 5.56677C4.5433 5.55114 4.5221 5.54236 4.5 5.54236H1.83333ZM6.16667 5.54236C6.14457 5.54236 6.12337 5.55114 6.10774 5.56677C6.09211 5.58239 6.08333 5.60359 6.08333 5.62569V14.2924C6.08333 14.3384 6.12067 14.3757 6.16667 14.3757H8.83333C8.85543 14.3757 8.87663 14.3669 8.89226 14.3513C8.90789 14.3357 8.91667 14.3145 8.91667 14.2924V9.62569C8.91667 9.29417 9.04836 8.97623 9.28278 8.74181C9.5172 8.50739 9.83515 8.37569 10.1667 8.37569C10.4982 8.37569 10.8161 8.50739 11.0506 8.74181C11.285 8.97623 11.4167 9.29417 11.4167 9.62569V14.2924C11.4167 14.3384 11.454 14.3757 11.5 14.3757H14.1667C14.1888 14.3757 14.21 14.3669 14.2256 14.3513C14.2412 14.3357 14.25 14.3145 14.25 14.2924V8.54569C14.25 6.92769 12.8433 5.66236 11.2333 5.80836C10.7352 5.8537 10.2472 5.97698 9.78733 6.17369L8.91667 6.54702V5.62569C8.91667 5.60359 8.90789 5.58239 8.89226 5.56677C8.87663 5.55114 8.85543 5.54236 8.83333 5.54236H6.16667Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="footerLink">
          <div className="footerLinkSet">
            <h4>Company</h4>
            <div className="footerLinkColumn">
              <a>Home</a>
              <a>About Us</a>
              <a>Enquiry Form</a>
              <a>Contact</a>
            </div>
          </div>
          <div className="footerLinkSet">
            <h4>Services</h4>
            <div className="footerLinkColumn">
              <a>CNC Mining</a>
              <a>CNC Turning</a>
              <a>Laser Cutting & Bending</a>
              <a>EDM’s</a>
            </div>
          </div>
          <div className="footerLinkSet">
            <h4>Legal</h4>
            <div className="footerLinkColumn">
              <a>Legal</a>
              <a>Security</a>
              <a>Privacy Policy</a>
              <a>FAQ</a>
            </div>
          </div>
          <div className="footerLinkSet">
            <h4>Company</h4>
            <div className="footerLinkColumn">
              <a>Home</a>
              <a>About Us</a>
              <a>Enquiry Form</a>
              <a>Contact</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footerCopyrigth">
        <p>2024 All rights reserved</p>
        <p>
          Crafted by <a href="https://koiosengg.com/" target="_blank">The Koios Studio</a>{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
