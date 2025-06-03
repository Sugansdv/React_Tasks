import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const SiblingOne = () => {
  const userName = useContext(UserContext);

  return <div className='sibling'>Sibling One: Hello, {userName}!</div>;
};

export default SiblingOne;
