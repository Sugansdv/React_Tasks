import { useState, useEffect } from "react";
import '../assets/Css/Task.css';


const Task1 = () => {
   return (
    <div style={{ padding: '20px'}}>
      <h1>1. Introduction to useEffect:</h1>
      <ul>
        <li><strong>useEffect</strong> is a built-in React hook used to perform side effects in functional components.</li>
        <li>Side effects can include tasks like data fetching, directly updating the DOM, or setting up timers or subscriptions.</li>
        <li>It runs after the component renders, and we can control when it runs by passing a dependency array.</li>
        <li>This helps manage external interactions cleanly and keeps the code more predictable and efficient.</li>
      </ul>
    </div>
  );
};




// 2. Use useEffect to display "Component Mounted" in the console when the component mounts.
const Task2 = () => {
  useEffect(() => {
    console.log("Component Mounted");
  }, []); 

  return (
    <div>
      <h2>2. Use useEffect to display "Component Mounted"
in the console when the component mounts.
</h2>
    </div>
  );
};


// 3. Use useEffect to log a message only once when the component mounts
const Task3 = () => {
  useEffect(() => {
    console.log("The component has mounted!");
  }, []); 

  return (
    <div>
      <h2>3. useEffect to log a message only
once when the component mounts.</h2>
    </div>
  );
};

// 4. Use useEffect to log a message whenever a counter state changes.
const Task4 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Counter : ${count}`);
  }, [count]); 

  return (
    <div>
      <h2>4.  useEffect to log a message whenever a
counter state changes.</h2>
<hr />
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};




// 5. Create two useEffect hooks, one for logging name changes and another for age changes.
const Task5 = () => {
  const [name, setName] = useState("Dharun");
  const [age, setAge] = useState(25);

  useEffect(() => {
    console.log(`Name changed to: ${name}`);
  }, [name]);

  useEffect(() => {
    console.log(`Age changed to: ${age}`);
  }, [age]);

  return (
    <div>
      <h2>5. Create two useEffect hooks, one for logging
name changes and another for age changes.
</h2><hr />
      <h2>Name: {name}</h2>
      <button onClick={() => setName(name === "Dharun" ? "Vishwa" : "Dharun")}>
        Change Name
      </button>

      <h2>Age: {age}</h2>
      <button onClick={() => setAge(age + 1)}>Increase Age</button>
    </div>
  );
};

// 6. Use useEffect with a cleanup function to log "Component Unmounted" when the component is removed.
const Task6 = () => {
  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  }, []); 

  return (
    <div>
      <h2>6. useEffect with a cleanup function to log
"Component Unmounted" when the component is removed.</h2>
    </div>
  );
};

// 7.  Use useEffect to log "Fetching Data..." when the component mounts.
const Task7 = () => {
  useEffect(() => {
    console.log("Fetching Data...");
  }, []); 

  return (
    <div>
      <h2>7. useEffect to log "Fetching Data..." when
the component mounts</h2>
    </div>
  );
};

// 8. Use useEffect to update the page title with the current counter value.
const Task8 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); 

  return (
    <div>
      <h2>8. useEffect to update the page title with the
current counter value.</h2>
<hr />
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};
// 9. Log the value of an input field whenever it changes using useEffect.
const Task9 = () => {
  const [inputValue, setInputValue] = useState("");

 useEffect(() => {
  const timeout = setTimeout(() => {
    console.log("Input value changed:", inputValue);
  }, 500); 

  return () => clearTimeout(timeout); 
}, [inputValue]);

  return (
    <div className="input">
      <h2>9. Log the value of an input field whenever it changes
using useEffect.</h2>
<hr />
      <h2>Type something:</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

// 10. Display "Counter is Even" whenever the counter is an even number using useEffect.
const Task10 = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (count % 2 === 0) {
      setMessage("Counter is Even");
    } else {
      setMessage("");
    }
  }, [count]); 

  return (
    <div>
      <h2>10. Display "Counter is Even" whenever the
counter is an even number using useEffect.</h2>
<hr />
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {message && <p>{message}</p>}
    </div>
  );
};

// 11. Use useEffect to fetch user data from a placeholder API like https://jsonplaceholder.typicode.com/users.
const Task11 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []); 

  return (
    <div>
      <h2>11. Use useEffect to fetch user data from a
placeholder API like https://jsonplaceholder.typicode.com/users.</h2>
<hr />
      <h2>User List</h2>
      {users.length === 0 ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
// 12. Use setTimeout inside useEffect to simulate delayed API fetching.
const Task12 = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          setUsers(data);
          setLoading(false);
          console.log("Fetched data after delay");
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
          setLoading(false);
        });
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h2>12. Use setTimeout inside useEffect to simulate delayed
API fetching.</h2>
<hr />
      <h2>Users (Fetched after delay)</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
// 13. Fetch data from an API only when a button is clicked.
const Task13 = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = () => {
    setLoading(true);

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>13.  Fetch data from an API only when a button is
clicked.</h2>
<hr/>
      <button className="fetch-btn" onClick={fetchUsers}>Fetch Users</button>

      {loading && <p>Loading...</p>}

      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};


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