import React from 'react';
import {Link} from 'react-router-dom';

const HoursLocation = () => {
    return (
        <div>
            <div className="container">
                <h1 className="center-align">Hours & Location</h1>
                <div className="row">
                    <div className="col s12 m12 l7 push-l5">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.8187114035672!2d-73.88898312601597!3d40.85390387875568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f47d8b41178d%3A0xd313211e0aaa6e73!2s2325+Arthur+Ave%2C+Bronx%2C+NY+10458!5e0!3m2!1sen!2sus!4v1505757677093" width="500" height="400" frameBorder="0" style={{border: 0}} allowFullScreen></iframe>
                    </div>
                    <div className="col s12 m12 l5 pull-l7 justify">
                        <h1>Alejandra Unisex</h1>
                        <h3>2325 Arthur Ave.</h3>
                        <h3>Bronx, NY 10458</h3>
                        <h3>347-656-5515</h3>
                        <h3>hi@alejandraunisex.com</h3>
                    </div>
                    <div className="col s12 m6 l6 offset-m6">
                        <h1>HOURS</h1>
                        <h3>MONDAY - 9am – 9pm</h3>
                        <h3>TUESDAY - 9am – 9pm</h3>
                        <h3>WEDNESDAY - 9am – 9pm</h3>
                        <h3>THURSDAY - 9am – 9pm</h3>
                        <h3>FRIDAY - 9am – 9pm</h3>
                        <h3>SATURDAY - 9am – 9pm</h3>
                        <h3>SUNDAY - 11am – 7pm</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HoursLocation;