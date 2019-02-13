import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Header from './Components/Header.js';
import  Login from './Components/Login.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Login></Login>
      </div>
    );
  }
}

export default App;
