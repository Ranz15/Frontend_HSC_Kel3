import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const setData = (newData) => {
    setUserData(newData);
  };

  const resetData = () => {
    setUserData(null);
  };

  const contextValue = {
    dataUser: userData,
    setData,
    resetData,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export const useUserService = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUserService must be used within a UserProvider');
  }

  return context;
};
