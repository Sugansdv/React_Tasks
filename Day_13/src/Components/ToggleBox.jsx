import React from 'react';
import useToggle from '../Hooks/useToggle';

const ToggleBox = () => {
  const [isOpen, toggle] = useToggle();

  return (
    <div className="container text-center mt-5">
       <h3 className='mb-3 text-secondary'> Task 2. useToggle Hook</h3>
      <button className="btn btn-info mb-3" onClick={toggle}>
        {isOpen ? 'Hide Message' : 'Show Message'}
      </button>

      {isOpen && (
        <div className="alert alert-success w-50 m-auto fs-4" role="alert">
           Hello! The toggle is ON.
        </div>
      )}
    </div>
  );
};

export default ToggleBox;
