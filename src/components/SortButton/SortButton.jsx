import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { updateArray, isRunning, currentComparison } from '../../redux/actions.js';
import { connect } from 'react-redux';

import './SortButton.css';

class SortButton extends Component {

  render() {
    const { sortArray, array, isRunning } = this.props;
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
            onClick={() => {sortArray(array)}}>
            Sort Array
          </Button>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const array = state.updateArray.array
  const isRunning = state.isRunning.isRunning
  return { array, isRunning }
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
  sortArray: (array) => {
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
          await sleep(30);
        }
      }
    dispatch(currentComparison([]))
    dispatch(isRunning(false))
    }
    doSort()
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SortButton);
