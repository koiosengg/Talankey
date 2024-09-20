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
          Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu.
          Commodo senectus morbi faucibus lectus sit mi. Odio Lorem ipsum dolor
          sit amet consectetur. Libero lacus nullam sit arcu. Commodo{" "}
        </p>
        <Link to="/enquiry" className="productEnquireButton">
          Enquire Now
        </Link>
      </div>
    </div>
  );
}

export default ProductEnquire;
