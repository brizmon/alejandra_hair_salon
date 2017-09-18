import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';

const Services = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <h1 className="center-align">Services</h1>
                <div className="row">
                    <div className="col s4">
                        <div className="card-panel black"><span className="white-text services-hl">HIGHLIGHTS, BALAYAGE OMBRE/SOMBRE</span><br></br><hr></hr><span className="white-text">Our expert Colorists can create classic to edgy, whatever your style.  We offer beautiful color using the latest techniques in Highlighting, Balayage, Ombre/Sombre,  Hair Painting. </span>
                        </div>
                    </div>
                    <div className="col s4">
                        <div className="card-panel black"><span className="white-text services-hl">HIGHLIGHTS, BALAYAGE OMBRE/SOMBRE</span><br></br><hr></hr><span className="white-text">Our Stylists use the cutting and styling technique best for your hair type - whether it's with scissors or razors - we know how to achieve your best look. Special event or want an excuse to treat yourself?  Our styling and blow outs are unforgettable.</span>
                        </div>
                    </div>
                    <div className="col s4">
                        <div className="card-panel black"><span className="white-text services-hl">HIGHLIGHTS, BALAYAGE OMBRE/SOMBRE</span><br></br><hr></hr><span className="white-text">Look no further.  We use the safest and most advanced technology for our Keratin Complex Smoothing Treatments.</span>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}


export default Services;