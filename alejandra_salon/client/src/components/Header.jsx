import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className='navbar-item' Link to="/about">LOGO</Link>
            </div>
        </nav>
    )
}

export default Header;