import React from 'react';
import ReactDOM from 'react-dom/client';
import ResturantCard from './ResturantCard';
import { useState } from 'react';
import resList from '../utils/mockData';
import { BiSearchAlt } from "react-icons/bi";





const CenterBody = () => {
    const [RestaurantsData, setRestaurantsData] = useState(resList);
    //Important very.....
    const [Search, setSearch] = useState('');
    console.log(Search);
    return(
        <div className="body">
            <div className="searchButton">
                <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder='Search For Restaurants'/>
                <button>< BiSearchAlt /></button>
            </div>
            <div className="filter-button">
                <button className='filter-btn' 
                onClick={() => {
                    const filterdRes = RestaurantsData.filter((res) => res.info.avgRating > 4);
                    setRestaurantsData(filterdRes);
                }}>Top Rated Resturants</button>
            </div>
            <div className="Cart">
                {/*if something is reused again again then create a Seprate Component */}
            {/*map*/}
            {
                RestaurantsData.filter((resturant) => {
                    return Search.toLowerCase() === '' ? resturant : resturant.info.name.toLowerCase().includes(Search)
                }).map((resturant) => 
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