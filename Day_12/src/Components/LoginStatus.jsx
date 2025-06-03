import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const LoginStatus = () => {
  const { isLoggedIn, toggleLogin } = useContext(AuthContext);

  return (
    <div className="login-box">
      <h2>{isLoggedIn ? '✅ You are logged in' : '❌ You are logged out'}</h2>
      <button onClick={toggleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default LoginStatus;
