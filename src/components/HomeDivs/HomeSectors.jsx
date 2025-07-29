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
        "From prototyping to production, Talankey delivers precision-engineered components for the automotive industry. Our CNC machining, sheet metal fabrication, and EDM services support critical parts used in engine systems, brackets, housings, and high-performance assemblies, built to withstand demanding conditions and rigorous tolerance requirements.",
      img: HomeSectorSet1,
    },
    {
      title: "Aerospace",
      content:
        "In aerospace manufacturing, accuracy and material integrity are non-negotiable. At Talankey, we craft lightweight, high-strength components using CNC milling, turning, and 3D printing. Our ability to meet strict dimensional tolerances ensures that every aerospace part we deliver contributes to performance, safety, and compliance.",
      img: HomeSectorSet2,
    },
    {
      title: "EV",
      content:
        "Supporting the future of mobility, Talankey provides EV manufacturers with precision parts for battery enclosures, motor housings, and thermal management systems. Our advanced machining and additive manufacturing processes enable lightweight, durable solutions for faster innovation and production scalability.",
      img: HomeSectorSet3,
    },
    {
      title: "General Engineering",
      content:
        "We partner with OEMs and engineering firms to manufacture a wide range of mechanical components. With capabilities in CNC, fabrication, SPM manufacturing, and surface finishing, Talankey meets diverse design, volume, and material requirements, ensuring function, form, and fit across applications.",
      img: HomeSectorSet4,
    },
    {
      title: "Railways",
      content:
        "Talankey supports the railway industry with durable, heavy-duty components built to endure vibration, load, and weather exposure. From custom brackets and enclosures to large machined parts, our expertise in sheet metal fabrication and high-tolerance machining ensures consistent quality and performance.",
      img: HomeSectorSet5,
    },
    {
      title: "Machine Tools",
      content:
        "We collaborate with machine tool builders to manufacture precision parts such as bases, brackets, and functional assemblies. Our SPM manufacturing and CNC capabilities allow us to produce complex geometries with high repeatability, enabling reliable performance in automated and manual tooling systems.",
      img: HomeSectorSet6,
    },
    {
      title: "Medical Equipment",
      content:
        "For the medical sector, Talankey produces parts that demand uncompromised precision and hygiene. Using CNC machining and 3D printing, we craft enclosures, frames, and functional prototypes with fine surface finishes, supporting the development of diagnostic devices, lab equipment, and surgical tools.",
      img: HomeSectorSet5,
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
            Our manufacturing expertise adapts to complex demands, delivering
            reliable, high-precision solutions across a wide range of industrial
            applications.
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

export default HomeSectors;
