import React from 'react';
import GrandChild from './GrandChild';

const Child = () => {
  return (
    <div className="child" style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
      <h4>Child Component</h4>
      <GrandChild />
    </div>
  );
};

export default Child;
