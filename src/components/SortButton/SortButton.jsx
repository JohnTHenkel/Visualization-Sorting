import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { updateArray, isRunning, currentComparison } from '../../redux/actions.js';
import { connect } from 'react-redux';

import './SortButton.css';

class SortButton extends Component {

  render() {
    const { sortArray, array, isRunning, speed } = this.props;
    return (
      <div>
        {isRunning ? 
          <Button
            variant="secondary"
            className="SortButton"
            disabled>
            Sort Array
          </Button> :
          <Button
            variant="primary"
            className="SortButton"
            onClick={() => {sortArray(array, speed)}}>
            Sort Array
          </Button>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const array = state.updateArray.array;
  const isRunning = state.isRunning.isRunning;
  const speed = state.speed.speed;
  return { array, isRunning, speed }
}

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const mapDispatchToProps = () => dispatch => ({
  sortArray: (array, speed) => {
    async function doSort() {
      dispatch(isRunning(true))
      for (let i = 0; i < array.length; i++){
        for (let j = 0; j <array.length - i - 1; j++ )
        {
          if (array[j] > array[j+1])
          {
            swap(array,j, j+1)
            const newArray=Array.from(array);
            dispatch(updateArray(newArray));
          }
          dispatch(currentComparison([j, j+1]))
          await sleep(speed);
        }
      }
    dispatch(currentComparison([]))
    dispatch(isRunning(false))
    }
    doSort()
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SortButton);
