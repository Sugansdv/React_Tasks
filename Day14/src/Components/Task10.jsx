import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Task10() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
    if (event.target.value.trim() !== "") {
      setError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === "") {
      setError("Input cannot be empty!");
    } else {
      setError("");
      alert(`Submitted: ${inputValue}`);
    }
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3 text-muted">Task 10: Validation Message: Display an error message if the input is empty on form
submission</h4>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label htmlFor="inputField" className="form-label fw-bold">Enter something:</label>
          <input
            type="text"
            id="inputField"
            className={`form-control ${error ? "is-invalid" : ""} w-50`}
            value={inputValue}
            onChange={handleChange}
          />
          {error && <div className="invalid-feedback">{error}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Task10;
