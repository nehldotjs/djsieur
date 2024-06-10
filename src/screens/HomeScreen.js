import React, { useEffect } from "react";
import "../style/home.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { ReactTyped } from "react-typed";
import { useDataContext } from "../context/DataProvider";

function HomeScreen() {
  const {
    time,

    EModel,
    E1,
    E2,
    E3,
    E4
  } = useDataContext();

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
  }, []);

  return (
    <div className="homeWrapper">
      <div className="hs-wrapper">
        <div className="hs-imageContainer">
          <img loading="lazy" src={EModel} alt="" data-aos="zoom-in-up" />
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
                cursorChar=""
              />
            </h1>
          </div>
          <div className="hs-date-time-wrapper">
            <div className="timeanddateline1"></div>
            <div className="hs-time-container">
              <p data-aos="zoom-in-up">
                {time.hour} {time.minute} {time.second} {time.ampm}
              </p>
            </div>
            <div className="timeanddateline2"></div>
            <div className="hs-date-wrapper">
              <p data-aos="zoom-in-up">
                {time.month} {time.day}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hs-section2">
        <div className="hs-headerTag">
          <h1 data-aos="zoom-in-up">
            <ReactTyped
              strings={["A SPACE THAT SPARKS DIALOGUE"]}
              typeSpeed={50}
              backSpeed={50}
              loop={false}
              cursorChar=""
            />
          </h1>
        </div>

        <div className="hs-s2-imageWrapper">
          <img src={E3} alt="" className="hs-gallery1" data-aos="zoom-in-up" />
          <div className="hs-g-imgAndContext">
            <img src={E2} alt="" className="hs-gallery" data-aos="zoom-in-up" />
            <p data-aos="zoom-in-up">
              With a deep love for music and a knack for blending genres, i've
              carved a niche in the music industry, delivering sets that are
              both dynamic and immersive. From the hottest clubs to the biggest
              festivals, his energetic presence and innovative mixes have earned
              him a dedicated following and critical acclaim.
            </p>
          </div>
        </div>
      </div>

      <div className="hs-section3">
        <div className="hs-section3-header">
          <h1 data-aos="zoom-in-up">TRAVELS</h1>
          <p data-aos="zoom-in-up">
            With a passion for creating unforgettable experiences, been
            captivating audiences with unique soundscapes.
          </p>
        </div>
        <div className="hs-image-wrapper">
          <div className="hs-image-container">
            <img
              src={E1}
              alt=""
              className="hs-cards"
              data-aos="zoom-in-up"
              loading="lazy"
            />
          </div>
          <div className="hs-image-container">
            <img
              src={E4}
              alt=""
              className="hs-cards hs-active"
              data-aos="zoom-in-up"
              loading="lazy"
            />
          </div>
          <div className="hs-image-container">
            <img
              src={E3}
              alt=""
              className="hs-cards"
              data-aos="zoom-in-up"
              loading="lazy"
            />
          </div>
        </div>

        <div class="hs-appointmentBtn" data-aos="zoom-in-up">
          <button
            class="fancy"
            onclick="location.href='mailto:nehlzintoonz@gmail.com'">
            <span class="top-key"></span>
            <span class="text">SEND A MAIL</span>
            <span class="bottom-key-1"></span>
            <span class="bottom-key-2"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
