import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaCog, FaBars, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const [ isOpen, setIsOpen ] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn); 
  };

  return (
    <div>
      <button className = "menu-btn" onClick = {toggleSidebar}>
        <FaBars />
      </button>
      <div className = {`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <ul>
          <li>
            <Link to = "/home">
              <FaHome /> <span className = "sidebar-text">Home</span>
            </Link>
          </li>
          {isLoggedIn ? (
            <>
              <li>
                <Link to = "/profile">
                  <FaUser /> <span className = "sidebar-text">Profile</span>
                </Link>
              </li>
              <li>
                <Link to = "/settings">
                  <FaCog /> <span className = "sidebar-text">Settings</span>
                </Link>
              </li>
              <li>
                <button onClick = {toggleLogin} className = "sidebar-logout-btn">
                  <FaSignOutAlt /> <span className = "sidebar-text">Logout</span>
                </button>
              </li>
            </>
          ) : (
            <li>
              <button onClick = {toggleLogin} className = "sidebar-login-btn">
                <FaSignInAlt /> <span className = "sidebar-text">Login</span>
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
