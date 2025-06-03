
import React, { createContext, useState } from 'react';

export const CounterContext2 = createContext();

export default function CounterProvider2({ children }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);

  return (
    <CounterContext2.Provider value={{ count, increment }}>
      {children}
    </CounterContext2.Provider>
  );
}
