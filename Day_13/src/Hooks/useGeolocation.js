import { useState, useEffect } from "react";

export default function useGeolocation() {
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    const success = (pos) => {
      setPosition({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    };

    const fail = (err) => {
      setError(err.message);
    };

    navigator.geolocation.getCurrentPosition(success, fail);
  }, []);

  return { ...position, error };
}
