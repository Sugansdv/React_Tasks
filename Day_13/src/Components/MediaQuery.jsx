import React from "react";
import useMediaQuery from "../Hooks/useMediaQuery";

export default function UseMediaQueryDemo() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <h3 className='mt-4 text-secondary text-center'> Task 12. useMediaQuery Hook</h3>
    <div className="container mt-5 text-center bg-secondary text-white w-25 p-3">
      <p className="fw-bold">{isMobile ? "Mobile View" : "Desktop View"}</p>
    </div>
    </>
  );
}
