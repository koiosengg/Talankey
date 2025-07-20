import React from "react";
import CertificateImg from "../../assets/About/Certificate.png";

function Certificate() {
  return (
    <div className="infoContainer">
      <div className="infoContainerHeading">
        <div className="subHeading">
          <div className="headingLine"></div>
          <p>Quality Certificate</p>
          <div className="headingLine"></div>
        </div>
        <div className="heading">
          <h2>
            Certificate of
            <br />
            Quality Assurance
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
            arcu.<br className='notMobile'/> Commodo senectus morbi faucibus lectus sit mi. Odio{" "}
          </p>
        </div>
      </div>
      <div className="aboutCertificate">
        <img src={CertificateImg} />
      </div>
    </div>
  );
}

export default Certificate;
