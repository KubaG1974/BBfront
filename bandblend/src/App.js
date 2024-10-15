import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import ModalMenu from './components/ModalMenu/ModalMenu';
import { FaBars } from 'react-icons/fa';
import './App.css';

const App = () => {
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Router>
      <div className = "app">
        <Sidebar />
        <div className = "main-content">
          <Header />
          <button className = "hamburger-btn" onClick = {toggleModal}>
            <FaBars />
          </button>
          {isModalOpen && (
            <div className = "modal">
              <ModalMenu />
              <button className = "close-modal-btn" onClick = {toggleModal}>X</button>
            </div>
          )}
          <Routes>
            <Route path = "/home" element = {<Home />} />
            <Route path = "/profile" element = {<Profile />} />
            <Route path = "/settings" element = {<Settings />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;