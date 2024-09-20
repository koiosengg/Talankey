import React, { useState, useEffect } from "react";
import HomeSectorSet1 from "../../assets/Home/HomeSector/Talankey HomeSector (1).jfif";
import HomeSectorSet2 from "../../assets/Home/HomeSector/Talankey HomeSector (1).jpg";
import HomeSectorSet3 from "../../assets/Home/HomeSector/Talankey HomeSector (2).jfif";
import HomeSectorSet4 from "../../assets/Home/HomeSector/Talankey HomeSector (2).jpg";
import HomeSectorSet5 from "../../assets/Home/HomeSector/Talankey HomeSector (3).jpg";
import HomeSectorSet6 from "../../assets/Home/HomeSector/Talankey HomeSector (4).jpg";

function HomeSectors() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectorSets = [
    {
      title: "Automotive",
      content:
        "Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. Commodo senectus morbi faucibus Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem ipsum ",
      img: HomeSectorSet1,
    },
    {
      title: "Aerospace",
      content:
        "Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. Commodo senectus morbi faucibus Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem ipsum ",
      img: HomeSectorSet2,
    },
    {
      title: "EV",
      content:
        "Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. Commodo senectus morbi faucibus Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem ipsum ",
      img: HomeSectorSet3,
    },
    {
      title: "General Engineering",
      content:
        "Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. Commodo senectus morbi faucibus Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem ipsum ",
      img: HomeSectorSet4,
    },
    {
      title: "Railways",
      content:
        "Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. Commodo senectus morbi faucibus Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem ipsum ",
      img: HomeSectorSet5,
    },
    {
      title: "Machine Tools",
      content:
        "Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. Commodo senectus morbi faucibus Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem ipsum ",
      img: HomeSectorSet6,
    },
  ];

  // Effect to handle automatic cycling of active sets
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % sectorSets.length);
    }, 5000);

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
                <h4>{sector.title}</h4>
                <p>{sector.content}</p>
              </div>
              <div className="Line"></div>
              <div className="activeLineDiv">
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

export default HomeSectors;