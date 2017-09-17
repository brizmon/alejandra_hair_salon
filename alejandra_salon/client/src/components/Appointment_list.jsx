import React, { Component } from 'react';
import Appointment from './Appointment';
import { Redirect } from 'react-router';
import axios from 'axios';
import moment from 'moment';

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

    grabApptId=(id)=>{
        console.log(id)
        this.props.grabApptId(id)
    }

    handleDelete = (id) => {
        console.log('delete')
        axios.delete(`/appointments/${id}`)
    }
    showAppointment() {
        return this.state.appointmentData.map((appointment, i) => {
            return (
                <div className="appointment" key={i}>
                    <h1>{appointment.service}</h1>
                    <h1>{moment(appointment.appt_time).format('MMMM Do YYYY, h:mm:ss a')}</h1>
                    <h1>{appointment.hairstylist}</h1>
                    <div className="appointment-buttons">
                        {/* <button>Edit</button> */}
                       <button onClick={()=>this.handleDelete(appointment.id)}>Delete</button>
                       <button onClick={()=>this.grabApptId(appointment.id)}>View</button>
                    </div>
                </div>
            )
        })
    }
    
    render(){
        return (
            <div className="appointment-list">
            {(this.props.shouldFireRedirect) ? <Redirect to={`/appointments/${this.props.appt_id}`} />: ''}
                {(this.state.appointmentDataLoaded) ? this.showAppointment() : <p>...Loading</p>}
            </div>
        )
    }
}

export default AppointmentList;