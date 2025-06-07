import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Task3() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3 text-muted">Task 3: Multiple Inputs in Form: Create a form with name and email inputs and
display the values on submit.</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label fw-bold">Name:</label>
          <input
            type="text"
            className="form-control w-25"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-bold">Email:</label>
          <input
            type="email"
            className="form-control w-25"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      {submittedData && (
        <div className="mt-4 bg-warning p-3 w-25">
          <h5>Submitted Data:</h5>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
        </div>
      )}
    </div>
  );
}

export default Task3;
