
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup'; // Import the Signup component
import Profile from './components/Profile';
import Reels from './components/Reels';
import EcoChallenge from './components/EcoChallenge';
import ImpactVisualizer from './components/ImpactVisulizer';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router> {/* Make sure everything is inside the Router */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} /> {/* Default route for Login */}
        <Route path="/signup" element={<Signup />} /> {/* Add the route for Signup */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reels" element={<Reels />} />
        <Route path="/eco-challenge" element={<EcoChallenge />} />
        <Route path="/impact" element={<ImpactVisualizer />} />
      </Routes>
    </Router>
  );
}

export default App;
