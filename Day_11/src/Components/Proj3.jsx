import React, { useState } from 'react';

function Proj3() {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    if (!show) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(err => console.error("Error fetching users:", err));
    }
    setShow(!show);
  };

  return (
    <div className="container">
      <h2>Mini Project 3: Toggle API Data</h2>
      <button className="fetch-btn" onClick={handleToggle}>
        {show ? 'Hide Users' : 'Show Users'}
      </button>

      {show && (
        <ul className='user-list'>
          {users.map(user => (
            <li key={user.id}>
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Proj3;
