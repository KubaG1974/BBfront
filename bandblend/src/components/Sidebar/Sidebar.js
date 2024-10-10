import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaCog, FaBars } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className = "sidebar">
      <div className = "hamburger" onClick = {toggleMenu}>
        <FaBars />
      </div>
      <ul className = {isOpen ? 'menu open' : 'menu'}>
        <li>
          <Link to = "/home">
            <FaHome /> <span className = "sidebar-text">Home</span>
          </Link>
        </li>
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
      </ul>
    </div>
  );
};

export default Sidebar;