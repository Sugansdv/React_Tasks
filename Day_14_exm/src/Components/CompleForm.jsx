import { useReducer } from "react";

const formReducer = (state, action) => {
  return { ...state, [action.name]: action.value };
};

const ComplexForm = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${formState.username}\nPassword: ${formState.password}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-50 mx-auto mt-4">
      <div className="mb-3">
         <h3 className='text-muted mb-3'>5. Form with useReducer for Complex Forms</h3>        
        <input
          type="text"
          name="username"
          value={formState.username}
          onChange={(e) =>
            dispatch({ name: e.target.name, value: e.target.value })
          }
          placeholder="Username"
          className="form-control w-50"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          name="password"
          value={formState.password}
          onChange={(e) =>
            dispatch({ name: e.target.name, value: e.target.value })
          }
          placeholder="Password"
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

export default ComplexForm;
