import React, { createContext } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const userName = 'Sugan';

  return (
    <UserContext.Provider value={userName}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
