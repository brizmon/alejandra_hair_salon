import React from 'react';
import { Redirect } from 'react-router';
import {Link} from 'react-router-dom';
import moment from 'moment';
import * as Datetime from 'react-datetime';

const AppointmentForm = props => {
    return(
        <div>
            <div className="container">
                <div className="row">
                    <form onSubmit={props.handleApptSubmit} className="col s12">
                        <div className="row valign-wrapper">
                            <div className="input-field col s6 offset-s3 valign">
                                <input
                                    type="text"
                                    name="service"
                                    placeholder="Service"
                                    value={props.service}
                                    onChange={props.handleInputChange}
                                />
                            </div>
                        </div>
                        {/* <input 
                            type="text"
                            name="appt_time"
                            placeholder="Date and Time"
                            value={props.appt_time}
                            onChange={props.handleInputChange}
                        /> */}

                        <Datetime input={false} open={true} inputProps={props.inputProps} value={props.appt_time} onChange={props.setApptTime}/>
                            
                                <select className="pick-hairstylist" name="hairstylist" value={props.hairstylist} onChange={props.handleInputChange}>
                                    <option value="alexa">Alexa</option>
                                    <option value="oty">Oty</option>
                                    <option value="gloria">Gloria</option>
                                </select>

                            <div className="input-field col s12 m6">
                                <select className="icons">
                                <option value="" disabled selected>Choose your option</option>
                                <option value="" data-icon="../img/alexa.jpg" className="left circle">example 1</option>
                                <option value="" data-icon="../img/alexa.jpg" className="left circle">example 2</option>
                                <option value="" data-icon="../img/alexa.jpg" className="left circle">example 3</option>
                                </select>
                                <label>Images in select</label>
                            </div>
                        
                        <input type="submit" value="Book" />
                    </form>
                    {(props.shouldFireRedirect) ? <Redirect to ="/" />: ''}
                </div>
            </div>
        </div>
    )
}

export default AppointmentForm;