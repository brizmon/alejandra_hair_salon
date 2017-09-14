import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Redirect } from 'react-router';

import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';

import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      shouldFireRedirect: false,
      service: '',
      appt_time: '',
      hairStylist: ''
    };
  };

  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleApptSubmit = (e) => {
    e.preventDefault();
    axios('/appointment', {
      method: 'POST',
      data: {
        appointment: {
          service: this.state.service,
          appt_time: this.state.appt_time,
          hairstylist: this.state.hairStylist
        }
      }
    }).then(res => {
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
            <Route exact path="about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
