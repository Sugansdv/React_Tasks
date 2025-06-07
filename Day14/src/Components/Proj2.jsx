import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Proj2() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (task.trim() === "") return; 
    setTodos((prev) => [...prev, task.trim()]);
    setTask("");
  };

  const handleRemove = (index) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Mini Project 2: Dynamic Todo List</h3>

      <form onSubmit={handleAdd} className="mb-3 d-flex gap-2">
        <input
          type="text"
          className="form-control w-25"
          placeholder="Enter a new task"
          value={task}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>

      {todos.length === 0 ? (
        <p className="text-muted">No tasks yet. Add some!</p>
      ) : (
        <ul className="list-group">
          {todos.map((todo, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center w-25">
              {todo}
              <button
                className="btn btn-sm btn-danger"
                onClick={() => handleRemove(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Proj2;
