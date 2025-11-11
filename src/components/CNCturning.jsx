import React from "react";
import ProductBanner from "./CNCturning/ProductBanner";
import ProductEnquire from "./CNCturning/ProductEnquire";
import ProductEquipment from "./CNCturning/ProductEquipment";
import ProductProcess from "./CNCturning/ProductProcess";
import ProductPortfolio from "./CNCturning/ProductPortfolio";
import HomeBenefits from "./HomeDivs/HomeBenefits";
import Marquee from "./Marquee";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import EnquiryDiv from "./EnquiryDiv";

function CNCturning() {
  return (
    <div className="product">
      <ProductBanner />
      <ProductEnquire />
      <ProductEquipment />
      {/* <ProductFacilities /> */}
      {/* <ProductProcess />
      <ProductPortfolio /> */}
      <HomeBenefits />
      <Marquee />
      <Gallery />
      <Testimonials />
      {/* <LogoMarquee /> */}
      <EnquiryDiv />
    </div>
  );
}

export default CNCturning;
