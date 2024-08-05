import ReactDOM from 'react-dom/client';
import ResturantCard from './ResturantCard';
import { useState, useEffect } from 'react';
import resList from '../utils/mockData';
import { Data_URL } from '../utils/constants';





const CenterBody = () => {
    const [RestaurantsData, setRestaurantsData] = useState([]);
    
    useEffect(() => {
        fetchData();
    }, [])
    //Important very.....

    const fetchData = async () => {
       const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=29.22110&lng=78.96060"); //use async await for promises
     
    const json = await data.json(); //converting into json format
    console.log(json);
    };

    return(
        <div className="body">
            
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