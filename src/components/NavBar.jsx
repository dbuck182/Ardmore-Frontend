import React from "react"
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="bg-white shadow-lg top-0 left-0 right-0 z-20 py-4 min-w-full px-2">
            <div className="flex flex-row items-center justify-around">
                <h2 className="sm:text-3xl">
                    Black Squirrel Discount
                </h2>
                <ul className="flex flex-row">
                    <li className={classes.listclass}>
                        <Link to={'/'} className="text-Haverford-red sm:text-2xl">Home</Link>
                    </li>
                    <li className={classes.listclass}>
                        <Link to={'/login'} className="text-Haverford-red sm:text-2xl">Admin Login</Link>
                    </li>
                </ul>
            </div>
            
        </nav>
        
    )
}

const classes = {
    listclass: "border border-slate-300 hover:border-slate-400 p-1 sm:p-2"
}

export default NavBar;
