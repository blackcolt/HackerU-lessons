import React, { Component } from "react";

class LifeCycleChild extends Component {
  state = {
    counter: 0,
  };

  constructor() {
    super();
    console.log("constructor ran...");
  }

  handleCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  intervalId;
  componentDidMount() {
    console.log("CDM ran..");

    this.intervalId = setInterval(() => {
      console.log("interval ran..");
      this.handleCounter();
    }, 2000);
  }

  componentDidUpdate() {
    console.log("CDU ran..");
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
    console.log("CWU ran...");
  }

  render() {
    console.log("render ran...");

    return (
      <div className="border border-danger">
        <h1>LifeCycle Child</h1>

        <button onClick={this.handleCounter}>
          child counter : {this.state.counter}
        </button>
      </div>
    );
  }
}

export default LifeCycleChild;
