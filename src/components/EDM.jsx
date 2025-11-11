import React from "react";
import ProductBanner from "./EDM/ProductBanner";
import ProductBenefits from "./EDM/ProductBenefits";
import ProductEnquire from "./EDM/ProductEnquire";
import ProductEquipment from "./EDM/ProductEquipment";
import ProductProcess from "./EDM/ProductProcess";
import ProductPortfolio from "./EDM/ProductPortfolio";
import HomeBenefits from "./HomeDivs/HomeBenefits";
import Marquee from "./Marquee";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import LogoMarquee from "./LogoMarquee";
import EnquiryDiv from "./EnquiryDiv";

function EDM() {
  return (
    <div className="product">
      <ProductBanner />
      <ProductEnquire />
      {/* <ProductEquipment />
      <ProductProcess />
      <ProductPortfolio />
      <ProductBenefits /> */}
      <HomeBenefits />
      <Marquee />
      <Gallery />
      <Testimonials />
      <LogoMarquee />
      <EnquiryDiv />
    </div>
  );
}

export default EDM;
