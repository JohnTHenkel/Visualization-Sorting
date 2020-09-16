import React, { Component } from 'react';
import { connect } from 'react-redux';
import { size, updateArray  } from '../../redux/actions.js';
import './SizeSlider.css';

class SizeSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 5,
      max: 100,
      value: 25,
    }
  }

  handleChange(event) {
    const { setSize, createArray } = this.props
    setSize(event.target.value)
    createArray(event.target.value)
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
    setSize: (newSize) => {
      dispatch(size(newSize))
    },
    createArray: (length) => {
      const MIN = 8
      const MAX = 256
      const array = Array.from(Array(length))
      for (var i = 0; i<length; i++) {
        array[i]=Math.floor(Math.random() * (MAX - MIN)) + MIN;
      }
      dispatch(updateArray(array));
    }
  });

  export default connect(mapStateToProps, mapDispatchToProps)(SizeSlider);
