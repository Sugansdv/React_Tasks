
import React, { useContext } from 'react';
import { CounterContext2 } from './CounterContext2';

export default function CounterDisplay2() {
  const { count } = useContext(CounterContext2);
  return <p>Counter value: {count}</p>;
}


