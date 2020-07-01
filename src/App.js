import React, { Component } from 'react';
import './App.css';
import Graph  from './components/Graph/Graph.jsx'
import RandomizeButton from './components/RandomizeButton/RandomizeButton.jsx'

class App extends Component {

  render() {
    return (
      <div className="App">
        <RandomizeButton/>
        <Graph/>
      </div>
    );
  }
}

export default App;
