import React, { useContext } from 'react';
import { UserAuthContext } from './UserAuthContext';

const AuthStatusDisplay = () => {
  const { isAuthenticated, loginUser, logoutUser } = useContext(UserAuthContext);

  return (
    <div className="auth-display">
      {isAuthenticated ? (
        <>
          <p>Welcome! You are logged in.</p>
          <button onClick={logoutUser}>Logout</button>
        </>
      ) : (
        <>
          <p>You are currently logged out.</p>
          <button onClick={loginUser}>Login</button>
        </>
      )}
    </div>
  );
};

export default AuthStatusDisplay;
