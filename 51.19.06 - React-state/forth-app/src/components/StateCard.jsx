import React, { Component } from "react";

class StateCard extends Component {
  state = {
    goals: 0,
  };
  increment = () => {
    let goals = this.state.goals;
    this.setState({
      goals: ++goals,
    });
  };
  decrement = () => {
    let goals = this.state.goals;
    if (goals > 0) {
      this.setState({
        goals: --goals,
      });
    }
  };
  render() {
    return (
      <div>
        <h1>ronaldo</h1>
        <p>Goals:{this.state.goals}</p>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default StateCard;
