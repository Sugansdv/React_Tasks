import React, { useContext } from 'react';
import { UserRoleContext } from './UserRoleContext';

const UserRoleDisplay = () => {
  const role = useContext(UserRoleContext);

  return (
    <div className="role-display">
      Current User Role: <span className="role-value">{role}</span>
    </div>
  );
};

export default UserRoleDisplay;