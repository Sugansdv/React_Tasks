import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Proj4() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    agreed: false
  });

  const [errors, setErrors] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));

    if (type !== "checkbox") {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;
    let newErrors = { name: "", email: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    setErrors(newErrors);

    if (valid && formData.agreed) {
      alert(`Subscribed Successfully!\nName: ${formData.name}\nEmail: ${formData.email}`);
      setFormData({ name: "", email: "", agreed: false });
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Mini Project 4: Subscription Form</h3>

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label htmlFor="name" className="form-label fw-bold">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className={`w-25 form-control ${errors.name ? "is-invalid" : ""}`}
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-bold">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className={`w-25 form-control ${errors.email ? "is-invalid" : ""}`}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="terms"
            name="agreed"
            checked={formData.agreed}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="terms">
            I agree to the terms and conditions
          </label>
        </div>

        <button type="submit" className="btn btn-primary" disabled={!formData.agreed}>
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default Proj4;
