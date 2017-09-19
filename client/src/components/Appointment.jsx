import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Redirect } from 'react-router';
import {Link} from 'react-router-dom';
import * as Datetime from 'react-datetime';

class Appointment extends Component{
    constructor(){
        super();
        this.state = {
            appointmentData: null,
            appointmentDataLoaded: false,
            appt_id: undefined,
            redirect: false,
            currentPage: 'appointments',
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
        }else {
            this.setState({
                redirect: true,
            })
        }
    }

    handleEdit = (e) =>{
        e.preventDefault();
        axios.put(`/appointments/${this.state.appt_id}`,
        {
            service: this.props.service,
            appt_time: this.props.appt_time,
            hairstylist: this.props.hairstylist
        })
        .then(res=>{
            console.log(res)
            this.setState({
                redirect: true,
                currentPage: 'appointments',
            })
        })
        .catch(res=>(console.log(res)))
    }

    handleDelete = () => {
        console.log('delete')
        axios.delete(`/appointments/${this.state.appt_id}`)
        this.setState({
            currentPage: 'appointments',
            redirect: true,
        })
    }
    showAppointment(){
        const {appointmentData} = this.state;
        return(
            <div>
                <div className="container">
                    <h1 className="center-align">Edit Appointment</h1>
                        <div className="row">
                            <div className="col s6 offset-s4">
                                <h2>{this.state.appointmentData.service}</h2>
                                <h2>{moment(this.state.appointmentData.appt_time).format('MMMM Do YYYY, h:mm:ss a')}</h2>
                                <h2>{this.state.appointmentData.hairstylist}</h2>
                                <div className="appointment-buttons">
                                    <button onClick={this.handleDelete}>Delete</button>
                                </div>
                            </div>
                        </div>

                    <div className="row">
                        <form onSubmit={this.handleEdit} className="col s12">
                            <div className="row valign-wrapper">
                                <div className="input-field col s6 offset-s3 valign">
                                    <input
                                        type="text"
                                        name="service"
                                        placeholder={appointmentData.service}
                                        value={this.state.appointmentData.service}
                                        onChange={this.props.handleInputChange}
                                    />
                                </div>
                            </div>
                            <select className="browser-default" name="hairstylist" value={this.props.hairstylist} onChange={this.props.handleInputChange}>
                                <option value="alexa">Alexa</option>
                                <option value="oty">Oty</option>
                                <option value="gloria">Gloria</option>
                            </select>
                            <Datetime input={false} open={true} inputProps={this.props.inputProps} value={this.props.appt_time} onChange={this.props.setApptTime}/>

                            <div className="center-align">
                                <button type="submit" value="Save Edit">Save Edit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    render(){
        return (
            <div className="appointment-single">
                {this.state.redirect ? (<Redirect to={`/${this.state.currentPage}`}/>) : null} {/*handles the redirects */}
                {(this.state.appointmentDataLoaded) ? this.showAppointment() : <p>...Loading</p>}
            </div>
        )
    }
}

export default Appointment;