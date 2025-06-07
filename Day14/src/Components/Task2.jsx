import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Task2() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3 text-muted">Task 2:  Basic Controlled Input: Create an input field that displays its value using
useState.</h4>
      <div className="mb-3">
        <label htmlFor="inputField" className="form-label fw-bold">
          Enter something:
        </label>
        <input
          type="text"
          className="form-control w-50"
          id="inputField"
          value={inputValue}
          onChange={handleChange}
        />
      </div>
      <p className="fw-bold">You typed: <span className="text-primary">{inputValue}</span></p>
    </div>
  );
}

export default Task2;
