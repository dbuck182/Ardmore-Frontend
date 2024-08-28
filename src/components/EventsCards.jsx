import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
const EventsCards = () => {
  const [events, setEvents] = useState()
  const [eventCards, setEventCards] = useState()
  const grabEvents = async () => {
    try {
      const events = await fetch("http://ec2-44-201-79-47.compute-1.amazonaws.com:/api/event/events")
      const data = await events.json()
      console.log(data)
      setEvents(data)
    } catch (error) {
      console.log(error)
    }
  }

  const Cards = () => {
    console.log(events)

    if (events != null) {
      events.forEach()
    }
      
  }

  useEffect(() => {
    grabEvents();
  }, [])

  return (
    <div>
        {events ? events.map(event => (<EventCard event={event}/>)): <></>}
    </div>
  )
}

export default EventsCards;