import React from "react";
import FDM from "../../assets/ThreeDprinting/FDM.png";

function ProductFDM() {
  return (
    <div className="ProductFDM">
      <img src={FDM} />
      <section>
        <h2>
          What is
          <br />
          <span>
            Fused Deposition
            <br /> Modeling (FDM)?
          </span>
        </h2>
        <p>Fused Deposition Modeling, often referred to as FDM, is a 3D printing process that transforms digital designs into physical objects layer by layer. It works by heating and extruding a thermoplastic filament material, which is deposited layer upon layer to form the final object. FDM is renowned for its reliability, cost-effectiveness, and ability to produce complex geometries.</p>
      </section>
    </div>
  );
}

export default ProductFDM;
