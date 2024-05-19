import React from "react";
import "../style/footer.css";
import { BsInstagram, BsTiktok, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
 
const Footer = () => (
  <div className="footer-container">
    <div className="footer-context">
      <h2>dj SIEUR</h2>
      <p>  © 2024 All rights reserved / What A Music</p>
      <div className="footer-icon-wrapper">
        <Link to="https://www.instagram.com/" className="footer-socialLinks">
          <BsInstagram color="black" size={30} />
        </Link>
        <Link to="/djsieur/" className="footer-socialLinks">
          <BsYoutube color="black" size={30} />
        </Link>
        <Link to="/djsieur/" className="footer-socialLinks">
          <BsTiktok color="black" size={30} />
        </Link>
      </div>
    </div>
  </div>
);

export default Footer;
