import { useState } from "react";

const CombinedForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [gender, setGender] = useState("");
  const [fruit, setFruit] = useState("apple");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Accepted: ${isChecked}, Gender: ${gender}, Fruit: ${fruit}`);
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-5 w-50 m-auto">
         <h3 className='text-muted mb-3'>3. Handling Checkboxes, Radio Buttons, and Select Dropdowns Handling
Checkboxes</h3>
        
      {/* Checkbox */}
      <div className="form-check mb-3">
        <input
          type="checkbox"
          id="terms"
          className="form-check-input"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <label htmlFor="terms" className="form-check-label fw-bold">
          Accept Terms & Conditions
        </label>
        <p>{isChecked ? "✅ Accepted" : "❌ Not Accepted"}</p>
      </div>

      {/* Radio Buttons */}
      <div className="mb-3">
        <label className="form-label fw-bold mt-3">Select Gender:</label>
        <div className="form-check">
          <input
            type="radio"
            name="gender"
            value="Male"
            id="male"
            className="form-check-input m-2"
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="male" className="form-check-label">Male</label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            name="gender"
            value="Female"
            id="female"
            className="form-check-input"
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="female" className="form-check-label">Female</label>
        </div>
        <p className="mx-4 text-primary">Selected: {gender}</p>
      </div>

      {/* Select Dropdown */}
      <div className="mb-3">
          <label htmlFor="fruit" className="form-label fw-bold mt-3">Choose a fruit:</label>
        <select 
          id="fruit"
          value={fruit}
          onChange={(e) => setFruit(e.target.value)}
          className="form-select w-50"
        >
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="mango">Mango</option>
        </select>
        <p className="my-2 text-primary">Selected Fruit: {fruit}</p>
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default CombinedForm;
