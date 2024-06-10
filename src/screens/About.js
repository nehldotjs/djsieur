import React, { useEffect } from "react";
import "../style/about.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { ReactTyped } from "react-typed";

import grooveImg from "../assets/4.jpg";
import EmblaCarousel from "../carousel/EmblaCarousel";
import { useDataContext } from "../context/DataProvider";

import userImage1 from "../assets/Elvis/1.jpg";
import userImage2 from "../assets/Elvis/2.jpg";
import userImage3 from "../assets/Elvis/3.jpg";
import userImage4 from "../assets/Elvis/4.jpg";

import SvgLogo from "../assets/logoSvg.svg";
import { BiSquare } from "react-icons/bi";
import CardCarousel from "../Card/CardCarousel";

function About() {
  // const { carouselImageSelect, setCarouselImageSelect } = useDataContext();

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

  // Define the user images object
  const userImages = [
    { id: 1, img: userImage1 },
    { id: 2, img: userImage2 },
    { id: 3, img: userImage3 },
    { id: 4, img: userImage4 }
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
    <>
      <div className="about-wrapper">
        <div className="about-image-container">
          <h1>About </h1>
          <img src={grooveImg} loading="lazy" alt="" />
        </div>

        <div className="about-context">
          <p>
            <ReactTyped
              strings={[
                "With a passion for music and genre-blending skills, DJ Sieur delivers  dynamic and immersive sets. Relive past shows in the gallery and see behind-the-scenes magic.  Welcome to DJ Sieur's world let the music  move you!"
              ]}
              typeSpeed={10}
              backSpeed={50}
              loop={false}
              cursorChar=""
            />
          </p>

          <div className="about-e-img-wrapper">
            {userImages.map((src) => (
              <div className="userImg" key={src.id}>
                <img
                  src={src.img}
                  alt={`User ${src.id + 1}`}
                  className="user"
                />
              </div>
            ))}
          </div>

          <div className="hr"></div>

          <div
            className="carouselWrapper"
            style={{
              width: "100%",
              height: "auto",
              cursor: "pointer"
            }}>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </div>

          {/* <CardCarousel /> */}

        </div>
      </div>
    </>
  );
}

export default About;
