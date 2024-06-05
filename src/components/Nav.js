import React, { useEffect } from "react";
import "../style/nav.css";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/PropStateContext";
import { FaWhatsapp } from "react-icons/fa";

// import elvisLogo from "../assets/logo.png";

function Nav() {
  const { animation, setAnimation } = useStateContext();

  const toggleMenu = () => {
    setAnimation((prevState) => ({
      ...prevState,
      navBtn: !animation.navBtn,
      sideMenu: !animation.sideMenu
    }));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0
    });
  };

  const handleLinkClick = () => {
    toggleMenu();
    scrollToTop();
  };

  return (
    <>
      <div className="nav-wrapper">
        <div className="nav-context">
          <div className="nav-logoContainer">
            <Link
              to="/djsieur/"
              style={{ textDecoration: "none" }}
              onClick={scrollToTop}>
              <h3 className="nav-logo">Elvis</h3>
            </Link>
          </div>

          {/* <div className="nav-logoWrapper">
            <h1 style={{ color: "pink" }}>hello world</h1>
            <img src={elvisLogo} alt="elvis" className="logo" />
          </div> */}

          <div className="nav-button">
            <button className="navBtn" onClick={toggleMenu}>
              <div
                className={
                  !animation.navBtn
                    ? "btnanimation-line1"
                    : "btnanimation-line1 line1Animation"
                }></div>
              <div
                className={
                  !animation.navBtn
                    ? "btnanimation-line2"
                    : "btnanimation-line2 line2Animation"
                }></div>
              <div
                className={
                  !animation.navBtn
                    ? "btnanimation-line3"
                    : "btnanimation-line3 line3Animation"
                }></div>
            </button>
          </div>
        </div>
        <div className="nav-sideMenu">
          <div
            className={
              !animation.sideMenu
                ? "nav-sideMenu-context"
                : "nav-sideMenu-context sideMenuAnimation"
            }>
            <div className="nav-Link-Wrapper">
              <Link
                className="nav-links"
                to="/djsieur/"
                onClick={handleLinkClick}>
                <h3>Home</h3>
              </Link>
              <Link
                className="nav-links"
                to="/djsieur/about"
                onClick={handleLinkClick}>
                <h3>About</h3>
              </Link>
              <Link
                className="nav-links"
                to="/djsieur/event"
                onClick={handleLinkClick}>
                <h3>Events </h3>
              </Link>

              {/* <Link className="nav-links" to="/contact" onClick={toggleMenu}>
                <h3>Contact</h3>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <div className="nav-whatsapp-wrapper">
        <Link
          className="whatsapp-wrapper"
          onClick={() => alert("WhatsApp clicked")}>
          <FaWhatsapp className="nav-whatsapp-icon" />
        </Link>
      </div>
    </>
  );
}

export default Nav;
