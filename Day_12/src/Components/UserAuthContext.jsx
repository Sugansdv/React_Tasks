import React, { createContext, useState } from 'react';

export const UserAuthContext = createContext({
  isAuthenticated: false,
  loginUser: () => {},
  logoutUser: () => {},
});

const UserAuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginUser = () => setIsAuthenticated(true);
  const logoutUser = () => setIsAuthenticated(false);

  return (
    <UserAuthContext.Provider value={{ isAuthenticated, loginUser, logoutUser }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthProvider;
