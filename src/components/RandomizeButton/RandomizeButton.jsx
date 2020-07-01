import React, { Component } from 'react';
import { updateArray } from '../../redux/actions.js';
import { connect } from 'react-redux'

class RandomizeButton extends Component {

  componentDidMount() {
    const { createArray } = this.props;
    createArray(25);
    window.addEventListener("resize", this.updateDimensions);
  }

  render() {
    const { createArray } = this.props;
    return (
      <div>
        <button onClick={() => createArray(25)}>Randomize Array</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const array = state.updateArray.array
  return { array }
}

const mapDispatchToProps = () => dispatch => ({
  createArray: (length) => {
    const MIN = 8
    const MAX = 256
    const array = Array.from(Array(length)).map(
      x => Math.random() * Math.floor(MAX - MIN) + MIN
    )
    dispatch(updateArray(array));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RandomizeButton);
