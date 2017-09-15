import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Redirect } from 'react-router';

import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import AppointmentForm from './components/Appointment_form';

import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      shouldFireRedirect: false,
      service: '',
      appt_time: '',
      hairstylist: 'oty'
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


  handleChange = (e) => {
    this.setState({
      hairstylist: e.target.value
    });
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
                  handleChange={this.handleChange}
                  handleApptSubmit={this.handleApptSubmit}
                  shouldFireRedirect={this.state.shouldFireRedirect}
            />} />
            <Route exact path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
