import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Task12() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Form Submitted:\nName: ${formData.name}\nEmail: ${formData.email}`);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: ""
    });
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3 text-muted">
        Task 12: Reset Form Fields: Create a button that resets all input fields.
      </h4>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label fw-bold">Name:</label>
          <input
            type="text"
            id="nameInput"
            name="name"
            className="form-control w-25"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label fw-bold">Email:</label>
          <input
            type="email"
            id="emailInput"
            name="email"
            className="form-control w-25"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary me-2">Submit</button>
        <button type="button" className="btn btn-danger" onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
}

export default Task12;
