import React, {image} from 'react';
import BlackSquirrelDiscount from '../assets/BlackSquirrelDiscount.png';
import BusinessList from './BusinessList';

const Homepage = () => {
    return (
        <div className="space-y-10">
            <div className='flex flex-row grid content-items-center justify-items-center'>
                <div className=''>
                    <h1 className="text-4xl font-bold">
                        Black Squirrel discount
                    </h1>
                </div>
                <img className='w-1/2' src={BlackSquirrelDiscount} alt="Black Squirrel Discount Logo"></img>
            </div>
            
            <BusinessList />
        </div>
    )
}

export default Homepage;