import React from "react";
import ProductBanner from "./CNCturning/ProductBanner";
import ProductEnquire from "./CNCturning/ProductEnquire";
import ProductEquipment from "./CNCturning/ProductEquipment";
import ProductFacilities from "./CNCturning/ProductFacilities";
import ProductProcess from "./CNCturning/ProductProcess";
import ProductPortfolio from "./CNCturning/ProductPortfolio";
import ProductBenefits from "./CNCturning/ProductBenefits";
import Marquee from "./Marquee";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import LogoMarquee from "./LogoMarquee";
import EnquiryDiv from "./EnquiryDiv";

function CNCturning() {
  return (
    <div className="product">
      <ProductBanner />
      <ProductEnquire />
      <ProductEquipment />
      <ProductFacilities />
      <ProductProcess />
      <ProductPortfolio />
      <ProductBenefits />
      <Marquee />
      <Gallery />
      <Testimonials />
      <LogoMarquee />
      <EnquiryDiv />
    </div>
  );
}

export default CNCturning;
