import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import LogoImage from '../assets/logo.svg';

const Logo = ({  }) => (

      <Link to="/"><img src={LogoImage} width="40" height="40" alt="logo"/></Link>

)

export default Logo;
