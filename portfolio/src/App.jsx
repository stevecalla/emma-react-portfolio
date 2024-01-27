/*
App:
  - Must be your top level component and render all necessary children components
*/

import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

// Page components
import Home from './components/pages/Home';
import Project from './components/pages/Project';
import Contact from './components/pages/Contact';

// components
import Header from './components/Header';
  //Do these go here or on the component they are called in i.e. NavTabs should be in Header?? ProjectGallery in Project??
  import NavTabs from './components/NavTabs';
  import ProjectGallery from './components/ProjectGallery';



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="project" element={<Project />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
