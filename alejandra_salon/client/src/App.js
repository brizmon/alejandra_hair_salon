import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './react-date-time.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router';
import moment from 'moment';

import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import AppointmentForm from './components/Appointment_form';
import Appointment from './components/Appointment';
import AppointmentList from './components/Appointment_list';



class App extends Component {
  constructor(){
    super();
    this.state = {
      shouldFireRedirect: false,
      service: '',
      appt_time: '',
      hairstylist: 'oty',
      appt_id: undefined,
    };
  };

  handleInputChange = (e) => {
    console.log("it works");
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });

    console.log(this.state.service);
    console.log(this.state.appt_time);
    console.log(this.state.hairstylist);
  };

  inputProps = () => {
    let inputProps = {
      name: 'appt_time'
    }
  }

  setApptTime = (e) => {
    console.log(e);
    let name = 'appt_time';
    let obj = {};
    if(obj[name] = e.toDate()) {
      // this.onUserInput(obj);
      this.setState({
        appt_time: obj.appt_time
      })
    }
  }

  handleApptSubmit = (e) => {
    e.preventDefault();
    console.log("in axios call")
    axios('/appointments', {
      method: 'POST',
      data: {
        appointment: {
          service: this.state.service,
          appt_time: this.state.appt_time,
          hairstylist: this.state.hairstylist
        }
      }
    }).then(res => {
      console.log("in axios response")
      this.setState({
        shouldFireRedirect: true,
      });
    }).catch(err => {
      console.log(err);
    });
  }
  
  grabApptId=(id)=>{
    console.log(id)
    this.setState({
      appt_id: id,
      shouldFireRedirect: true,
    })
    this.resetFireRedirect()
  }

  resetFireRedirect = () => {
    if(this.state.shouldFireRedirect) {
      this.setState({
        shouldFireRedirect: false,
      })
    }
  }








  render() {
    return (
      <Router>
        <div className="App">
          <div className="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
            exact
            path="/book"
            render={ () => 
                <AppointmentForm
                  service={this.state.service}
                  appt_time={this.state.appt_time}
                  hairstylist={this.state.hairstylist}
                  handleInputChange={this.handleInputChange}
                  setApptTime={this.setApptTime}
                  handleApptSubmit={this.handleApptSubmit}
                  shouldFireRedirect={this.state.shouldFireRedirect}
            />} />
            <Route
            exact
            path="/appointments"
            render={ () => 
                <AppointmentList
                  grabApptId={this.grabApptId}
                  appt_id={this.state.appt_id}
                  shouldFireRedirect={this.state.shouldFireRedirect}
            />} />
            <Route exact path="/about" component={About} />
            {/* <Route exact path="/appointments" component={AppointmentList} /> */}
            <Route
              exact 
              path="/appointments/:id"
              render={ () =>
              <Appointment
                appt_id={this.state.appt_id}
                handleDelete={this.handleDelete}
                shouldFireRedirect={this.state.shouldFireRedirect}
              />}/>
          </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
