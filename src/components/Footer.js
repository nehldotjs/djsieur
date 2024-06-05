import React, { useEffect } from "react";
import "../style/footer.css";
import { BsInstagram, BsTiktok, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 100,
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
    AOS.refresh();
  }, []); // Dependency array to run useEffect once

  return (
    <div className="footer-container">
      <div className="footer-context">
        <Link to="/djsieur/" style={{ textDecoration: "none", color: "black" }}>
          <h2 data-aos="zoom-in-up">Dj Elvis</h2>
        </Link>
        <p data-aos="zoom-in-up">© 2024 All rights reserved / What A Music</p>
        <div className="footer-icon-wrapper">
          <Link
            data-aos="zoom-in-up"
            to="https://www.instagram.com/"
            className="footer-socialLinks">
            <BsInstagram color="black" size={30} />
          </Link>
          <Link
            data-aos="zoom-in-up"
            to="/djsieur/"
            className="footer-socialLinks">
            <BsYoutube color="black" size={30} />
          </Link>
          <Link
            data-aos="zoom-in-up"
            to="/djsieur/"
            className="footer-socialLinks">
            <BsTiktok color="black" size={30} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
