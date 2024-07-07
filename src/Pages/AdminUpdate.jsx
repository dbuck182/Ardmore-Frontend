import React from "react";
import NavBar from "../components/NavBar";
import {useState} from 'react';


const AdminUpdate = () => {

    const [formData, setFormData] = useState({name: '',address: '' ,website: '', type: ''})
    const handleSubmit = async (event) => {
        
        event.preventDefault()
        console.log(formData)
        
        try {
            const data = await fetch("http://localhost:8080/api/business",{method: 'POST',
                                body: JSON.stringify(formData),
                                headers: {
                                    "Content-type": "application/json"
                                }})
            const newData = await data.json() 
            console.log(newData)            
        } catch (error) {
            console.error(error)
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }

    return (
        <div className="relative">
            <NavBar/>
            <div className="flex flex-col absolute items-center mt-20">
                <form onSubmit={handleSubmit} className="space-y-5" id="updateForm">
                    <label id="Bus-Name">Business Name</label>
                        <input className="bg-white border" name="name" type="text" value={formData.BusName} onChange={handleChange}></input>
                    <label id="address">Address</label>
                        <input className="bg-white border" name="address"type="text" value={formData.address} onChange={handleChange}></input>
                    <label id="website">Website</label>
                        <input className="bg-white border" type="text" name="website" value={formData.website} onChange={handleChange}></input>
                    <select className="bg-white border" value={formData.type} name="type" onChange={handleChange}>
                        <option>Select an Option</option>
                        <option value="RESTAURANT">Restaurant</option>
                        <option value="BAR">Bar</option>
                        <option value="DESSERT">Dessert</option>
                    </select>
                    <button type="submit">Submit</button>
                </form>
            </div>
            
        </div>
        
    )
}

export default AdminUpdate;