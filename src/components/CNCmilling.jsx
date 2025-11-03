import React from "react";
import ProductBanner from "./CNCmilling/ProductBanner";
import ProductEnquire from "./CNCmilling/ProductEnquire";
import ProductEquipment from "./CNCmilling/ProductEquipment";
import ProductProcess from "./CNCmilling/ProductProcess";
import ProductPortfolio from "./CNCmilling/ProductPortfolio";
import HomeBenefits from "./HomeDivs/HomeBenefits";
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
      <HomeBenefits />
      <Marquee />
      <Gallery />
      <Testimonials />
      <LogoMarquee />
      <EnquiryDiv />
    </div>
  );
}

export default CNCmilling;
