import React from "react";
import reactDom from "react-dom";
import { FaStar } from "react-icons/fa";
import { LOGO_URL } from "../utils/constants";

const ResturantCard = (props) => {
    const { resData } = props;

    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info; 
    const {deliveryTime} = resData?.info.sla;
    // destructuring, "?" this is used for optional chaning  ----- > what is optional chaning -- 

    return(
        <div className="res-card">
            <img className='cart_image' src={LOGO_URL + cloudinaryImageId} alt="cart-logo" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}<FaStar/> </h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} mins</h4>
        </div>
    );
}

export default ResturantCard;