import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaCog, FaBars, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const [ isOpen, setIsOpen ] = useState(true);

  const setCookie = (name, value, days) => {
    const expires = new Date(Date.now() + days * 86400000).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
  };

  const getCookie = (name) => {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  };

  const deleteCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };

  useEffect(() => {
    const savedLoginState = getCookie('isLoggedIn');
    if (savedLoginState === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleLogin = () => {
    if (isLoggedIn) {
      deleteCookie('isLoggedIn');
    } else {
      setCookie('isLoggedIn', true, 7);
    }
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
