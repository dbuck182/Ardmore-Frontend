import React, { useEffect } from "react"
import { useState } from "react";
import DiscountDropdown from "./DiscountDropdown";
import BlackSquirrelDiscount from '../assets/BlackSquirrelDiscount.png'
const BusinessCard = (props) => {
    const [shown, setShown] = useState(false);
    const [image, setImage] = useState(BlackSquirrelDiscount)
    console.log(props.business.id)
    console.log("here is the id")
    const toggleShown = () => {
        setShown(prevShown => !prevShown)
    }
    useEffect(() => {
        if (props.business.image != null){
            setImage(props.business.image)
        }
    }, [])
    
    return (
        <div>
        <div onClick={toggleShown}className="border border-slate-300 hover:border-slate-400 text-base flex flex-col grid justify-items-center">
            <img className='flex-1 w-64 h-64' src={image}></img>
            <h2 className="text-slate-900 flex-1">{props.business.name}</h2>
            <h3 className="text-slate-800">{props.business.address}</h3>
        </div>
        { 
                shown ? <DiscountDropdown id={props.business.id}/> : <></>
            }
        </div>

        
    )
}

export default BusinessCard;