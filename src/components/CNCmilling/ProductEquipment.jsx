import React, { useState, useRef, useEffect } from "react";
import ProductEquipmentDot from "../../assets/CNCmilling/ProductEquipmentDot.svg";
import ProductGallery1 from "../../assets/CNCmilling/ProductGallery1.jpg";
import ProductGallery2 from "../../assets/CNCmilling/ProductGallery2.jpg";

const productEquipmentData = [
  {
    mainHeading: (
      <>
        Phillips
        <br /> PVM 855
      </>
    ),
    sets: [
      {
        heading: "Year of installation",
        paragraph: "2024",
      },
      {
        heading: "Maximum Travel",
        paragraph: (
          <>
            Travel X: 850mm <br /> Travel Y : 550mm <br /> Travel Z: 600mm
          </>
        ),
      },
      {
        heading: "ATC",
        paragraph: "24 Tools",
      },
    ],
  },
  {
    mainHeading: (
      <>
        Phillips
        <br /> PVM 855
      </>
    ),
    sets: [
      {
        heading: "Year of installation",
        paragraph: "2024",
      },
      {
        heading: "Maximum Travel",
        paragraph: (
          <>
            Travel X: 850mm <br /> Travel Y : 550mm <br /> Travel Z: 600mm
          </>
        ),
      },
      {
        heading: "ATC",
        paragraph: "24 Tools",
      },
    ],
  },
];

function ProductEquipment() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidePosition, setSlidePosition] = useState(0);
  const galleryRef = useRef(null);

  useEffect(() => {
    if (galleryRef.current) {
      const galleryWidth = galleryRef.current.offsetWidth;
      const additionalWidth = window.innerWidth < 1200 ? 9 : 25;
      const slideWidth = galleryWidth * 0.6 + additionalWidth;
      setSlidePosition(-currentIndex * slideWidth);
    }
  }, [currentIndex]);

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < productEquipmentData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const currentEquipment = productEquipmentData[currentIndex];

  return (
    <div className="infoContainer ProductEquipment">
      <div className="infoContainerHeading">
        <div className="subHeading">
          <div className="headingLine"></div>
          <p>Industrial Tools</p>
          <div className="headingLine"></div>
        </div>
        <div className="heading">
          <h2>
            State-of-the-Art <br /> Manufacturing Equipment
          </h2>
          <p>
            Advanced CNC milling machines in Bangalore deliver tight tolerances,
            superior accuracy, and smooth surface finishes for all industries.
          </p>
        </div>
      </div>
      <div className="infoContainerDiv">
        <div className="productEquipmentGallery">
          <div className="productGalleryControlDiv">
            <div className="productGalleryControl" onClick={handlePrevClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                style={{
                  transform: "rotate(-180deg)",
                  opacity: currentIndex === 0 ? 0.3 : 1,
                  cursor: currentIndex === 0 ? "not-allowed" : "pointer",
                }}
              >
                <mask
                  id="mask0_663_1360"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="40"
                  height="40"
                >
                  <rect width="40" height="40" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_663_1360)">
                  <path
                    d="M26.9587 21.6666H6.66699V18.3333H26.9587L17.6253 8.99996L20.0003 6.66663L33.3337 20L20.0003 33.3333L17.6253 31L26.9587 21.6666Z"
                    fill="#101010"
                  />
                </g>
              </svg>
            </div>
            <div className="productGalleryControl" onClick={handleNextClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                style={{
                  opacity:
                    currentIndex === productEquipmentData.length - 1 ? 0.3 : 1,
                  cursor:
                    currentIndex === productEquipmentData.length - 1
                      ? "not-allowed"
                      : "pointer",
                }}
              >
                <mask
                  id="mask0_663_1360"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="40"
                  height="40"
                >
                  <rect width="40" height="40" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_663_1360)">
                  <path
                    d="M26.9587 21.6666H6.66699V18.3333H26.9587L17.6253 8.99996L20.0003 6.66663L33.3337 20L20.0003 33.3333L17.6253 31L26.9587 21.6666Z"
                    fill="#101010"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="productGalleryImgDiv" ref={galleryRef}>
            <div
              className="productGalleryImgDivSlide"
              style={{
                display: "flex",
                transition: "transform 0.3s ease",
                transform: `translateX(${slidePosition}px)`,
              }}
            >
              {[ProductGallery1, ProductGallery2].map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className={index === currentIndex ? "center" : ""}
                  alt={`Gallery ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="productEquipmentText">
          <h5>{currentEquipment.mainHeading}</h5>
          <div className="productEquipmentTextSetDiv">
            {currentEquipment.sets.map((set, setIndex) => (
              <div className="productEquipmentTextSet" key={setIndex}>
                <div className="heading">
                  <img src={ProductEquipmentDot} alt="Dot Icon" />
                  <span>{set.heading}</span>
                </div>
                <p>{set.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductEquipment;
