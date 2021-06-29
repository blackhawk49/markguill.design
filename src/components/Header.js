import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';


import './Header.css'

const Header = ({ siteTitle }) => (
  <header className="Header">
    <div className="HeaderContent">
      <Logo />
      <Navbar />
    </div>
  </header>


)

export default Header;
