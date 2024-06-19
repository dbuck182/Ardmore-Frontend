import React from "react";
import BusinessCard from "./BusinessCard";

const BusinessCards = (props) => {
    console.log(props.businesses)

    return (
        <div className="grid grid-cols-2 gap-2">
            {
            props.businesses ? props.businesses.map(element => {
                return (
                    <BusinessCard business={element} />
                )
                
            }) : <h2> No Businesses</h2>
            }
        </div>
        
    )
}

export default BusinessCards;