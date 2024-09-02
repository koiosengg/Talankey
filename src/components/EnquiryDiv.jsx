import React from "react";
import { Link } from "react-router-dom";
import EnquireDivBackground from "/EnquireDivBackground.svg";

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
            Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
            arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem
            ipsum dolor sit amet consectetur.
          </p>
        </div>
        <Link to="/enquiry">Enquire Now</Link>
      </div>
    </div>
  );
}

export default EnquiryDiv;
