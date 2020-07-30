import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SizeSlider.css';

class SizeSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 5,
      max: 250,
      value: 25,
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    const { min, max, value} = this.state;
    const { isRunning } = this.props;
    return (
    <div className="slidercontainer">
      <div>
        Size
      </div>
      <div>
        <input
        disabled={isRunning}
        type="range" 
        min={min}
        max={max}
        value={value}
        onChange={(event) => this.handleChange(event)}/>
      </div>
    </div>
    )
    }
  }
  const mapStateToProps = state => {
    const isRunning = state.isRunning.isRunning;
    return { isRunning }
  }

  const mapDispatchToProps = () => dispatch => ({
  });

  export default connect(mapStateToProps, mapDispatchToProps)(SizeSlider);
