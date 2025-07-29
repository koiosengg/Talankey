import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

// Custom hook for count-up animation
const useCountUp = (targetNumber, isInView, duration = 3000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const incrementTime = duration / targetNumber; // Calculate time per increment

      const incrementCount = (current) => {
        if (current < targetNumber) {
          setTimeout(() => {
            setCount(current + 1);
            incrementCount(current + 1);
          }, incrementTime); // Use dynamic delay
        }
      };

      incrementCount(0);
    }
  }, [targetNumber, isInView, duration]);

  return count;
};

function Journey() {
  const { ref: journeyRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const duration = 2000; // Set total duration for the count-up animation

  const companiesServed = useCountUp(30, inView, duration);
  const yearsInBusiness = useCountUp(7, inView, duration);
  const productsSold = useCountUp(250, inView, duration);
  const countriesShipped = useCountUp(300, inView, duration);

  return (
    <div className="journey" ref={journeyRef}>
      <div className="heading">
        <h2>
          Our Journey
          <br />
          <span>so Far</span>
        </h2>
        <p>
          Talankey has delivered precision parts to 30+ companies across
          automotive, aerospace, railways, and medical sectors with solutions
          that power real-world innovation.
        </p>
      </div>
      <div className="journeySetContainer">
        <div className="journeySet">
          <span>{companiesServed}+</span>
          <p>Companies Served</p>
        </div>
        <div className="journeySet">
          <span>0{yearsInBusiness}</span>
          <p>Years in Business</p>
        </div>
        <div className="journeySet">
          <span>{productsSold}+</span>
          <p>Unique Products Manufactured</p>
        </div>
        <div className="journeySet">
          <span>{countriesShipped}+</span>
          <p>Daily Part Production</p>
        </div>
      </div>
    </div>
  );
}

export default Journey;
