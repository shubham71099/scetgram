import './App.css';
import React from 'react';
import Home from './components/Home';
import Posts from './components/Post';
import Friends from './components/Friends';
import Profile from './components/Profile';
import Menu from './components/Menu';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Posts />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
