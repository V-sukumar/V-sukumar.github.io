import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div id="nav-menu">
            <Link to="/" className='nav-link home'>Home</Link>
            <Link to="/about" className='nav-link about'>About</Link>
            <Link to="/skills" className='nav-link skills'>Skills</Link>
            <Link to="/projects" className='nav-link projects'>Projects</Link>
            <Link to="/contact" className='nav-link contact'>Contact</Link>
        
    </div>
  )
}

export default Navbar