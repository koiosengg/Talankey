import React, { useState, useEffect } from "react";
import HomeSectorSet1 from "../../assets/ThreeDprinting/Materials_1.png";
import HomeSectorSet2 from "../../assets/ThreeDprinting/Materials_2.png";
import HomeSectorSet3 from "../../assets/ThreeDprinting/Materials_3.jfif";

function ProductMaterials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectorSets = [
    {
      title: "Polylatic Acid (PLA +)",
      content:
        "PLA+ offers smoother surface finish and greater toughness than standard PLA, making it ideal for concept prototypes and high-detail models. It prints with precision and minimal warping, allowing designers to visualize and validate ideas efficiently. PLA+ is perfect for architectural mock-ups, product design models, fit-test parts and visual presentations where accuracy and refinement are essential.",
      img: HomeSectorSet1,
    },
    {
      title: "Acrylonitrile Butadiene Styrene (ABS)",
      content:
        "ABS is one of the strongest and most heat-resistant industrial 3D printing materials, ideal for parts that require long-term mechanical strength and ruggedness. It remains stable under stress and is widely preferred for functional testing, production tooling and end-use components. ABS is extensively used in automotive interior parts, electronic enclosures, jigs, fixtures and prototype housings due to its reliability and engineering-grade performance.",
      img: HomeSectorSet2,
    },
    {
      title: "Flexible Thermoplastic Polyurethane",
      content:
        "TPU is a highly elastic and abrasion-resistant material that performs exceptionally well in applications requiring flexibility and continuous movement. Its impact tolerance and durability make it suitable for dynamic, load-bearing parts that experience bending and deformation. This material is commonly used in components such as gaskets, seals, footwear prototypes, automotive bushings, protective grips and wearable product parts.",
      img: HomeSectorSet3,
    },
  ];

  // Effect to handle automatic cycling of active sets
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % sectorSets.length);
    }, 10000);

    // Cleanup interval on component unmount or when activeIndex changes manually
    return () => clearInterval(timer);
  }, [activeIndex, sectorSets.length]);

  // Handler to set the clicked set as active and reset the timer
  const handleSetClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="infoContainer HomeSectors">
      <div className="infoContainerHeading">
        <div className="subHeading">
          <div className="headingLine"></div>
          <p>Industries We Serve</p>
          <div className="headingLine"></div>
        </div>
        <div className="heading">
          <h2>Sectors We Specialize In</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
            arcu. Commodo senectus morbi faucibus lectus sit mi. Odio{" "}
          </p>
        </div>
      </div>
      <div className="infoContainerDiv">
        <div className="homeSectorText">
          {sectorSets.map((sector, index) => (
            <div
              key={index}
              className={`homeSectorTextSet ${
                activeIndex === index ? "activeSectorSet" : ""
              }`}
              onClick={() => handleSetClick(index)}
            >
              <div className="heading">
                <h4>
                  {" "}
                  {sector.title}{" "}
                  <div className="svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      className="mobile"
                    >
                      <path
                        d="M0 6.46728L6 0.467285L12 6.46728L10.935 7.53229L6 2.59729L1.065 7.53229L0 6.46728Z"
                        fill="#F39200"
                      />
                    </svg>
                  </div>
                </h4>
                <img src={sector.img} className="mobile"></img>
                <p>{sector.content}</p>
              </div>

              <div className="LineDiv">
                <div className="normalLine">
                  <div className="Line"></div>
                </div>

                <div className="activeLine"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="homeSectorImg">
          <img
            src={sectorSets[activeIndex].img}
            alt={sectorSets[activeIndex].title}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductMaterials;
