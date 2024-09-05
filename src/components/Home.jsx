// Home.js
import React, { useEffect, useRef, useState } from "react";

function Home({ setHomeNavbar }) {
  const homeBannerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHomeNavbar(true);
          } else {
            setHomeNavbar(false);
          }
        });
      },
      { threshold: 0.1 } // Adjust the threshold to control when the observer triggers
    );

    if (homeBannerRef.current) {
      observer.observe(homeBannerRef.current);
    }

    return () => {
      if (homeBannerRef.current) {
        observer.unobserve(homeBannerRef.current);
      }
    };
  }, [setHomeNavbar]);

  return (
    <div>
      <div className="homeBanner" ref={homeBannerRef}>
        <div className="homeBannerContainer"></div>
      </div>
      <div className="infoContainer" style={{height:"100svh"}}></div>
    </div>
  );
}

export default Home;
