import React, { Component } from 'react';

import './SpeedSlider.css';

class SpeedSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 150
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
    <div className="slidercontainer">
      <div>
        Speed
      </div>
      <div>
        <input
        type="range" 
        min="0" max="200"
        value={this.state.value}
        onChange={(event) => this.handleChange(event)}/>
      </div>
    </div>
    )
    }
  }

export default SpeedSlider;