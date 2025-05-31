import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/Css/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <NavLink to="/" className="logo-text" onClick={closeMenu}>
            Suganya_S
          </NavLink>
        </div>

        {/* Use button for accessibility */}
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          &#9776;
        </button>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Task" onClick={closeMenu}>
              Task
            </NavLink>
          </li>
          <li>
            <NavLink to="/Proj1" onClick={closeMenu}>
              Project 1
            </NavLink>
          </li>
          <li>
            <NavLink to="/Proj2" onClick={closeMenu}>
              Project 2
            </NavLink>
          </li>
          <li>
            <NavLink to="/Proj3" onClick={closeMenu}>
              Project 3
            </NavLink>
          </li>
          <li>
            <NavLink to="/Proj4" onClick={closeMenu}>
              Project 4
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;