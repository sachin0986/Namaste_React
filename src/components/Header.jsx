import React from "react";
import ReactDOM from "react-dom/client";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="imageContainer">
        <img className="Logo" src={CDN_URL} alt="LogoImage" />
      </div>
      <div className="nav_items">
        <ul>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to=" ">Search</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Help</li>
          <li>Cart</li>
          <button className="login">Sign In</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
