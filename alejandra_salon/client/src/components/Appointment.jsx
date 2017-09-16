import React from 'react';

import moment from 'moment';

const Appointment = (props) => {
    return (
        <div className="appointment-container">
            <h1>{props.appointment.service}</h1>
            <h1>{moment(props.appointment.appt_time).format('MMMM Do YYYY, h:mm:ss a')}</h1>
            <h1>{props.appointment.hairstylist}</h1>
        </div>
    )
}

export default Appointment;