import React, { useState } from "react";
import useDebounce from "../Hooks/useDebounce";

export default function UseDebounceDemo() {
  const [text, setText] = useState("");
  const debounced = useDebounce(text, 1000); 

  return (
    <div className="container mt-5 w-50">
         <h3 className='mb-3 text-secondary text-center'> Task 6. useDebounce Hook</h3>

      <input
        type="text"
        className="form-control"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="mt-3 alert alert-info">
        <strong>Debounced:</strong> {debounced}
      </div>
    </div>
  );
}
