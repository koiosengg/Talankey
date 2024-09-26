import React, { useState, useEffect } from "react";
import ProductProcess1 from "../../assets/Home/HomeSector/Talankey HomeSector (1).jfif";
import ProductProcess2 from "../../assets/Home/HomeSector/Talankey HomeSector (1).jpg";
import ProductProcess3 from "../../assets/Home/HomeSector/Talankey HomeSector (2).jfif";
import ProductProcess4 from "../../assets/Home/HomeSector/Talankey HomeSector (2).jpg";

function ProductProcess() {
  const [activeIndex, setActiveIndex] = useState(0);
  const processData = [
    {
      title: "Designing & Engineering",
      description:
        "Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. morbi",
      image: ProductProcess1,
    },
    {
      title: "Prototyping",
      description:
        "Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. morbi",
      image: ProductProcess2,
    },
    {
      title: "Fabrication and Assembly",
      description:
        "Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. morbi",
      image: ProductProcess3,
    },
    {
      title: "Testing & Quality Control",
      description:
        "Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. morbi",
      image: ProductProcess4,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % processData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, processData.length]);

  const handleSetClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="infoContainer ProductProcess">
      <div className="infoContainerHeading">
        <div className="subHeading">
          <div className="headingLine"></div>
          <p>Manufacturing Process</p>
          <div className="headingLine"></div>
        </div>
        <div className="heading">
          <h2>
            Key Steps to Precision and <br /> Efficiency
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
            arcu. Commodo senectus morbi faucibus lectus sit mi. Odio{" "}
          </p>
        </div>
      </div>
      <div className="infoContainerDiv">
        <div className="ProductProcessContent notMobile">
          {processData.map((process, index) => (
            <div
              key={index}
              className={`productProcessSet ${
                activeIndex === index ? "activeProductProcess" : ""
              }`}
              onClick={() => handleSetClick(index)}
            >
              <div className="numberLine">
                <p>{index + 1}</p>
                <div className="LineDiv">
                  <div className="Line"></div>
                  <div className="activeLine"></div>
                </div>
              </div>
              <div className="content">
                <h4>{process.title}</h4>
                <p>{process.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Mobile View */}
        <div className="mobileProductProcessContent">
          <div className="mobileNumber">
            {processData.map((_, index) => (
              <div
                key={index}
                className={`mobileNumberSet ${
                  activeIndex === index ? "activeProductProcess" : ""
                }`}
                onClick={() => handleSetClick(index)}
              >
                <p>{index + 1}</p>
                <div className="LineDiv">
                  <div className="Line"></div>
                  <div className="activeLine"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mobileProductProcessText">
            <h5>{processData[activeIndex].title}</h5>
            <p>{processData[activeIndex].description}</p>
          </div>
        </div>
        <div className="ProductProcessImg">
          <img src={processData[activeIndex].image} alt="Process Image" />
        </div>
      </div>
    </div>
  );
}

export default ProductProcess;
