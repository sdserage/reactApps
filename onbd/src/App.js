import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
          <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
        <div className="box1">home</div>
        <div className="box2">profile</div>  
        <div className="box3">log in</div>  
        <div className="box4">dont log in</div>  
        </div>      

   
      </div>
    );
  }
}

export default App;
