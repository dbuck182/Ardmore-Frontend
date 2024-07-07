import React from "react"
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <div className="bg-white shadow-lg top-0 left-0 right-0 z-20 py-4 fixed">
            <div className="flex flex-row items-center justify-around">
                <h1 className="text-3xl">
                    Black Squirrel Discount
                </h1>
                <ul className="flex flex-row gap-4">
                    <li>
                        <Link to={'/admin'}>Admin</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                </ul>
            </div>
            
        </div>
        
    )
}

export default NavBar;
