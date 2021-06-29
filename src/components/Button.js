import React from 'react'
import { Link } from 'react-router-dom';
import './Button.css'

const Button = props => (

  <Link to={props.link} className={`default ${props.cname}`}>{props.label}</Link>

)

export default Button
