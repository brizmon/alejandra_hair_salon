import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
    return (
        <div>
            <ul id="dropdown1" className="dropdown-content">
                <li><Link Link to="/book">Book</Link></li>
                <li><Link Link to="/appointments">Appointments</Link></li>
            </ul>
            <ul id="dropdown2" className="dropdown-content">
                <li><Link Link to="/hours-location">Hours & Location</Link></li>
                <li><Link Link to="/team">Team</Link></li>
            </ul>
            <nav>
                <div className="nav-wrapper black">
                    <a href="/"><img src="../img/alejandra-logo.svg" alt="Alejandra Unisex" className="logo"></img></a>
                    <a href="" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        {/* <li><Link Link to="">Appointments</Link></li> */}
                        <li><a className="dropdown-button" href="" data-activates="dropdown1">Appointments</a></li>
                        <li><a className="dropdown-button" href="" data-activates="dropdown2">About</a></li>
                        <li><Link Link to="/services">Services</Link></li>
                        <li><a href="https://www.instagram.com/alejandraunisex/" target="_blank"><i className="fa fa-instagram fa-lg" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.facebook.com/alejandrabeautysalon" target="_blank"><i className="fa fa-facebook fa-lg" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.facebook.com/alejandrabeautysalon" target="_blank"><i className="fa fa-pinterest fa-lg" aria-hidden="true"></i></a></li>
                    </ul>
                    <ul className="side-nav" id="mobile-demo">
                        <li><a href="sass.html">Appointments</a></li>
                        <li><a href="badges.html">About</a></li>
                        <li><a href="collapsible.html">Services</a></li>
                        <li><a href="sass.html"><i className="fa fa-instagram fa-lg" aria-hidden="true"></i></a></li>
                        <li><a href="sass.html"><i className="fa fa-facebook fa-lg" aria-hidden="true"></i></a></li>
                        <li><a href="sass.html"><i className="fa fa-pinterest fa-lg" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;


