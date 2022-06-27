import Child from "./Child";
import { useState } from "react";

function Parent() {
  const [papacounter, setCounter] = useState(0);
  const handleClick = () => {
    let count = papacounter;
    if (count < 10) {
      count++;
      setCounter(count);
    }
  };
  return (
    <div>
      i the father the count is : {papacounter}
      <Child handleClick={handleClick}></Child>
      <Child handleClick={handleClick}></Child>
    </div>
  );
}

export default Parent;
