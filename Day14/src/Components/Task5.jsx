import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Task5() {
  const [selectedRole, setSelectedRole] = useState("");

  const handleChange = (event) => {
    setSelectedRole(event.target.value);
  };
  return (
    <div className="container mt-4">
      <h4 className="mb-3 text-muted">Task 5: Select Dropdown: Create a controlled dropdown that displays the selected
value</h4>
     <div className="mb-3">
        <label htmlFor="jobSelect" className="form-label fw-bold">Select your job role:</label>
        <select
          id="jobSelect"
          className="form-select w-25"
          value={selectedRole}
          onChange={handleChange}
        >
          <option value="">-- Choose your role --</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Full Stack Developer">Full Stack Developer</option>
          <option value="Data Analyst">Data Analyst</option>
        </select>
      </div>

      {selectedRole && (
        <p className="fw-bold">Selected Role: <span className="text-primary">{selectedRole}</span></p>
      )}
    </div>
  );
}

export default Task5;
