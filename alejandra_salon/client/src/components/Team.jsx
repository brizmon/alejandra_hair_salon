import React from 'react';
import {Link} from 'react-router-dom';

const Team = () => {
    return (
        <div>
            <div className="container">
                <h1 className="center-align">Team</h1>
                <div className="row">
                    <div className="col s12 m4 l4">
                        <div className="card-panel black"><span className="white-text services-hl">ALEJANDRA</span><br></br><hr></hr><span className="white-text"></span>
                        </div>
                    </div>
                    <div className="col s12 m4 l4">
                        <div className="card-panel black"><span className="white-text services-hl">OTY</span><br></br><hr></hr><span className="white-text"></span>
                        </div>
                    </div>
                    <div className="col s12 m4 l4">
                        <div className="card-panel black"><span className="white-text services-hl">GLORIA</span><br></br><hr></hr><span className="white-text"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Team;