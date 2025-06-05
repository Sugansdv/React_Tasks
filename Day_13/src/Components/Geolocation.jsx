import React from "react";
import useGeolocation from "../Hooks/useGeolocation";

export default function UseGeolocationDemo() {
  const { latitude, longitude, error } = useGeolocation();

  return (
    <div className="container mt-5 text-center w-50">
       <h3 className='mb-3 text-secondary'> Task 14. useGeolocation Hook</h3>

      {error && <div className="alert alert-danger">{error}</div>}

      {!error && latitude && longitude ? (
        <div className="alert alert-success">
          <p><strong>Latitude:</strong> {latitude}</p>
          <p><strong>Longitude:</strong> {longitude}</p>
        </div>
      ) : (
        !error && <p>Fetching location...</p>
      )}
    </div>
  );
}
