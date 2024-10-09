import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import AuthButton from './components/AuthButton';
import './App.css'; 

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <AuthButton />
      </div>
    </div>
  );
}

export default App;
