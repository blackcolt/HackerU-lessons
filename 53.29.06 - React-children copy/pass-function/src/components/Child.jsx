import { useState, setState } from "react";

function Child(props) {
  const { handleClick: click = false } = props;
  const [counter, setCounter] = useState(0);
  const [isOn, setOn] = useState(false);
  const handleClick = () => {
    // setState({ isOn: true, counter: 20 });
    let count = counter;
    count++;
    // if (click && typeof click === "function") {
    //   click();
    // }
    setCounter(count);
  };
  return (
    <div>
      im just the child
      <button onClick={handleClick}>Click Me</button>
      <span>{counter}</span>
      <spam></spam>
      <span>{counter}</span>
      <span>{counter}</span>
      <span>{counter}</span>
      <span>{counter}</span>
    </div>
  );
}

export default Child;
