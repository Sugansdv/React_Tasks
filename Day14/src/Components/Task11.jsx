import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Task11() {
  const [fields, setFields] = useState([""]);
  const [errors, setErrors] = useState([]);

  const handleChange = (index, event) => {
    const newFields = [...fields];
    newFields[index] = event.target.value;
    setFields(newFields);

    const newErrors = [...errors];
    newErrors[index] = ""; // Clear error while typing
    setErrors(newErrors);
  };

  const handleAddField = () => {
    setFields([...fields, ""]);
    setErrors([...errors, ""]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let hasError = false;
    const newErrors = fields.map((field) => {
      if (field.trim() === "") {
        hasError = true;
        return "This field cannot be empty";
      }
      return "";
    });

    setErrors(newErrors);

    if (!hasError) {
      alert("Submitted values:\n" + fields.join("\n"));
    }
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3 text-muted">Task 11: Dynamic Form Fields: Add an input field dynamically when the user clicks
an "Add Field" button.
</h4>

      <form onSubmit={handleSubmit}>
        {fields.map((value, index) => (
          <div className="mb-3" key={index}>
            <label className="form-label fw-bold">Field {index + 1}</label>
            <input
              type="text"
              className={`form-control w-50 ${errors[index] ? "is-invalid" : ""}`}
              value={value}
              onChange={(event) => handleChange(index, event)}
            />
            {errors[index] && (
              <div className="invalid-feedback">{errors[index]}</div>
            )}
          </div>
        ))}

        <button
          type="button"
          className="btn btn-success me-2"
          onClick={handleAddField}
        >
          Add Field
        </button>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Task11;
