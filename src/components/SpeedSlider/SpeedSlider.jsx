import React, { Component } from 'react';
import { connect } from 'react-redux';
import { speed } from '../../redux/actions.js';
import './SpeedSlider.css';

class SpeedSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 1,
      max: 200,
      value: 50,
    }
  }

  handleChange(event) {
    const { setSpeed } = this.props;
    const { min, max } = this.state;
    // This really is more of a delay than a speed,
    // so we have to "reverse" it in order for it
    // to make more sense in the context of the slider.
    setSpeed(max - event.target.value + min)
    this.setState({value: event.target.value});
  }

  render() {
    const { min, max, value} = this.state;
    return (
    <div className="slidercontainer">
      <div>
        Speed
      </div>
      <div>
        <input
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
    const speed = state.speed.speed
    return { speed }
  }

  const mapDispatchToProps = () => dispatch => ({
    setSpeed: (newSpeed) => {
      dispatch(speed(newSpeed))
    }
  });

  export default connect(mapStateToProps, mapDispatchToProps)(SpeedSlider);
