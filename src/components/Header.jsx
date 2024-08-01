import React from "react";
import ReactDOM from "react-dom/client";
import { CDN_URL } from "../utils/constants";


const Header = () => {
    return(
        <div className="header">
            <div className="imageContainer">
                <img 
                className="Logo" 
                src={CDN_URL}
                alt="LogoImage"/>
            </div>
            <div className="nav_items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;