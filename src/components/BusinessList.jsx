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
        // console.log(import.meta.env.FETCH_BUSINESSES)
        try {
            const businessData = await fetch("http://ec2-44-201-79-47.compute-1.amazonaws.com:8080/api/business/businesses")
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