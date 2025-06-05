import React, { useState } from "react";
import useTitle from "../Hooks/useTitle";

export default function UseTitleDemo() {
  const [count, setCount] = useState(0);

  useTitle(`Count: ${count}`);

  return (
    <div className="container mt-5 w-50 text-center">
        <h3 className='mb-3 text-secondary text-center'> Task 9. useTitle Hook</h3>
      <p>Count: {count}</p>
      <button className="btn btn-success" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
