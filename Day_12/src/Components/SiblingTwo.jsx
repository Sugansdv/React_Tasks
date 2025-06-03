import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const SiblingTwo = () => {
  const userName = useContext(UserContext);

  return <div>Sibling Two: Welcome back, {userName}!</div>;
};

export default SiblingTwo;
