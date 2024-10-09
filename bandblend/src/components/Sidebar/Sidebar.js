import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaCog } from 'react-icons/fa'; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/home">
            <FaHome /> <span className="sidebar-text">Home</span>
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <FaUser /> <span className="sidebar-text">Profile</span>
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <FaCog /> <span className="sidebar-text">Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
