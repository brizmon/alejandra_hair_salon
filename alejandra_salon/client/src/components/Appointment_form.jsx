import React from 'react';

const AppointmentForm = props => {
    return(
        <form className="appt_form">
            <input
              type="text"
              placeholder="Service"
              onChange={props.handleInputChange}
              />
              <input 
                type="text"
                placeholder="Date and Time"
                onChange={props.handleInputChange}
              />
              <select>
                  <option value="Alexa">Alexa</option>
                  <option value="Oty">Oty</option>
                  <option value="Gloria">Gloria</option>
              </select>
              <input type="submit" value="Log in!" />
        </form>
    )
}

export default AppointmentForm;