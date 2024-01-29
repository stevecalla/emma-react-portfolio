/*
App:
  - Must be your top level component and render all necessary children components
*/

/* 
_____________________________
Issues:
_____________________________
ProjectGallery:
  - How to access images without importing each seperately?
  - How to access JSON info to render project cards

Project:
  - How to push second button to next row

Contact:
  - How to fix background so it fills screen - on different mobile views - half is white
  - How to get icons to hover purple in contact box - it's over ridden by * {color: white};
  - how to make Name & Email boxes fall on different rows when on a small screen & for the form to take up more columns on smaller screens




_____________________________
TODO's:
_____________________________
- Add link to button to go to CV / download CV??
    - Maybe change btn on jumbo to - download CV

- Add event handler to submit button on contact pg

- Add link to email address - should this be <linl> or <a>??

Project:
  - Be sure to store your project data in a JSON file and import it into your project

GitHub / LI:
  GitHub:
  - Update GitHub profile with pinned repositories featuring those same projects.

  LI:
  - Make sure to update your LinkedIn Profile with the new skills you've acquired since the last time it was updated.


*/




import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
// import { useState } from 'react';
import './App.css';



// Page components
import Home from './components/pages/Home';
import ProjectGallery from './components/pages/ProjectGallery';
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
        <Route path="project-gallery" element={<ProjectGallery />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
