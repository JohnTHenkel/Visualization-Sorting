import React, { Component } from 'react';
import Graph  from './components/Graph/Graph.jsx'
import RandomizeButton from './components/RandomizeButton/RandomizeButton.jsx'
import SortButton from './components/SortButton/SortButton.jsx'
import SpeedSlider from './components/SpeedSlider/SpeedSlider.jsx'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SizeSlider from './components/SizeSlider/SizeSlider.jsx';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="btn-group">
          <RandomizeButton/>
          <SortButton/>
        </div>
        <div className="btn-group">
          <SpeedSlider/>
          <SizeSlider/>
        </div>
        <Graph/>
      </div>
    );
  }
}

export default App;
