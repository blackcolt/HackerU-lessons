import React from "react";
import { useState } from "react";

function Room() {
  let [isLigtOn, setLight] = useState(false);
  return (
    <React.Fragment>
      <div>is light on: {isLigtOn ? "on" : "off"}</div>
      <button
        onClick={() => {
          setLight(!isLigtOn);
        }}
      >
        {isLigtOn ? "Turn off" : "Turn on"}
      </button>
    </React.Fragment>
  );
}

export default Room;
