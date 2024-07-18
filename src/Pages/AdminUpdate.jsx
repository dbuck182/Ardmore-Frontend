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
            <div className="flex flex-row justify-center align-center">

            <div className="flex flex-col items-center mt-20">
                <h2 className="text-2xl">Business Form</h2>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-5 border p-5" id="updateForm">
                    <label id="Bus-Name">Business Name</label>
                        <input className="bg-white border" name="name" type="text" value={formData.BusName} onChange={handleChange}></input>
                    <label id="address">Address</label>
                        <input className="bg-white border" name="address"type="text" value={formData.address} onChange={handleChange}></input>
                    <label id="website">Website</label>
                        <input className="bg-white border" type="text" name="website" value={formData.website} onChange={handleChange}></input>
                    <select className="bg-white border" value={formData.type} name="type" onChange={handleChange}>
                        <option>Select an Option</option>
                        <option value="FOOD">Food</option>
                        <option value="RETAIL">Retail</option>
                        <option value="HEALTHBEAUTY">Health & Beauty</option>
                    </select>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="flex flex-col items-center mt-20">
                <h2 className="text-2xl">Event Form</h2>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-5 border p-5" id="EventForm">
                    <label id="Event-Name">Event Name</label>
                        <input className="bg-white border" name="name" type="text" value={formData.BusName} onChange={handleChange}></input>
                    <label id="address">Address</label>
                        <input className="bg-white border" name="address"type="text" value={formData.address} onChange={handleChange}></input>
                    <label id="website">Website</label>
                        <input className="bg-white border" type="text" name="website" value={formData.website} onChange={handleChange}></input>
                    <select className="bg-white border" value={formData.type} name="type" onChange={handleChange}>
                        <option>Select an Option</option>
                        <option value="FOOD">Food</option>
                        <option value="RETAIL">Retail</option>
                        <option value="HEALTHBEAUTY">Health & Beauty</option>
                    </select>
                    <label for="event-time">Date/Time</label>
                    <input id="event-time" type="datetime-local"></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="flex flex-col items-center mt-20">
                <h2 className="text-2xl">Discount Form</h2>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-5 border p-5" id="EventForm">
                    <label id="Event-Name">Event Name</label>
                        <input className="bg-white border" name="name" type="text" value={formData.BusName} onChange={handleChange}></input>
                    <label id="address">Address</label>
                        <input className="bg-white border" name="address"type="text" value={formData.address} onChange={handleChange}></input>
                    <label id="website">Website</label>
                        <input className="bg-white border" type="text" name="website" value={formData.website} onChange={handleChange}></input>
                    <select className="bg-white border" value={formData.type} name="type" onChange={handleChange}>
                        <option>Select an Option</option>
                        <option value="FOOD">Food</option>
                        <option value="RETAIL">Retail</option>
                        <option value="HEALTHBEAUTY">Health & Beauty</option>
                    </select>
                    <button type="submit">Submit</button>
                </form>
            </div>
            </div>
        </div>
        
    )
}

export default AdminUpdate;