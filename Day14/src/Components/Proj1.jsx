import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Proj1() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    setErrors(prev => ({
      ...prev,
      [name]: ""
    }));
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;
    let newErrors = { email: "", password: "" };

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      alert(`Login successful!\nEmail: ${formData.email}`);
      setFormData({ email: "", password: "" });
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Mini Project 1: Login Form</h3>

      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-bold">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label fw-bold">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default Proj1;
