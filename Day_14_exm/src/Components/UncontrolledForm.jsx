import { useRef } from "react";

const UncontrolledForm = () => {
  const nameRef = useRef(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Entered Name: ${nameRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-5  w-50 m-auto">
      <div className="mb-3">
        <h3 className='text-muted mb-3'>Uncontrolled Input Field</h3>
        <label className="form-label text-success fw-bold">Enter Your Name:</label>
        <input
          type="text"
          ref={nameRef}
          className="ms-3 w-50"
          placeholder="Type your name"
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default UncontrolledForm;
