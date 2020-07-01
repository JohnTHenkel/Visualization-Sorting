import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Graph.css';

class Graph extends Component {
  constructor(props) {
    super(props);
    const defaultLength = 25
    this.state = {
      array: props.array,
      height: window.innerHeight,
      width:  window.innerWidth / (defaultLength * 2),
    }
    this.updateDimensions = this.updateDimensions.bind(this)
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }


  updateDimensions() {
    this.setState({
      height: window.innerHeight, 
      width: window.innerWidth /((this.props.array.length === 0 ? 1: this.props.array.length)  * 2)
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    const { array } = this.props;
    const { height, width } = this.state;

    if (array == null)
    {
      return <div/>
    }
    const scale = (height / 2.0) / Math.max(...array)

    return (
      <div className="Graph">
        {array.length ? array.map((value, index) => {
          const backgroundColor = "#ffffff";
          const barHeight = value * scale
          return <div key={index}
            className="Element"
            style={{ height: barHeight, width: width, backgroundColor: backgroundColor }}>
          </div>
        }) : null
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const array = state.updateArray.array
  return {array}
}
 
export default connect(mapStateToProps)(Graph);
