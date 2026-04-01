import React, { useState, useCallback } from "react";


function Newcomp2() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Child button clicked");
  }, []);

  console.log("App rendered");

  return (
    <>
      <h2>Parent Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase Parent
      </button>

      <Child name="John" onClick={handleClick} />
    </>
  );
}

const Child = React.memo(function Child({ name, onClick }) {
  console.log("Child rendered");
  return (
    <>
      <h3>Child Name: {name}</h3>
      <button onClick={onClick}>Child Button</button>
    </>
  );
});

export default Newcomp2;