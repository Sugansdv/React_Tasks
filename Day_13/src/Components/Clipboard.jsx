import React, { useState } from "react";
import useClipboard from "../Hooks/useClipboard";

export default function UseClipboardDemo() {
  const [text, setText] = useState("Copy this text");
  const { copy, isCopied } = useClipboard();

  return (
    <div className="container mt-5 w-50 text-center">
      <h3 className='mb-3 text-secondary'> Task 11. useClipboard Hook</h3>
      <input
        type="text"
        className="form-control mb-3"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn btn-primary" onClick={() => copy(text)}>
        {isCopied ? "Copied!" : "Copy Text"}
      </button>
    </div>
  );
}
