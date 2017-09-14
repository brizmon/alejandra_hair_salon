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
      apptService: '',
      apptTime: '',
      apptHairStylist: ''
    };
  };








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
