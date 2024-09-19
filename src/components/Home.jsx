import React, { useEffect, useRef, useState } from "react";
import HomeBanner from "./HomeDivs/HomeBanner";
import HomeBenefits from "./HomeDivs/HomeBenefits";
import HomeProducts from "./HomeDivs/HomeProducts";
import Journey from "./Journey";
import HomeMachines from "./HomeDivs/HomeMachines";
import HomeStory from "./HomeDivs/HomeStory";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import EnquireDiv from "./EnquiryDiv";

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
      { threshold: 0.1 }
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
    <div className="Home">
      <div className="homeBanner" ref={homeBannerRef}>
        <HomeBanner />
      </div>
      <HomeBenefits />
      <HomeProducts />
      <Journey />
      <HomeMachines />
      <HomeStory />
      <Gallery />
      <Testimonials />
      <EnquireDiv />
    </div>
  );
}

export default Home;
