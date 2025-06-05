import React from "react";
import useHover from "../Hooks/useHover";

export default function UseHoverDemo() {
  const [isHovered, ref] = useHover();

  return (
    <div className="container mt-5 w-50 text-center fw-bold">
        <h3 className='mb-3 text-secondary text-center'> Task 8. useHover Hook</h3>
      <div
        ref={ref}
        className={`p-5 border rounded ${isHovered ? "bg-warning text-danger" : "bg-light"}`}
        style={{ cursor: "pointer" }}
      >
        {isHovered ?  "👍 You're here!" :  "👋 Hover over me"}
      </div>
    </div>
  );
}
