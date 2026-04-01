import React, { useState } from "react";


function Newcomp3() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Button clicked");
  };

  console.log("App rendered");

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <Child onClick={handleClick} />
    </div>
  );
}

function Child({ onClick }) {
  console.log("Child rendered");
  return <button onClick={onClick}>Click me</button>;
}

export default Newcomp3;