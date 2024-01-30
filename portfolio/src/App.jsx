/*
_____________________________
TODO's:
_____________________________
- Write README & Add screenshots
- Check why footer doesn't stay at the bottom on mobile devices
- How to deploy the app??

*/


import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';


// Page components
import Home from './components/pages/Home';
import ProjectGallery from './components/pages/ProjectGallery';
import Contact from './components/pages/Contact';

// components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="project-gallery" element={<ProjectGallery />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
