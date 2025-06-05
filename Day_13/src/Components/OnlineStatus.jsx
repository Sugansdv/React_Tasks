import React from "react";
import useOnlineStatus from "../Hooks/useOnlineStatus";

export default function UseOnlineStatusDemo() {
  const isOnline = useOnlineStatus();

  return (
    <div className="container mt-5 text-center w-50 fw-bold">
      <h3 className='mb-3 text-secondary'> Task 13. useOnlineStatus Hook</h3>
      <div className={`alert ${isOnline ? "alert-success" : "alert-danger"}`}>
        {isOnline ? "You are Online" : " You are Offline"}
      </div>
    </div>
  );
}
