import React from 'react';
import {Link} from 'react-router-dom';



const Home = () => {
    return (
        <div>
            <div className="parallax-container">
                <div className="parallax"><img src="../img/2.jpg"/></div>
            </div>
            <div className="section black">
                <div className="row container">
                <div className="col s12 m6 l6">
                    <div className="card-panel black"><span className="white-text services-hl">ALEJANDRA UNISEX</span><br></br><span className="white-text">Alejandra Unisex was founded in 2015 in little Italy in the Bronx by Alejandra Espinoza. Our Bronx location, quickly became a destination for New Yorkers.</span>
                    </div>
                </div>
                <div className="col s12 m6 l6">
                    <div className="card-panel black"><span className="white-text services-hl">STYLISTS</span><br></br><span className="white-text">Our expert Colorists can create classic to edgy, whatever your style.  We offer beautiful color using the latest techniques in Highlighting, Balayage, Ombre/Sombre,  Hair Painting. </span>
                    </div>
                </div>
                </div>
            </div>
            <div className="parallax-container">
                <div className="parallax"><img src="../img/1.jpg"/></div>
            </div>
        </div>
    )
}


export default Home;