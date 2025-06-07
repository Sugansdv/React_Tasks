import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Task8() {
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
    // 9. Prevent Default Behavior: Use preventDefault() to stop the page from reloading on form submission.

    event.preventDefault();  
    alert(`Form Submitted:\nName: ${formData.name}\nEmail: ${formData.email}`);
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3 text-muted">Task 8: Form Submission: Create a form that alerts the submitted values on
submit.
</h4>
<h4 className="mb-3 text-muted">Task 9: Prevent Default Behavior: Use preventDefault() to stop the page from
reloading on form submission.
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

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Task8;
