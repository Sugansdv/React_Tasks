import React from "react";
import useTimeout from "../Hooks/useTimeout";

export default function UseTimeoutDemo() {
  useTimeout(() => alert("Timeout executed!"), 3000);

  return (
    <div className="container mt-5 w-50 text-center">
      <h3 className='mb-3 text-secondary'> Task 10. useTimeout Hook</h3>
      <p>An alert will pop up in 3 seconds. Please wait...</p>
    </div>
  );
}
