import React from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  
  let headerContent;

  switch (location.pathname) {
    case '/home':
      headerContent = (
        <>
          <h1>Welcome to Home</h1>
          <p>Enjoy your time on the homepage!</p>
        </>
      );
      break;
    case '/profile':
      headerContent = (
        <>
          <h1>Your Profile</h1>
          <p>Here you can view and edit your profile.</p>
        </>
      );
      break;
    case '/settings':
      headerContent = (
        <>
          <h1>Settings</h1>
          <p>Adjust your preferences here.</p>
        </>
      );
      break;
    default:
      headerContent = (
        <>
          <h1>Band Blender</h1>
          <p>Music tastes better together</p>
        </>
      );
      break;
  }

  return (
    <header className = "header">
      { headerContent }
    </header>
  );
};

export default Header;
