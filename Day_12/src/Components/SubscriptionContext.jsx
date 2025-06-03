import React, { createContext, useState } from 'react';

export const SubscriptionContext = createContext();

const SubscriptionProvider = ({ children }) => {
  const [isPremium, setIsPremium] = useState(false);

  const toggleSubscription = () => {
    setIsPremium(prev => !prev);
  };

  return (
    <SubscriptionContext.Provider value={{ isPremium, toggleSubscription }}>
      {children}
    </SubscriptionContext.Provider>
  );
};

export default SubscriptionProvider;
