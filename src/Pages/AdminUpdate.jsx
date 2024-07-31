import React from "react";
import NavBar from "../components/NavBar";
import {useState} from 'react';
import { Input } from "postcss";


const AdminUpdate = () => {

    const [formData, setFormData] = useState({name: '',address: '' ,website: '', type: ''})
    const [imageFile, setImageFile] = useState({name: '', file: null, BusinessId: null})
    const [eventForm, setEventForm] = useState({title: '', place: '', description: '', when_at: null})
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

    const handleSubmitEvent = async (event) => {
        event.preventDefault()
        console.log(eventForm)
        try {
            const data = await fetch("http://localhost:8080/api/event", {method: 'POST',
            body: JSON.stringify(eventForm),
        headers: {
            "Content-type": "application/json"
        }})
            
        } catch (error) {
            console.log(error)
        }
    }
    const handlePhotoSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append("file", imageFile.file)
        formData.append("name", imageFile.name)
        formData.append("BusinessId", parseInt(imageFile.BusinessId))
        //console.log(imageFile.file.size)
        console.log(imageFile)
        try {
            const data = await fetch("http://localhost:8080/api/photo/upload",{method: 'POST',
                               body: formData,
                               headers: {
                                "Host": "https://localhost:5173"
                               }
                                })
            const newData = await data.json() 
            console.log(newData)            
        } catch (error) {
            console.error(error)
        }
    }
    const handleNameChange = (event) => {
        const {name, value} =event.target
        setImageFile({...imageFile, [name]: value})
    }
    const handleImageChange = (event) => {
        const target = event.target.files[0]
        setImageFile({...imageFile, file: event.target.files[0]})
    }
    const handleChangeEvent = (event) => {
        const {name, value} = event.target
        setEventForm({...eventForm, [name]: value})
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
            <div className="flex flex-row justify-center align-center grid-cols-4 gap-4 content-items-center">

            <div className="flex flex-col items-center mt-20">
                <h2 className="text-2xl">Business Form</h2>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-5 border p-5" id="updateForm">
                    <label id="Bus-Name">Business Name</label>
                        <input className="bg-white border" name="name" type="text" value={formData.name} onChange={handleChange}></input>
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
                <form onSubmit={handleSubmitEvent} className="flex flex-col space-y-5 border p-5" id="EventForm">
                    <label id="Event-Name">Event title</label>
                        <input className="bg-white border" name="title" type="text" value={eventForm.title} onChange={handleChangeEvent}></input>
                    <label id="address">Address</label>
                        <input className="bg-white border" name="place"type="text" value={eventForm.place} onChange={handleChangeEvent}></input>
                    <label id="website">Description</label>
                        <input className="bg-white border" type="text" name="description" value={eventForm.description} onChange={handleChangeEvent}></input>
                    <label>Date/Time</label>
                        <input id="event-time" type="datetime-local" name="when_at" value={eventForm.when_at} className="bg-white" onChange={handleChangeEvent}></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="flex flex-col items-center mt-20">
                <h2 className="text-2xl">Discount Form</h2>
                <form onSubmit={handleSubmitEvent} className="flex flex-col space-y-5 border p-5" id="EventForm">
                    <label id="Event-Name">Event Name</label>
                        <input className="bg-white border" name="name" type="text" value={formData.BusName} onChange={handleChangeEvent}></input>
                    <label id="address">Address</label>
                        <input className="bg-white border" name="address"type="text" value={formData.address} onChange={handleChangeEvent}></input>
                    <label id="website">Website</label>
                        <input className="bg-white border" type="text" name="website" value={formData.website} onChange={handleChangeEvent}></input>
                    <select className="bg-white border" value={formData.type} name="type" onChange={handleChangeEvent}>
                        <option>Select an Option</option>
                        <option value="FOOD">Food</option>
                        <option value="RETAIL">Retail</option>
                        <option value="HEALTHBEAUTY">Health & Beauty</option>
                    </select>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="flex flex-col items-center mt-20">
            <h2 className="text-2xl">Business Image Form</h2>
                <form onSubmit={handlePhotoSubmit} className="flex flex-col space-y-5 border p-5">
                    <input type="file" name="file" onChange={handleImageChange}></input>
                    <label id="name">Name</label>
                    <input className="bg-white border"type="text" name="name" onChange={handleNameChange}></input>
                    <label id="BusinessId">Business ID</label>
                    <input className="bg-white border" type="number" name="BusinessId" onChange={handleNameChange}></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
            </div>
        </div>
        
    )
}

export default AdminUpdate;