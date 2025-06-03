import React, { useContext } from 'react';
import { UserDataContext } from './UserDataContext';

const UserProfile = () => {
  const { userData, loading, error } = useContext(UserDataContext);

  if (loading) return <p>Loading user data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <p><b>Name:</b> {userData.name}</p>
      <p><b>Email:</b> {userData.email}</p>
      <p><b>Phone:</b> {userData.phone}</p>
      <p><b>Website:</b> {userData.website}</p>
    </div>
  );
};

export default UserProfile;
