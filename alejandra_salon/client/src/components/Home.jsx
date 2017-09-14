import React from 'react';
import {Link} from 'react-router-dom';

import Appointment from './Appointment';
import AppointmentForm from './Appointment_form';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Home</h1>
            <Appointment />
        </div>
    )
}


export default Home;