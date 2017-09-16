import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';

import Appointment from './Appointment';

const Home = () => {
    return (
        <div className="home-container">
            <Header />
            <h1>Home</h1>
        </div>
    )
}


export default Home;