import React, { Component } from 'react';
import Button  from 'react-bootstrap/Button';
import { updateArray } from '../../redux/actions.js';
import { connect } from 'react-redux';

import './RandomizeButton.css';

class RandomizeButton extends Component {

  componentDidMount() {
    const { createArray, size } = this.props;
    createArray(size);
    window.addEventListener("resize", this.updateDimensions);
  }

  render() {
    const { createArray, isRunning, size } = this.props;
    return (
      <div>
        {isRunning ? 
          <Button
            variant="secondary"
            className="RandomizeButton"
            disabled>
            Randomize Array
          </Button> :
          <Button
            variant="primary"
            className="RandomizeButton"
            onClick={() => {createArray(size)}}>
            Randomize Array
          </Button>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const array = state.updateArray.array
  const isRunning = state.isRunning.isRunning
  const size = state.size.size
  return { array, isRunning, size }
}

const mapDispatchToProps = () => dispatch => ({
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

export default connect(mapStateToProps, mapDispatchToProps)(RandomizeButton);
