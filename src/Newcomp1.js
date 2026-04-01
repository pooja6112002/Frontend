import React, { useState, useMemo } from "react";

function Newcomp() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {} 
    return num * 2;
  };

  const result = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <h3>Result: {result}</h3>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input 
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default Newcomp;