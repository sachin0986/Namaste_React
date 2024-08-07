import React from 'react';
import ReactDOM from 'react-dom/client';
import ResturantCard from './ResturantCard';
import { useState, useEffect } from 'react';
import { LuSearch } from "react-icons/lu";

const CenterBody = () => {
    const [RestaurantsData, setRestaurantsData] = useState([]);
     //we need to make the current state of search is = empty = useState(''); --> Like that otherwise error of can't read the properties of toLoweCase() function.
    useEffect(() => {fetchData()}, []);
    //Important very.....

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=12.9715987&lng=77.5945627"); //use async await for promises
     
        const json = await data.json(); //converting into json format
        console.log(json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        setRestaurantsData(json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        };

    return(
        <div className="body">
            <div className="shot_head">
                {/*Search Button*/}
            <div className="searchButton">
                <input type="text" placeholder='Search For Restaurants'/>
                <button>< LuSearch /></button>
            </div>
                     {/*Filter Button*/}
            <div className="filter-button">
                <button className='filter-btn' 
                onClick={() => {
                    const filterdRes = RestaurantsData.filter((res) => res.info.avgRating > 4);
                    setRestaurantsData(filterdRes);
                }}>Top Rated Resturants</button>
            </div>
                 {/*All Restaurents Button*/}
            </div>
            <div className="Cart">
                {/*if something is reused again again then create a Seprate Component */}
            {/*map*/}
            {
                RestaurantsData.map((resturant) => 
                    (<ResturantCard key={resturant.info.id} resData={resturant}/> ))
            }
            {/* unique Key={} whenever you use map function or loop in react always use key{} property why? - it provode a uinque id to 
            the childrens or components at the same level and it optimizes the code/react to perform well
            like if you not use it react render all components in loop/map but if you provide key{} then it only 
            render the newly added component. 
            you can also use index as a key{} / key{index} but it id not recomended.*/}
            </div>
        </div>
    );
}

export default CenterBody;