import React from "react";
import useInput from "../Hooks/useInput";

export default function UseInputDemo() {
  const { value, onChange, reset } = useInput("");

  return (
    <div className="container mt-5 w-50">
      
          <h3 className='mb-3 text-secondary text-center'> Task 5. useInput Hook</h3>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          value={value}
          onChange={onChange}
          placeholder="Type here..."
        />
      </div>

      <p>You're typing: <strong>{value}</strong></p>

      <button className="btn btn-danger mt-1" onClick={reset}>
  Reset
</button>
    </div>
  );
}
