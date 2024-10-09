import React from 'react';
import './Sidebar.css'; 

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="/search">🔍 Search</a></li>
        <li><a href="/profile">👤 Profile</a></li>
        <li><a href="/messages">✉️ Messages</a></li>
        <li><a href="/invitations">📩 Invitations</a></li>
        <li><a href="/settings">⚙️ Settings</a></li>
        <li><a href="/create-band">🎸 Create a Band</a></li>
        <li><a href="/favourites">⭐ Favourites</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
