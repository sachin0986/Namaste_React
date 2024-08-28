import React from "react";
import ReactDOM from "react-dom/client";
import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import { LuSearch } from "react-icons/lu";
import Shimmer from "./Shimmer";
import { Data_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const CenterBody = () => {
  const [RestaurantsData, setRestaurantsData] = useState([]);
  const [Search, setSearch] = useState("");
  //we need to make the current state of search is = empty = useState(''); --> Like that otherwise error of can't read the properties of toLoweCase() function.
  useEffect(() => {
    fetchData();
  }, []);
  //Important very.....

  const fetchData = async () => {
    const data = await fetch(Data_URL); //use async await for promises
    const json = await data.json(); //converting into json format
    //using optional chainnig
    setRestaurantsData(
      json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  //conditional rendering -> rendering on the basis of the condition. using the terneary operator

  return RestaurantsData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="shot_head">
        {/*Search Button*/}

        <div className="searchButton">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search For Restaurants"
          />
          <button>
            <LuSearch />
          </button>
        </div>

        {/*Filter Button*/}
        <div className="filter-button">
          <button
            className="filter-btn"
            onClick={() => {
              const filterdRes = RestaurantsData.filter(
                (res) => res.info.avgRating > 4
              );
              setRestaurantsData(filterdRes);
            }}
          >
            Top Rated Resturants
          </button>
        </div>
        {/*All Restaurents Button*/}
      </div>
      <div className="Cart">
        {/*if something is reused again again then create a Seprate Component */}
        {/*map*/}
        {RestaurantsData.filter((resturant) => {
          return Search.toLowerCase() === ""
            ? resturant
            : resturant.info.name.toLowerCase().includes(Search.toLowerCase());
        }).map((resturant) => (
          <Link key={resturant.info.id} to={"/restaurent/" + resturant.info.id}>
            <ResturantCard resData={resturant} />
          </Link>
        ))}
        {/* unique Key={} whenever you use map function or loop in react always use key{} property why? - it provode a uinque id to 
            the childrens or components at the same level and it optimizes the code/react to perform well
            like if you not use it react render all components in loop/map but if you provide key{} then it only 
            render the newly added component. 
            you can also use index as a key{} / key{index} but it id not recomended.*/}
      </div>
    </div>
  );
};

export default CenterBody;
