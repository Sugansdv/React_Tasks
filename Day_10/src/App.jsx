import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Task from "./Components/Task";
import Proj1 from "./Components/Proj1";
import Proj2 from "./Components/Proj2";
import Proj3 from "./Components/Proj3";
import Proj4 from "./Components/Proj4";
import "./App.css";


function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Day_10 />} />
            <Route path="/Task" element={<Task />} />
            <Route path="/Proj1" element={<Proj1 />} />
            <Route path="/Proj2" element={<Proj2 />} />
            <Route path="/Proj3" element={<Proj3 />} />
            <Route path="/Proj4" element={<Proj4 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Day_10 () {
  return (
    <>
      <h1 className="hero-text">Day_10_Task
      </h1>
    </>
  );
}

export default App;