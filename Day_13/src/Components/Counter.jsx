import React from 'react';
import useCounter from '../Hooks/useCounter';

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div className="container text-center mt-5">
      <h3 className='mb-2 text-secondary'> Task 1. useCounter Hook</h3>
      <h2 className="mb-4">Counter: {count}</h2>
      <div className="btngroup" role="group">
        <button className="btn btn-warning me-2" onClick={decrement}>Decrement</button>
        <button className="btn btn-success me-2" onClick={increment}>Increment</button>
        <button className="btn btn-danger" onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
