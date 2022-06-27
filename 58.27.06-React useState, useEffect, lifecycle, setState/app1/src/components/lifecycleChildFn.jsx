import { useEffect } from "react";
import { useState } from "react";

const LifeCycleChildFn = () => {
  const [counter, setCounter] = useState(0);
  const [toggler, setToggler] = useState(false);

  useEffect(() => {
    console.log(
      "useEffect1 ran.. (no deps, will run on didMount and on every update)"
    );
  });

  useEffect(() => {
    console.log("useEffect2 ran.. (empty deps, Did mount)");

    return () => {
      console.log("unmount");
    };
  }, []);

  useEffect(() => {
    console.log(
      "useEffect3 ran.. ([counter] as deps, will run the function didMount and after only when counter changes"
    );

    return () => {
      console.log(
        "will be run before the next time the useEffect happens according to its dependencies, always on unmount"
      );
    };
  }, [counter]);

  const handleCounter = () => {
    setCounter((counter) => counter + 1);
  };
  const handleToggler = () => {
    setToggler((toggler) => !toggler);
  };

  return (
    <div className="border border-danger">
      <h1>LifeCycle Child</h1>

      <button onClick={handleToggler}>{toggler ? "on" : "off"}</button>
      <button onClick={handleCounter}>child counter : {counter}</button>
    </div>
  );
};

export default LifeCycleChildFn;
