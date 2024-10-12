import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';
import './ModalMenu.css';

const ModalMenu = ({ onClose }) => {
  return (
    <div className = "modal">
      <div className = "modal-content">
        <button className = "close-btn" onClick = {onClose}>X</button>
        <ul>
          <li>
            <Link to = "/home" onClick = {onClose}>
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to = "/profile" onClick = {onClose}>
              <FaUser /> Profile
            </Link>
          </li>
          <li>
            <Link to = "/settings" onClick = {onClose}>
              <FaCog /> Settings
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ModalMenu;
