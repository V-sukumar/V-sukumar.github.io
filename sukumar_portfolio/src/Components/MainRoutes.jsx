import React from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import {Routes,Route} from "react-router-dom"


const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route id="skills" path="/skills" element={<Skills/>} />
      <Route id="projects" path="/projects" element={<Projects/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes> 
  )
}

export default MainRoutes