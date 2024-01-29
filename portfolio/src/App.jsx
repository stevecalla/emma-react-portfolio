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

Home -> CV:
  - fix the chevron button so that it goes to the top of the page

Contact:
  - How to fix background so it fills screen - on mobile view - half is white




_____________________________
TODO's:
_____________________________
- Add link to button to go to CV / download CV??
    - Maybe change btn on jumbo to - download CV

- Add event handler to submit button on contact pg

ProjectGallery:
  - Add another btn that links to the GitHub repository

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
