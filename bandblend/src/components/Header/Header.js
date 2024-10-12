import React from 'react';
import './Header.css';

const Header = ({ onToggleModal }) => {
  return (
    <header className = "header">
      <button className = "hamburger-btn" onClick = {onToggleModal}>
        ☰
      </button>
      <h1>Header Title</h1>
      <p>Music tastes better together</p>
    </header>
  );
};

export default Header;
