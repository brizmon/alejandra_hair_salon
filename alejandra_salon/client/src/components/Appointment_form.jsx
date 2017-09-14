import React from 'react';
import { Redirect } from 'react-router';

const AppointmentForm = props => {
    return(
        <div className="appt_form">
            <form onSubmit={props.handleApptSubmit}>
                <input
                    type="text"
                    name="service"
                    placeholder="Service"
                    value={props.service}
                    onChange={props.handleInputChange}
                />
                <input 
                    type="text"
                    name="appt_time"
                    placeholder="Date and Time"
                    value={props.appt_time}
                    onChange={props.handleInputChange}
                />
                <select>
                    <option value="Alexa">Alexa</option>
                    <option value="Oty">Oty</option>
                    <option value="Gloria">Gloria</option>
                </select>
                <input type="submit" value="Book" />
            </form>
            {(props.shouldFireRedirect) ? <Redirect to ="/" />: ''}
        </div>
    )
}

export default AppointmentForm;