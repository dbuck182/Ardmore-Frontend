import React from "react"
import { useState } from "react";
import DiscountDropdown from "./DiscountDropdown";
const BusinessCard = (props) => {
    const [shown, setShown] = useState(false);
    console.log(props.business.id)
    console.log("here is the id")
    const toggleShown = () => {
        setShown(prevShown => !prevShown)
    }
    return (
        <div>
        <div onClick={toggleShown}className="border border-slate-300 hover:border-slate-400 text-base">
            <h2 className="text-slate-900 ">{props.business.name}</h2>
            <h3 className="text-slate-800">{props.business.address}</h3>
        </div>
        { 
                shown ? <DiscountDropdown id={props.business.id}/> : <></>
            }
        </div>

        
    )
}

export default BusinessCard;