import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Proj3() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
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
    let newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      alert(
        `Form Submitted Successfully!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
      );
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Mini Project 3: Contact Form</h3>

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

        <div className="mb-3">
          <label htmlFor="message" className="form-label fw-bold">Message:</label>
          <textarea
            id="message"
            name="message"
            className={`w-25 form-control ${errors.message ? "is-invalid" : ""}`}
            rows="4"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <div className="invalid-feedback">{errors.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
}

export default Proj3;
