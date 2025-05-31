import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("Timer mounted");
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("Timer unmounted");
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2 >Timer: {seconds} seconds</h2>
    </div>
  );
};

const Proj3 = () => {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div className=" container">
      <h2>Mini Project 3: Show/Hide Timer</h2><br />
      <button
        onClick={() => setShowTimer((prev) => !prev)}
      >
        {showTimer ? "Hide Timer" : "Show Timer"}
      </button>

      {showTimer && <Timer />}
    </div>
  );
};

export default Proj3;
