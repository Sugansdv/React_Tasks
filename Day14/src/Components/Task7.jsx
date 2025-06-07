import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Task7() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3 text-muted">Task 7: Radio Button Group: Create a group of radio buttons that selects one
option and displays the selected value.</h4>

      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="gender"
          id="male"
          value="Male"
          onChange={handleChange}
          checked={selectedOption === "Male"}
        />
        <label className="form-check-label" htmlFor="male">Male</label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="gender"
          id="female"
          value="Female"
          onChange={handleChange}
          checked={selectedOption === "Female"}
        />
        <label className="form-check-label" htmlFor="female">Female</label>
      </div>

      {selectedOption && (
        <p className="mt-3 fw-bold">
          Selected Gender: <span className="text-primary">{selectedOption}</span>
        </p>
      )}
    </div>
  );
}

export default Task7;
