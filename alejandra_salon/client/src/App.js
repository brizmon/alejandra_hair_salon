import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Redirect } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Salon</h1>
      </div>
    );
  }
}

export default App;
