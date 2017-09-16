import React, { Component } from 'react';

import axios from 'axios';
import moment from 'moment';
import { Redirect } from 'react-router';

class Appointment extends Component{
    constructor(){
        super();
        this.state = {
            appointmentData: null,
            appointmentDataLoaded: false,
            appt_id: undefined,
        }
    }

    componentDidMount() {
        console.log("in axios call")
        console.log(this.props.appt_id)
        if(this.props.appt_id !== undefined){
            let appt_id = this.props.appt_id
            axios(`/appointments/${this.props.appt_id}`, {method: 'GET'})
              .then(res => {
                  console.log(res.data.appointment);
                  this.setState({
                      appointmentData: res.data.appointment,
                      appointmentDataLoaded: true,
                      appt_id: appt_id
                  })
                  console.log("in axios response")
            });
        }else 
            null;
    }

    handleDelete = () => {
        console.log('delete')
        axios.delete(`/appointments/${this.state.appt_id}`)
    }
    showAppointment(){
        return(
            <div className="appointment-container">
                <h1>{this.state.appointmentData.service}</h1>
                <h1>{moment(this.state.appointmentData.appt_time).format('MMMM Do YYYY, h:mm:ss a')}</h1>
                <h1>{this.state.appointmentData.hairstylist}</h1>
                <div className="appointment-buttons">
                    <button>Edit</button>
                    <button onClick={this.handleDelete}>Delete</button>
                </div>
            </div>
        )
    }

    render(){
        return (
            <div className="appointment-single">
                {(this.state.appointmentDataLoaded) ? this.showAppointment() : <p>...Loading</p>}
            </div>
        )
    }
}

export default Appointment;