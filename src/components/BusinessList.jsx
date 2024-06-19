import React, { useEffect, useState } from 'react';
import BusinessCards from './BusinessCards';

const BusinessList = () => {

    // type Business = {
    //     id: Number,
    //     type: Number,
    //     address: String,
    //     name: String
    // }
    const [businesses, setBusinesses] = useState()

    const getBusinesses = async () => {
        try {
            const businessData = await fetch("http://localhost:8080/api/business/businesses")
            const data = await businessData.json()
            setBusinesses(data)
            console.log(businesses)
        } catch (error) {
            console.error(error)
        }
    }


    useEffect(() => {

        getBusinesses();
    }
    ,[])

    return (
        <div className="space-y-10">
            <h2 className='font-bold text-2xl'>
            Participating Businesses
            </h2>
            <BusinessCards businesses={businesses} />
        </div>
        
    )
}

export default BusinessList;