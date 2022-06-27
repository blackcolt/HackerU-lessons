import React, { Component } from "react";

class Counter extends Component {
  state = {};
  render() {
    return (
      <div>
        <button className="btn btn-danger">-</button>
        <span className="px-4">434</span>
        <button className="btn btn-success">+</button>
      </div>
    );
  }
}

export default Counter;
