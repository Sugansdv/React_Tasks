import { useState } from 'react';

const useToggle = (initialValue = false) => {
  const [state, setState] = useState(initialValue);
  const toggle = () => setState(prev => !prev);
  return [state, toggle];
};

export default useToggle;
