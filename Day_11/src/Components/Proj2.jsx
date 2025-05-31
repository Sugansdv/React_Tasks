import React, { useState, useEffect } from 'react';

function Proj2() {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setFilteredUsers(data);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  useEffect(() => {
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  return (
    <div className="input container">
      <h2>Mini Project 2: Search User List</h2>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> – {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}



export default Proj2;
