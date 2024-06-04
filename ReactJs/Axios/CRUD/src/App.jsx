// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componant/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Add from './pages/Add';
import Edit from './pages/Edit';

const App = () => {
  return (
    <Router>
      <Navbar />
      {/* <Add/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add" element={<Add/>} />
        <Route path="/edit" element={<Edit/>} />

      </Routes>
    </Router>
  );
};

export default App;