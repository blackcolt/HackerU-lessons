import React, { useState } from "react";

function HeaderNew(props) {
  const [count, setCount] = useState(0);
  setTimeout(() => {
    setCount(5);
  }, 3000);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default HeaderNew;
