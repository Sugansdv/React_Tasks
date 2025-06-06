import { useState } from "react";

const useForm = (initialState) => {
  const [values, setValues] = useState(initialState);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return { values, handleChange };
};

const CustomHookForm = () => {
  const { values, handleChange } = useForm({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${values.name}\nEmail: ${values.email}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-50 mx-auto mt-4">
      <div className="mb-3">
        <h3 className='text-muted mb-3'>6. Using Custom Hook for Forms</h3>  
       
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Name"
          className="form-control w-50"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Email"
          className="form-control w-50"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CustomHookForm;
