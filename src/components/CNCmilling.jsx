import React from "react";
import ProductBanner from "./CNCmilling/ProductBanner";
import ProductBenefits from "./CNCmilling/ProductBenefits";
import ProductEnquire from "./CNCmilling/ProductEnquire";
import ProductEquipment from "./CNCmilling/ProductEquipment";
import ProductProcess from "./CNCmilling/ProductProcess";
import ProductPortfolio from "./CNCmilling/ProductPortfolio";
import Marquee from "./Marquee";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import LogoMarquee from "./LogoMarquee";
import EnquiryDiv from "./EnquiryDiv";

function CNCmilling() {
  return (
    <div className="product">
      <ProductBanner />
      <ProductEnquire />
      <ProductEquipment />
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

export default CNCmilling;
