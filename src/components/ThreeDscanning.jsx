import React from "react";
import ProductBanner from "./ThreeDscanning/ProductBanner";
import ProductEnquire from "./ThreeDscanning/ProductEnquire";
import ProductEquipment from "./ThreeDscanning/ProductEquipment";
import ProductManufacturing from "./ThreeDscanning/ProductManufacturing";
import ProductMachines from "./ThreeDscanning/ProductMachines";
import Marquee from "./Marquee";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import LogoMarquee from "./LogoMarquee";
import EnquiryDiv from "./EnquiryDiv";

function ThreeDscanning() {
  return (
    <div className="product">
      <ProductBanner />
      <ProductEnquire />
      <ProductEquipment />
      <ProductManufacturing />
      <ProductMachines />
      <Marquee />
      <Gallery />
      <Testimonials />
      <LogoMarquee />
      <EnquiryDiv />
    </div>
  );
}

export default ThreeDscanning;
