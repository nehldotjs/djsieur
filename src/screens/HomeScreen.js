import React from "react";
import "../style/home.css";

import model from "../assets/pexels-brett-sayles-2011858.png";
import { useDataContext } from "../context/DataProvider";

function HomeScreen() {
  const { hour, minute, second, day, month, year,ampm } = useDataContext();
  return (
    <div className="hs-wrapper">
      <div className="hs-imageContainer">
        <img loading="lazy" src={model} alt="" />
      </div>
      <div className="hs-context-container">
        <div className="hs-date-time-wrapper">
          <div className="hs-time-container">
            <p>
              {hour} : {minute} : {second} {ampm}
            </p>
          </div>
          <div className="hs-date-wrapper">
            <p>
              {day} {month} {year}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
