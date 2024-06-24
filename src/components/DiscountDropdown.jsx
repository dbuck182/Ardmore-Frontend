import React, { useEffect, useState } from "react";


const DiscountDropdown = (props) => {
    const [deals, setDeals] = useState()

    const fethDiscounts = async (id) => {
        try {
            const data = await fetch(`http://localhost:8080/api/discount/business/${id}`)
            const dealData = await data.json()
            if (dealData){
                setDeals(dealData);
            }
        } catch (error) {
            console.error(error)
        }
        
    }
    useEffect(() => {

        fethDiscounts(props.id)
    }, [])
    return (
        <div>
            <h3>
                Here are the deals
            </h3>
            {
                deals ? deals.map(element => {
                    return (
                        <h3>{element.description}</h3>
                    )
                }) : <h2>No deals yet.</h2>
            }
        </div>
    )
}

export default DiscountDropdown;