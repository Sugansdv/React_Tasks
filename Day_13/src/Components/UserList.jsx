import React from "react";
import { useFetch } from "../Hooks/useFetch";

export default function UseFetchDemo() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users/5");

  return (
    <div className="container mt-5 w-50">
      {loading && (
        <div className="alert alert-info" role="alert">
          Loading...
        </div>
      )}

      {error && (
        <div className="alert alert-danger" role="alert">
          Error fetching data: {error}
        </div>
      )}

      {data && (
        <div className="card">
          <h3 className='mb-3 text-secondary text-center'> Task 4. useFetch Hook</h3>
          
          <div className="card-header text-center text-primary fw-bold">Fetched Data</div>
          <div className="card-body">
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Username:</strong> {data.username}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Phone:</strong> {data.phone}</p>
            <p><strong>Website:</strong> {data.website}</p>
            <p><strong>Company:</strong> {data.company?.name}</p>
          </div>
        </div>
      )}
    </div>
  );
}
