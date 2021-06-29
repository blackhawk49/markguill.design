import React from 'react';
import { Link } from 'react-router-dom'; 
import './CSFooter.css';

const CSFooter = props => (

  <section className="CSFooter">
    <div className="wrapper">
      <div>
        <h2>Previous</h2>
        <Link to={props.pageprevious}>{props.titleprevious}</Link>
      </div>
      <div>
        <h2>Next</h2>
        <Link to={props.pagenext}>{props.titlenext}</Link>
      </div>
    </div>
  </section>

)

export default CSFooter