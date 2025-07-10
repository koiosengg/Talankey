import React, { useState, useEffect } from "react";

function MissionVision() {
  const [activeIndex, setActiveIndex] = useState(0);

  const sets = [
    {
      title: "MISSION",
      text: "To build long term relationships with our customers and clients and provide exceptional customer services by carrying out machining through innovation and advanced technology.",
    },
    {
      title: "VISION",
      text: "To provide quality services that exceeds the expectations of our esteemed customers.",
    },
    {
      title: "CORE VALUES",
      text: "We believe in treating our customers with respect and faith. We grow through creativity and innovation. We integrate honesty, integrity and business ethics into all aspects of our business functioning. Perfection is our prime concern.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % sets.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [sets.length]);
  return (
    <div className="about-mission-vision">
      {sets.map((item, index) => (
        <div
          key={index}
          className={`about-mission-vision-set ${
            index === activeIndex ? "about-mission-vision-active-set" : ""
          }`}
        >
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default MissionVision;
