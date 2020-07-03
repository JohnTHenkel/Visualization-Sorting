import React, { Component } from 'react';
import Button  from 'react-bootstrap/Button';
import { updateArray } from '../../redux/actions.js';
import { connect } from 'react-redux';

import './RandomizeButton.css';

class RandomizeButton extends Component {

  componentDidMount() {
    const { createArray } = this.props;
    createArray(25);
    window.addEventListener("resize", this.updateDimensions);
  }

  render() {
    const { createArray, isRunning } = this.props;
    return (
      <div>
        <Button
        variant={isRunning ? "secondary" : "primary"}
        className="RandomizeButton"
        onClick={isRunning ? () => {} : () => {createArray(25)}}>
          Randomize Array
        </Button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const array = state.updateArray.array
  const isRunning = state.isRunning.isRunning
  return { array, isRunning }
}

const mapDispatchToProps = () => dispatch => ({
  createArray: (length) => {
    const MIN = 8
    const MAX = 256
    const array = Array.from(Array(length)).map(
      x =>  Math.floor(Math.random() * (MAX - MIN)) + MIN
    )
    dispatch(updateArray(array));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RandomizeButton);
