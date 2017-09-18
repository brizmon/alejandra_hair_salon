import React, {Component} from 'react';
import { Redirect } from 'react-router';
import {Link} from 'react-router-dom';
import moment from 'moment';
import * as Datetime from 'react-datetime';

class AppointmentForm extends Component {

    render(){
    return(
        <div>
            <div className="container">
                <div className="row">
                    <form onSubmit={this.props.handleApptSubmit} className="col s12">
                        <div className="row valign-wrapper">
                            <div className="input-field col s6 offset-s3 valign">
                                <input
                                    type="text"
                                    name="service"
                                    placeholder="Service"
                                    value={this.props.service}
                                    onChange={this.props.handleInputChange}
                                />
                            </div>
                        </div>
                        {/* <input 
                            type="text"
                            name="appt_time"
                            placeholder="Date and Time"
                            value={this.props.appt_time}
                            onChange={this.props.handleInputChange}
                        /> */}

                                <select className="browser-default" name="hairstylist" value={this.props.hairstylist} onChange={this.props.handleInputChange}>
                                    <option value="Choose hairstylist" disabled >Choose hairstylist</option>
                                    <option value="alexa">Alexa</option>
                                    <option value="oty">Oty</option>
                                    <option value="gloria">Gloria</option>
                                </select>

                        <Datetime input={false} open={true} inputProps={this.props.inputProps} value={this.props.appt_time} onChange={this.props.setApptTime}/>

                                
                                    
                               

                            {/* <div className="input-field col s12 m6">
                                <select className="icons">
                                    <option value="" disabled selected>Choose your option</option>
                                    <option value="" data-icon="../img/alexa.jpg" className="left circle">example 1</option>
                                    <option value="" data-icon="../img/alexa.jpg" className="left circle">example 2</option>
                                    <option value="" data-icon="../img/alexa.jpg" className="left circle">example 3</option>
                                </select>
                                <label>Images in select</label>
                            </div> */}
                        <div className="center-align">
                            <button type="submit" value="Book">Book</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )}
}

export default AppointmentForm;