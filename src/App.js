import React, { Component } from 'react';
import './App.css';
import Blue from './components/Blue.js/Blue';
import Red from './components/Red.js/Red';
import Green from './components/Green.js/Green';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Green />
       <Red />
       <Blue />
      </div>
    );
  }
}

export default App;
