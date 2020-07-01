import React, { Component } from 'react';
import Graph  from './components/Graph/Graph.jsx'
import RandomizeButton from './components/RandomizeButton/RandomizeButton.jsx'
import SortButton from './components/SortButton/SortButton.jsx'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="btn-group">
          <RandomizeButton/>
          <SortButton/>
        </div>
        <Graph/>
      </div>
    );
  }
}

export default App;
