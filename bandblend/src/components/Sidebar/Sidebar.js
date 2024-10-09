import React from 'react';
import { FaHome, FaUser, FaCog } from 'react-icons/fa'; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <FaHome /> <span className="sidebar-text">Home</span>
        </li>
        <li>
          <FaUser /> <span className="sidebar-text">Profile</span>
        </li>
        <li>
          <FaCog /> <span className="sidebar-text">Settings</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
