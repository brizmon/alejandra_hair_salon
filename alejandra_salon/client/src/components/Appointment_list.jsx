import React, { Component } from 'react';
import Appointment from './Appointment';

import axios from 'axios';

class AppointmentList extends Component {
    constructor(){
        super();
        this.state = {
            appointmentData: null,
            appointmentDataLoaded: false,
        }
    }

    componentDidMount() {
        console.log("in axios call")
        axios('/appointments', {method: 'GET'})
          .then(res => {
              console.log(res.data.appointments);
              this.setState({
                  appointmentData: res.data.appointments,
                  appointmentDataLoaded: true,
              })
              console.log("in axios response")
          });
    }

    showAppointment() {
        return this.state.appointmentData.map(appointment => {
            return (
                <Appointment type="list" appointment={appointment} key={appointment.id} />
            )
        })
    }

    render(){
        return (
            <div className="appointment-list">
                {(this.state.appointmentDataLoaded) ? this.showAppointment() : <p>...Loading</p>}
            </div>
        )
    }
}

export default AppointmentList;