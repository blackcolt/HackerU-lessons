import React, { Component } from "react";
import LifeCycleChild from "./lifecycleChild";

class LifeCycleParent extends Component {
  state = {
    counter: 0,
    isVisible: false,
  };

  handleCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  toggleIsVisible = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  render() {
    return (
      <div>
        <h1>LifeCycle Parent</h1>

        <button onClick={this.handleCounter}>
          parent counter : {this.state.counter}
        </button>
        <button onClick={this.toggleIsVisible}>
          {this.state.isVisible ? "hide" : "show"}
        </button>

        {this.state.isVisible && <LifeCycleChild />}
      </div>
    );
  }
}

export default LifeCycleParent;
