import React from "react";
import { Link } from "react-router-dom";
import EnquireDivBackground from "/EnquireDiv/EnquireDivBackground.svg";

function EnquiryDiv() {
  return (
    <div className="enquireDiv">
      <img src={EnquireDivBackground} className="EnquireDivBackground"></img>
      <div className="enquireDivtext">
        <div className="text">
          <h3>
            Looking for Information? <br /> <span>Enquire Here!</span>{" "}
          </h3>
          <p>
            Have a project or need custom manufacturing support? Share your
            requirements, and our team will respond with tailored solutions,
            pricing, and timelines.
          </p>
        </div>
        <Link to="/enquiry">Request for Quotation</Link>
      </div>
    </div>
  );
}

export default EnquiryDiv;
