import React from "react";

function Task1() {
  const explanation = `
1. Introduction to Forms:

In React, forms are used to collect user input and interact with components.
React provides two ways to handle form inputs:

1) Controlled Components:
   - The form data is handled by React state.
   - Input elements get their values from the state.
   - Every change in input updates the state using event handlers.
   - This gives full control over form data and validation.
   - Example: <input value={stateValue} onChange={handleChange} />

2) Uncontrolled Components:
   - Form data is handled by the DOM itself.
   - React uses refs to access form values directly.
   - Less control compared to controlled components.
   - Useful for simple forms or when integrating with non-React code.
   - Example: using ref to read input value on submit.
  `;

  return (
    <div className="container mt-4">
      <h3 className="text-muted">Task 1: Introduction to Forms: Write a short explanation of forms in React and the
difference between controlled and uncontrolled components.</h3>
      <pre>
        {explanation}
      </pre>
    </div>
  );
}

export default Task1;
