import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import './App.css';

const App = () =>  {
  const [ sidebarVisible ] = useState(true);

  return (
    <Router>
      <div className = "app">
        {sidebarVisible && <Sidebar />}
        <div className = "content">
          <Header />
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
