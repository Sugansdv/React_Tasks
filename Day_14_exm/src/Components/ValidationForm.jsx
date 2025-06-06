import { useState } from "react";

const ValidationForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.includes("@")) {
      setError("Invalid email format");
      return;
    }
    alert(`Submitted Email: ${email}`);
    setError("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-50 mx-auto mt-4">
      <div className="mb-3">
        <h3 className='text-muted mb-3'>4. Handling Form Submission with Validation</h3>  
        
        <input
          type="email"
          className="form-control w-50"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          required
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ValidationForm;
