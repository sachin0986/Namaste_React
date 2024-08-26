import React from "react";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { LOGO_URL, MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenuPage = () => {
    const [resMenu, setresMenu] = useState(null);
    const { resId } = useParams();

    useEffect( () => {
        fetchMenu();
    }, []);
    
    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        setresMenu(json?.data);
    };

    if(resMenu === null) return <Shimmer />; // don't put this blindly on return condition sometimes this will throw error because of it check the elements before rendering it and in starting it is null. 

    const { name, cloudinaryImageId, costForTwoMessage, cuisines} = resMenu?.cards[2]?.card?.card?.info;
    const { itemCards } = resMenu?.cards[5]?.groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <img className="menuImg" src={LOGO_URL + cloudinaryImageId} alt="resImg" />
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <ul>
                {itemCards.map((items) => 
                    (
                        <li key={items.card.info.id}>
                            {items.card.info.name} - {"Rs. "}{items.card.info.price / 100 || items.card.info.defaultPrice / 100}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default RestaurantMenuPage;