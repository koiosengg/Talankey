import React from "react";
import ProductBanner from "./Laser Cutting And Bending/ProductBanner";
import ProductBenefits from "./Laser Cutting And Bending/ProductBenefits";
import ProductEnquire from "./Laser Cutting And Bending/ProductEnquire";
import ProductEquipment from "./Laser Cutting And Bending/ProductEquipment";
import ProductProcess from "./Laser Cutting And Bending/ProductProcess";
import ProductPortfolio from "./Laser Cutting And Bending/ProductPortfolio";
import HomeBenefits from "./HomeDivs/HomeBenefits";
import Marquee from "./Marquee";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import LogoMarquee from "./LogoMarquee";
import EnquiryDiv from "./EnquiryDiv";

function LaserCuttingAndBending() {
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

export default LaserCuttingAndBending;
