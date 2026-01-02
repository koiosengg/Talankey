import React from "react";
import EnquiryFormShape from "../assets/Enquiry/EnquiryFormShape.svg";
import JotFroms from "./JotForms";
import EnquiryInfoContainer from "../assets/Enquiry/EnquiryInfoContainer.svg";
import MobileEnquiryInfoContainer from "../assets/Enquiry/MobileEnquiryInfoContainer.svg";
import GetInTouch from "./GetInTouch";

function Enquiry() {
  return (
    <div className="Enquiry">
      <div className="contactForm">
        <div className="contactFormHeading">
          <img
            src={EnquiryFormShape}
            alt="Decorative shape for the contact form heading"
          />
          <h1>Enquire Here</h1>
          <p>
            Submit your project details and our engineering team will connect
            with you for technical discussion.
          </p>
        </div>
      </div>
      <div className="infoContainer">
        <div className="infoContainerHeading">
          <div className="subHeading">
            <div className="headingLine"></div>
            <p>Guide</p>
            <div className="headingLine"></div>
          </div>
          <div className="heading">
            <h2>
              Our Process <span>Step by Step</span>
            </h2>
            <p>
              Our simple, structured enquiry process designed for quick review,
              accurate evaluation, and faster response.
            </p>
          </div>
        </div>
        <img src={EnquiryInfoContainer} className="notMobile"></img>
        <img src={MobileEnquiryInfoContainer} className="mobile"></img>
        <div className="enquireInfo">
          <div className="enquireInfoSet">
            Kindly upload pdf drawings with tolerance for us to decide the
            process and quote accurately.
          </div>
          <div className="enquireInfoSet">
            Kindly specify final finish or surface treatment required
            foraccurate manufacturing process.
          </div>
        </div>
      </div>
      <JotFroms />
      <GetInTouch />
    </div>
  );
}

export default Enquiry;
