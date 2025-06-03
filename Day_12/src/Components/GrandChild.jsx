import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const GrandChild = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="grandchild-container">
      <p>
        Welcome, <strong>{user.name}</strong>! Your login status is: <em>{user.loggedIn ? 'Logged In' : 'Logged Out'}</em>.
      </p>
    </div>
  );
};

export default GrandChild;
