import React from 'react';
import {Link} from 'react-router-dom';

import AppointmentForm from './Appointment_form';

const Appointment = () => {
    return (
        <div className="appointment-container">
            <h1>These are the appointments</h1>
            <AppointmentForm />
        </div>
    )
}

export default Appointment;