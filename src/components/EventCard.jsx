import React, {useEffect, useState} from 'react'

const EventCard = (props) => {
    console.log(props.event)
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const setTimeDate = () => {
        if (props.event.when_at) {
            setDate(props.event.when_at.slice(0, 9))
            setTime(props.event.when_at.slice(11))
        }
    }
        useEffect(() => {
            setTimeDate();
        }, [])
        
    return (
        <div className='border border-slate-300 hover:border-slate-400 flex flex-col items-center'>
            <h3 className='text-2xl'>{props.event.title}</h3>
            <h3>at {props.event.place}</h3>
            <h3>on {date} at {time}</h3>
        </div>
    )
}

export default EventCard;