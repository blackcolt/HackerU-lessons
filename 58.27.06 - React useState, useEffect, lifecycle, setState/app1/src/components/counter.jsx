import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0,
  };

  handleAdd = () => {
    const { max = 10 } = this.props;
    const { counter } = this.state;

    if (counter < max) {
      this.setState({
        counter: counter + 1,
      });
    }
  };

  handleSub = () => {
    const { min = 0 } = this.props;
    const { counter } = this.state;

    if (counter > min) {
      this.setState({
        counter: counter - 1,
      });
    }
  };

  render() {
    const { counter } = this.state;
    const { min = 0, max = 10 } = this.props;

    return (
      <div className="counter">
        <button
          disabled={counter <= min}
          onClick={() => this.handleSub()}
          className="btn btn-danger"
        >
          -
        </button>
        <span className="mx-2">{counter}</span>
        <button
          disabled={counter >= max}
          onClick={this.handleAdd}
          className="btn btn-success"
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
