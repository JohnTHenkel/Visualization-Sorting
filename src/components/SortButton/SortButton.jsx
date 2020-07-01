import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { updateArray } from '../../redux/actions.js';
import { connect } from 'react-redux';

import './SortButton.css';

class SortButton extends Component {

  render() {
    const { sortArray, array } = this.props;
    return (
      <div>
        <Button
          variant="primary"
          className="SortButton"
          onClick={() => sortArray(array)}>
          Sort Array
            </Button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const array = state.updateArray.array
  return { array }
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
      for (let i = 0; i < array.length; i++){
        for (let j = 0; j <array.length - i - 1; j++ )
        {
          if (array[j] > array[j+1])
          {
            swap(array,j, j+1)
            const newArray=Array.from(array);
            dispatch(updateArray(newArray));
            await sleep(30);
          }
        }
      }
    }
    doSort()
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SortButton);
