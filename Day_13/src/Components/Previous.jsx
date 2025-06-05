import React, { useState } from "react";
import usePrevious from "../Hooks/usePrevious";

export default function UsePreviousDemo() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div className="container mt-5 w-50">
         <h3 className='mb-3 text-secondary text-center'> Task 7. usePrevious Hook</h3>

      <p>Current count: {count}</p>
      <p>Previous count: {prevCount !== undefined ? prevCount : "-"}</p>
      <button className="btn btn-success" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
