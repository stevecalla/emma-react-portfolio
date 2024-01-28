/*
App:
  - Must be your top level component and render all necessary children components
*/

/* 
_____________________________
Issues:
_____________________________
NavTabs:
  - Fix issue with hamburger button not working





_____________________________
TODO's:
_____________________________
- Add link to button to go to CV / download CV??
    - Maybe change btn on jumbo to - download CV

    

*/




import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
// import { useState } from 'react';
import './App.css';



// Page components
import Home from './components/pages/Home';
import Project from './components/pages/Project';
import Contact from './components/pages/Contact';

// components
import Header from './components/Header';
import Footer from './components/Footer';
  //Do these go here or on the component they are called in i.e. NavTabs should be in Header?? ProjectGallery in Project??
  // import NavTabs from './components/NavTabs';



function App() {
  return (
    // <Home />
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
