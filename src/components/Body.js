import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
    const [listOfRestro, setListOfRestro] = useState([]);
    const [filteredRestraurent , setFilteredRestaurent] = useState([]);
    const [searchText, setSearchText] = useState("");
    useEffect(()=> {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.597577102197533&lng=73.70973594024983&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        setListOfRestro(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants );
        setFilteredRestaurent(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants );
    }

    // if(listOfRestro.length === 0){
    //     return <Shimmer/>
    // }  ==> we are replacing this code with listOfRestro.length === 0 ? <Shimmer /> : (ternary operator)

    return listOfRestro.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text"className="search-box" value={searchText} onChange={
                        (e) => {
                            setSearchText(e.target.value);
                        }
                    }/>
                    <button onClick={() => {
                        // Filter the restaurent cards and update the UI
                        let filteredRestro = listOfRestro.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        ) ;
                        setFilteredRestaurent(filteredRestro);
                        console.log(searchText);
                    }}> Search
                    </button>
                </div>
                <button className="top-btn"
                onClick={() => {
                    let filterRestro = listOfRestro.filter(
                        (res) => res.info.avgRating > 4.3 
                    );
                    setFilteredRestaurent(filterRestro);
                }}
                >Top Rated Restaurents</button>
            </div>
            <div className="res-container">
                {filteredRestraurent.map((restaurent) => (
                    <RestaurentCard key={restaurent.info.id} resData= {restaurent}/>
                ))}
            </div>

        </div>
    )
}

export default Body;