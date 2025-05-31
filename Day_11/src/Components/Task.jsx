import { useState, useEffect } from "react";
import '../assets/Css/Task.css';


const Task1 = () => {
  return (
    <div>
      <h1 style={{ padding: '30px'}}>Task1. Difference between useState and useEffect</h1>
      <ul style={{ padding: '0 30px'}}>
        <li><strong>useState</strong> is used to declare and manage state variables in a functional component.</li>
        <li><strong>useEffect</strong> is used to perform side effects such as data fetching, DOM updates, or subscriptions after rendering.</li>
        <li><strong>useState</strong> directly updates and re-renders the component when state changes.</li>
        <li><strong>useEffect</strong> runs after the render and can react to changes in state or props.</li>
        <li>In simple terms: <strong>useState</strong> holds data, while <strong>useEffect</strong> reacts to changes in that data or other events.</li>
      </ul>
    </div>
  );
};

function Task2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count updated: ${count}`);
  }, [count]); 

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h2>Task 2. Create a counter that logs the updated count whenever the button is clicked.</h2>
      <p className="dis">Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}


function Task3() {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log(`Input Value: ${inputValue}`);
  }, [inputValue]); 

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="input">
      <h2>Task 3. Display the input field value in the
console whenever the user types.</h2>
      <input 
        type="text" 
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..." 
      />
    </div>
  );
}

function Task4() {
  useEffect(() => {
    console.log('Component Mounted');
  }, []);

  return (
    <div>
      <h2>Task 4. Log "Component Mounted" only once when the component mounts.</h2>
      <p>Displayed mount message in the console.</p>
    </div>
  );
}


function Task5() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); 

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h2>Task 5. Update the document title whenever the counter value changes.</h2>
      <p className="dis">Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

function Task6() {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        console.log('User Data:', data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []); 

  return (
    <div>
      <h2>Task 6. Fetch user data from API and display it in the console.</h2>
      <p>Displayed user data in the console.</p>
    </div>
  );
}

function Task7() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div>
      <h2>Task 7. Store fetched data in state and
display it in a list.</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}


function Task8() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = () => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>Task 8.Fetch data only when a button is clicked and
store the data using useState</h2>
      <button className="fetch-btn" onClick={fetchUsers} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Users'}
      </button>

      {users.length > 0 && (
        <ul className="user-list">
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

function Task9() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log('Timer stopped');
    };
  }, []);

  return (
    <div>
      <h2>Task 9. Create a timer that updates the count every
second and stops when the component is removed.</h2>
      <p className="dis">Count: {count}</p>
    </div>
  );
}

function Task10() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleParagraph = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <div>
      <h2>Task 10. Toggle Visibility with useState</h2>
      <button onClick={toggleParagraph}>
        {isVisible ? 'Hide' : 'Show'} Paragraph
      </button>

      {isVisible && (
        <p>
          Toggle the visibility of a paragraph using a
button and useState.

        </p>
      )}
    </div>
  );
}

function Task11() {
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
    <div className="input">
      <h2>Task 11.Search Filter with useEffect</h2>
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



function Task12() {
  const [shouldFetch, setShouldFetch] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (shouldFetch) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(error => console.error('Error fetching users:', error));
    }
  }, [shouldFetch]);

  const handleClick = () => {
    setShouldFetch(true);
  };

  return (
    <div>
      <h2>Task 12. Fetch Users on Button Click</h2>
      <button className="fetch-btn" onClick={handleClick}>Fetch Users</button>

      {users.length > 0 && (
        <ul className="user-list">
          {users.map(user => (
            <li key={user.id}>
              <strong>{user.name}</strong> – {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Task13() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        return res.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Fetch error:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Task 13. Loading State with API Fetch:</h2>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {!loading && !error && (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <strong>{user.name}</strong> – {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}




function Task() {
  return (
    <>
    <div className="task-container"><Task1 /></div>
      <hr />
      <div className="task-container"><Task2 /></div>
      <hr />
      <div className="task-container"><Task3 /></div>
      <hr />
      <div className="task-container"><Task4 /></div>
      <hr />
      <div className="task-container"><Task5 /></div>
      <hr />
      <div className="task-container"><Task6 /></div>
      <hr />
      <div className="task-container"><Task7 /></div>
      <hr />
      <div className="task-container"><Task8 /></div>
      <hr />
      <div className="task-container"><Task9 /></div>
      <hr />
      <div className="task-container"><Task10 /></div>
      <hr />
      <div className="task-container"><Task11 /></div>
      <hr />
      <div className="task-container"><Task12 /></div>
      <hr />
      <div className="task-container"><Task13 /></div>
      <hr />
    </>
  );
}


export default Task;