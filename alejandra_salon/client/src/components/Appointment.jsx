import React from 'react';


const Appointment = (props) => {
    return (
        <div className="appointment-container">
            <h1>{props.appointment.service}</h1>
            <h1>{props.appointment.appt_time}</h1>
            <h1>{props.appointment.hairstylist}</h1>
        </div>
    )
}

export default Appointment;