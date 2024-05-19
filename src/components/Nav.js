import React, { useState } from "react";
import "../style/nav.css";

function Nav() {
  const [animation, setAnimation] = useState(false);
  return ( 
      <div className="nav-wrapper">
        <div className="nav-context">
          <div className="nav-logoContainer">
            <h3>Sieur</h3>
          </div>
          <div className="nav-button">
            <button className="navBtn" onClick={() => setAnimation(!animation)}>
              <div
                className={
                  animation
                    ? "btnanimation-line1 "
                    : "btnanimation-line1 line1Animation"
                }></div>
              <div
                className={
                  animation
                    ? "btnanimation-line2 "
                    : "btnanimation-line2 line2Animation"
                }></div>
              <div
                className={
                  animation
                    ? "btnanimation-line3  "
                    : "btnanimation-line3  line3Animation"
                }></div>
            </button>
          </div>
       
        </div>
      </div> 
  );
}

export default Nav;
