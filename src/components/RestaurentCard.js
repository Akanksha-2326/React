import React from "react";
import ReactDOM from "react-dom/client";
import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
    const { resData } = props;
    const {cloudinaryImageId, name, cuisines,avgRating, costForTwo} = resData?.info;
    return(
        <div className="res-card">
            <div className="res-Image">
                <img className="mg" 
                alt= " image" 
                src={CDN_URL
                + cloudinaryImageId}>
            </img>
            </div>
            <h3 className="res-name">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestaurentCard;