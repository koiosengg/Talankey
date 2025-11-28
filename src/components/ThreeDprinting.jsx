import React from "react";
import ProductBanner from "./ThreeDprinting/ProductBanner";
import ProductEnquire from "./ThreeDprinting/ProductEnquire";
import ProductBenefits from "./ThreeDprinting/ProductBenefits";
import ProductFDM from "./ThreeDprinting/ProductFDM";
import ProductPortfolio from "./ThreeDprinting/ProductPortfolio";
import ProductManufacturing from "./ThreeDprinting/ProductManufacturing";
import ProductMaterials from "./ThreeDprinting/ProductMaterials";
import Marquee from "./Marquee";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import LogoMarquee from "./LogoMarquee";
import EnquiryDiv from "./EnquiryDiv";

function ThreeDprinting() {
  return (
    <div className="product ThreeDprinting">
      <ProductBanner />
      <ProductEnquire />
      <ProductFDM />
      <ProductBenefits />
      <ProductPortfolio />
      <ProductManufacturing />
      <ProductMaterials />
      <Marquee />
      <Gallery />
      <Testimonials />
      <LogoMarquee />
      <EnquiryDiv />
    </div>
  );
}

export default ThreeDprinting;
