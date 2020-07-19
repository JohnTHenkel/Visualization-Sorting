import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Graph.css';

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: props.array,
      height: window.innerHeight,
      width:  window.innerWidth
    }
    this.updateDimensions = this.updateDimensions.bind(this)
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }


  updateDimensions() {
    this.setState({
      height: window.innerHeight, 
      width: window.innerWidth
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    const { array, currentComparison } = this.props;
    const { height, width } = this.state;

    if (array == null)
    {
      return <div/>
    }
    const scale = (height / 2.0) / Math.max(...array)

    return (
      <div className="Graph">
        {array.length ? array.map((value, index) => {
          const barHeight = value * scale
          const margin = 5
          const barWidth = width / (array.length * 2) - margin
          return <div key={index}
            className={currentComparison.includes(index) ? "currentElement" : "normalElement"}
            style={{ height: barHeight, width: barWidth, marginLeft:margin}}>
          </div>
        }) : null
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const array = state.updateArray.array
  const currentComparison = state.currentComparison.currentComparison
  return {array, currentComparison }
}
 
export default connect(mapStateToProps)(Graph);
