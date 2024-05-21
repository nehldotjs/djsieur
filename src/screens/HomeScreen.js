import React, { useEffect } from "react";
import "../style/home.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { ReactTyped } from "react-typed";

import model from "../assets/pexels-brett-sayles-2011858.png";
import { useDataContext } from "../context/DataProvider";

function HomeScreen() {
  const { hour, minute, second, day, month, year, ampm } = useDataContext();
  useEffect(() => {
    AOS.init({
      offset: 50,
      delay: 100,
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
    AOS.refresh();
  }, []); // Dependency array to run useEffect once

  return (
    <div className="hs-wrapper">
      <div className="hs-imageContainer">
        <img loading="lazy" src={model} alt="" data-aos="zoom-in-up" />
      </div>
      <div className="hs-context-container">
        <div className="hs-context">
          <h1 data-aos="zoom-in-up">
            <ReactTyped
              strings={[
                "delivering sets that are both dynamic and immersive.",
                "ACTIVATING MUSIC RESPONSE PROTOCOL"
              ]}
              typeSpeed={50}
              backSpeed={50}
              loop={false}
            />
          </h1>
        </div>
        <div className="hs-date-time-wrapper">
          <div className="hs-time-container">
            <p data-aos="zoom-in-up">
              <span>
                {hour} : {minute} : {second}
              </span>{" "}
              {ampm}
            </p>
          </div>
          <div className="hs-date-wrapper">
            <p data-aos="zoom-in-up">
              {month} - {day} - {year}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
