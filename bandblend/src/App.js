import React from 'react';
import Sidebar from './components/Sidebar/Sidebar'; 
import Header from './components/Header/Header';
import AuthButton from './components/AuthButton/AuthButton';
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
