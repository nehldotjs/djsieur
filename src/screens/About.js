import React, { useEffect } from "react";
import "../style/about.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { ReactTyped } from "react-typed";

import grooveImg from "../assets/4.jpg";
import EmblaCarousel from "../carousel/EmblaCarousel";

function About() {
  const OPTIONS = { dragFree: true, loop: true };
  const SLIDES = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/219101/pexels-photo-219101.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/948198/pexels-photo-948198.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/274192/pexels-photo-274192.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/788824/pexels-photo-788824.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

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
    <div className="about-wrapper">
      <div className="about-image-container">
        <h1>About </h1>
        <img src={grooveImg} loading="lazy" alt="" />
      </div>

      <div className="about-context">
        <p>
          <ReactTyped
            strings={[
              "With a passion for music and genre-blending skills, DJ Sieur delivers  dynamic and immersive sets. Relive past shows in the gallery and see behind-the-scenes magic.  Welcome to DJ Sieur's world—let the music  move you!"
            ]}
            typeSpeed={10}
            backSpeed={50}
            loop={false}
          />
        </p>

        <div className="hr"></div>

        <div
          className="carouselWrapper"
          style={{
            width: "100%",
            height: "auto"
          }}>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </div>
    </div>
  );
}

export default About;
