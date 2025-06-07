import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Task6() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3 text-muted">Task 6: Checkbox Input: Create a checkbox that toggles true or false in state.
</h4>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="checkBox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="checkBox">
          I agree to the terms and conditions
        </label>
      </div>

      <p className="mt-3 fw-bold">
        Checkbox Status: <span className={isChecked ? "text-success" : "text-danger"}>
          {isChecked ? "Checked" : "Unchecked"}
        </span>
      </p>
    </div>
  );
}

export default Task6;
