import React, {image} from 'react';
import BlackSquirrelDiscount from '../assets/BlackSquirrelDiscount.png';
import BusinessList from '../components/BusinessList';
import Ardmore from '../assets/Ardmore.jpeg'
import Upcoming from '../components/Upcoming';
import NavBar from '../components/NavBar';
const Homepage = () => {
    return (
        <div className='space-y-10'>

            <NavBar />
        
        <div className="space-y-10">
            <div className='flex flex-row items-center justify-items-center static'>
                <img className='z-0 blur-sm w-screen'src={Ardmore}></img>
                <div className='z-10 absolute flex flex-row justify-center content-center justify-items-center items-center'>
                    <h2 className="text-3xl font-bold w-1/2 text-white bg-Haverford-red">
                        Ardmore is booming with <br />new restaurants and shops <br/>
                    </h2>
                    <img className='w-1/2' src={BlackSquirrelDiscount} alt="Black Squirrel Discount Logo"></img>
                </div>
                
            </div>
            <Upcoming />
            <BusinessList />
        </div>
        </div>
    )
}

export default Homepage;