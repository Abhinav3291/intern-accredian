import { useState } from 'react';
import './Navbar.css';
import logo from '/public/logo.png.png';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>
        <div className="navbar-links">
          <div className="dropdown">
            <button className="dropbtn" onClick={toggleDropdown}>
              Courses &#9662;
            </button>
            <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}> {/* Corrected conditional rendering */}
              <a href="#">Course 1</a>
              <a href="#">Course 2</a>
              <a href="#">Course 3</a>
            </div>
          </div>
          <a href="#" className="navbar-link" style={{backgroundColor: '#007bff', borderRadius:'10px'}}>Refer & Earn</a>
          <a href="#" className="navbar-link">Resources</a>
          <a href="#" className="navbar-link">About Us</a>
        </div>
        <div className="navbar-buttons">
          <a href="#" className="navbar-button login-button">Login</a>
          <button className="navbar-button signup-button">Try for free</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;