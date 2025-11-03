import React from "react";
import { Link } from "react-router-dom";

function ProductEnquire() {
  return (
    <div className="productEnquire">
      <h3>
        Looking For Information?
        <br />
        <span> Enquire now!</span>
      </h3>
      <div className="content">
        <p>
          Need more information or a custom quote for manufacturing services in
          Bangalore? Share your details and our team will personally reach out
          to guide you with expert insights, accurate pricing, and tailored
          engineering solutions.
        </p>
        <Link to="/enquiry" className="productEnquireButton">
          Request for Annotation
        </Link>
      </div>
    </div>
  );
}

export default ProductEnquire;
