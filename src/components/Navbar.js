import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ siteTitle }) => (

  <nav className="Navbar">
    <ul className="NavbarContainer">
      <li><NavLink to="/work" className="work">My Work</NavLink></li>
      <li><NavLink to="/about" className="about">About Me</NavLink></li>
      <li><a href="mailto:mguill@gmailcom?Subject=Yo" className="contact">Let's Chat</a></li>
    </ul>
  </nav>
  

)

export default Navbar
