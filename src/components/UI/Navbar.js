import React from "react";
import { Link } from "react-router-dom";
import logo from "./../media/carclubLogo.png";
import "./../../App.css";

const navbar = ({ handleLogOut }) => {
  return (
    <section>
      <div className="navContainer">
        <nav>
          <img
            classname="logo"
            src={logo}
            alt="CarClub"
            width="120px"
            height="80px"
          />
          <ul>
            <li>
              <Link
                to="/home"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/home"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <button classname="logOutBtn" onClick={handleLogOut}>
                Log Out
              </button>
            </li>
          </ul>
          <div className="burgerMenu">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </div>
    </section>
  );
};
export default navbar;
