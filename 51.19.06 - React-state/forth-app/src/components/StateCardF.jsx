import React from "react";
import { useState } from "react";

function StateCardFunction() {
  let [goals, setGoals] = useState(0);
  let [isDead, setDead] = useState(false);
  return (
    <div>
      <span>ronaldo</span>
      <p>goals: {goals}</p>
      <button onClick={() => setGoals(++goals)}>+</button>
      <button onClick={() => setGoals(--goals)}>-</button>
      <p>isDead: {isDead ? "yes" : "no"}</p>
      <button
        onMouseOver={() => setDead(true)}
        onMouseLeave={() => setDead(false)}
      >
        KILL HIM
      </button>
    </div>
  );
}

export default StateCardFunction;
