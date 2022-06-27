import { useState } from "react";

const CounterFn = ({ min = 0, max = 10 }) => {
  const [counter, setCounter] = useState(min);

  const add = () => {
    setCounter((counter) => (counter > min ? counter - 1 : counter));
  };

  return (
    <div className="counter">
      <button
        onClick={add}
        disabled={counter <= min}
        className="btn btn-danger"
      >
        -
      </button>
      <span className="mx-2">{counter}</span>
      <button
        onClick={() =>
          setCounter((counter) => (counter < max ? counter + 1 : counter))
        }
        disabled={counter >= max}
        className="btn btn-success"
      >
        +
      </button>
    </div>
  );
};

export default CounterFn;
