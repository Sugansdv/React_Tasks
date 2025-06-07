import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Task13() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const nameInputRef = useRef(null); 

  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted:\nName: ${formData.name}\nEmail: ${formData.email}`);
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3 text-muted">Task 13: Form with useEffect: Automatically focus the first input field when the
component mounts using useEffect.</h4>

      <form onSubmit={handleSubmit}>
        <div className="mb-3 w-25">
          <label htmlFor="name" className="form-label fw-bold">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={nameInputRef}
            className="form-control border border-dark border-2"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3 w-25">
          <label htmlFor="email" className="form-label fw-bold">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control border border-dark border-2"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Task13;
