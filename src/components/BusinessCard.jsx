import React from "react"

const BusinessCard = (props) => {
    return (
        <div className="border border-slate-300 hover:border-slate-400 text-base">
            <h2 className="text-slate-900 ">{props.business.name}</h2>
            <h3 className="text-slate-800">{props.business.address}</h3>
        </div>
        
    )
}

export default BusinessCard;