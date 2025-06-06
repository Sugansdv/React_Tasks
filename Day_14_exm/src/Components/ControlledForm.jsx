import { useState } from "react";

const ControlledForm = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="container mt-5 w-50 m-auto">
        <h3 className='text-muted mb-3'>1. controlled Input Field</h3>
      <div className="mb-3">
        <label className="form-label text-success fw-bold">
          Enter Your Name:
        </label>
        <input
          type="text"
          className="ms-3 w-50"
          value={name}
          onChange={handleChange}
          placeholder="Type your name here"
        />
      </div>
      <p className="fw-bold ">Typed Name: <span className="text-primary">{name}</span></p>
    </div>
  );
};

export default ControlledForm;
