import React from "react";
import ProductBanner from "./CNCturning/ProductBanner";
import ProductEnquire from "./CNCturning/ProductEnquire";
import ProductEquipment from "./CNCturning/ProductEquipment";
import ProductFacilities from "./CNCturning/ProductFacilities";

function CNCturning() {
  return (
    <div className="product">
      <ProductBanner />
      <ProductEnquire />
      <ProductEquipment />
      <ProductFacilities />
    </div>
  );
}

export default CNCturning;
