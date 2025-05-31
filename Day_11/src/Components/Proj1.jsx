import React, { useState, useEffect } from 'react';

function Proj1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='container'>
      <h2>Mini Project 1: Counter with Auto Update</h2>
      <p className="dis">{count}</p>
    </div>
  );
}



export default Proj1;
