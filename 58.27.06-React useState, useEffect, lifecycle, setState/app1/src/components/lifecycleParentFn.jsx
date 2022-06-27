import { useState } from "react";
import LifeCycleChildFn from "./lifecycleChildFn";

const LifeCycleParentFn = () => {
  const [counter, setCounter] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleCounter = () => {
    setCounter((counter) => counter + 1);
  };

  const toggleIsVisible = () => {
    setIsVisible((isVisible) => !isVisible);
  };

  return (
    <div>
      <h1>LifeCycle Parent</h1>

      <button onClick={handleCounter}>parent counter : {counter}</button>
      <button onClick={toggleIsVisible}>{isVisible ? "hide" : "show"}</button>

      {isVisible && <LifeCycleChildFn />}
    </div>
  );
};

export default LifeCycleParentFn;
