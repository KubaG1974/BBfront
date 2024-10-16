import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaCog, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import './ModalMenu.css';

const ModalMenu = () => {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

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

  const toggleLogin = () => {
    if (isLoggedIn) {
      deleteCookie('isLoggedIn'); 
    } else {
      setCookie('isLoggedIn', true, 7); 
    }
    setIsLoggedIn(!isLoggedIn); 
  };

  return (
    <div className = "modal-content">
      <ul>
        <li>
          <Link to = "/home">
            <FaHome /> <span className = "modal-text">Home</span>
          </Link>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <Link to = "/profile">
                <FaUser /> <span className = "modal-text">Profile</span>
              </Link>
            </li>
            <li>
              <Link to = "/settings">
                <FaCog /> <span className = "modal-text">Settings</span>
              </Link>
            </li>
            <li>
              <button onClick = {toggleLogin} className = "logout-btn">
                <FaSignOutAlt /> <span className = "modal-text">Logout</span>
              </button>
            </li>
          </>
        ) : (
          <li>
            <button onClick = {toggleLogin} className = "login-btn">
              <FaSignInAlt /> <span className = "modal-text">Login</span>
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ModalMenu;
