import React, { useState, useEffect } from "react";

const Proj1 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Counter: ${count}`;
  }, [count]);

  return (
    <div className="container">
      <h2>Mini Project 1: Counter with Title Update</h2><br /><br />
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Proj1;
