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
            redirect: false,
            currentPage: 'appointments'
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
        this.setState({
            redirect: true,
            currentPage: `appointments/${id}`
        })
    }

    handleDelete = (id) => {
        console.log('delete')
        axios.delete(`/appointments/${id}`)
        this.setState({
            currentPage: 'book',
            redirect: true,
        })
    }
    showAppointment() {
            return this.state.appointmentData.map((appointment, i) => {
                return (
                    <div>
                        
                        <div className="container" key={i}>
                            <h1>{appointment.service}</h1>
                            <h1>{moment(appointment.appt_time).format('MMMM Do YYYY, h:mm:ss a')}</h1>
                            <h1>{appointment.hairstylist}</h1>
                            <div className="appointment-buttons">
                                {/* <button>Edit</button> */}
                            <button onClick={()=>this.handleDelete(appointment.id)}>Delete</button>
                            <button onClick={()=>this.grabApptId(appointment.id)}>View</button>
                            </div>
                        </div>
                    </div>
                )
            })
        
        
    }
    
    render(){
        return (
            <div className="appointment-list">
                {this.state.redirect ? (<Redirect to={`/${this.state.currentPage}`}/>) : null} {/*handles the redirects */}
                {(this.state.appointmentDataLoaded) ? this.showAppointment() : <p>...Loading</p>}
            </div>
        )
    }
}

export default AppointmentList;