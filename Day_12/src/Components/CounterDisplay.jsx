import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';

const CounterDisplay = () => {
  const { count, increment } = useContext(CounterContext);

  return (
    <div className="counter-container">
      <p>Current Count: <span className="count-value">{count}</span></p>
      <button onClick={increment} className="increment-button">Increment</button>
    </div>
  );
};

export default CounterDisplay;
