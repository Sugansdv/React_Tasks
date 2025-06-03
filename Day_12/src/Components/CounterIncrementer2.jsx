import React, { useContext } from 'react';
import { CounterContext2 } from './CounterContext2';

export default function CounterIncrementer2() {
  const { increment } = useContext(CounterContext2);
  return <button onClick={increment}>Increment Counter</button>;
}