import React, { useState, useEffect } from "react";
import ContactFormShape from "../assets/Contact/ContactFormShape.svg";
import ContactFormImgBackground from "../assets/Contact/ContactFormImgBackground.svg";
import ContactImg1 from "../assets/Contact/Talankey CNC Turning.png";
import ContactImg2 from "../assets/Contact/Talankey CNC Milling.png";
import ContactImg3 from "../assets/Contact/Talankey Laser Cutting and Bending.png";
import ContactImg4 from "../assets/Contact/Talankey EDM.png";
import GetInTouch from "./GetInTouch";
function Contact() {
  const [activeIndex, setActiveIndex] = useState(0);

  const contactImages = [
    {
      img: ContactImg1,
      title: "CNC Turning",
      text: "Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. morbi ",
      alt: "Talankey CNC Turning",
    },
    {
      img: ContactImg2,
      title: "CNC Milling",
      text: "Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. morbi ",
      alt: "Talankey CNC Milling",
    },
    {
      img: ContactImg3,
      title: "Laser Cutting and Bending",
      text: "Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. morbi ",
      alt: "Talankey Laser Cutting and Bending",
    },
    {
      img: ContactImg4,
      title: "EDM’s",
      text: "Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. Commodo senectus morbi faucibus lectus sit mi. Odio Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit arcu. morbi ",
      alt: "Talankey EDM",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % contactImages.length);
    }, 4000); // 4 seconds delay

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="contactForm">
        <div className="contactFormHeading">
          <img
            src={ContactFormShape}
            alt="Decorative shape for the contact form heading"
          />
          <h1>How Can We Help?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Libero lacus nullam sit
            arcu. Commodo senectus morbi faucibus lectus sit mi. Odio{" "}
          </p>
        </div>
        <div className="contactFormContainer">
          <div className="contactFormImgContainer">
            <img
              className="contactFormImgBackground"
              src={ContactFormImgBackground}
              alt="Background with abstract shapes for the contact form section"
            />
            <div className="contactFormImg">
              <img
                src={contactImages[activeIndex].img}
                alt={contactImages[activeIndex].alt}
              />
            </div>
            <div className="contactFormImgText">
              <h2>{contactImages[activeIndex].title}</h2>
              <p>{contactImages[activeIndex].text}</p>
            </div>
          </div>
          <form className="contactFormDiv">
            <div className="contactFormInput">
              <label htmlFor="fullName">
                Full Name <span>*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter name"
                required
              />
            </div>
            <div className="contactFormInput">
              <label htmlFor="email">
                Email Address <span>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="contactFormInput">
              <label htmlFor="mobileNumber">
                Mobile Number <span>*</span>
              </label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                placeholder="Enter number"
                required
              />
            </div>
            <div className="contactFormInput">
              <label htmlFor="message">
                Message <span>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message here"
                required
              ></textarea>
            </div>
            <button type="submit">Contact Us</button>
          </form>
        </div>
      </div>
      <GetInTouch />
    </>
  );
}

export default Contact;
