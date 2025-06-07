import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Task4() {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3 text-muted">Task 4: Textarea Input: Create a controlled textarea that displays user input.</h4>
      <div className="mb-3">
        <label htmlFor="textarea" className="form-label fw-bold">Enter Your Message:</label>
        <textarea
          className="form-control w-50"
          id="textarea"
          rows="4"
          value={message}
          onChange={handleChange}
        ></textarea>
      </div>
      <p className="fw-bold">You wrote:</p>
      <div className="border rounded p-3 w-50">
        {message}
      </div>
    </div>
  );
}

export default Task4;
