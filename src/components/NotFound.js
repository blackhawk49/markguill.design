import React from 'react';
import {Link} from 'react-router-dom';


import './CSTemplate.css';
import './NotFound.css';

const NotFound = () => (

<section className="NotFound">
  
  <div className="Head">
      <div>
        <h1>Oops!</h1>
        <h2>The page you were looking for could not be found. It might be hiding. Inte the meantime why don't you check out my homepage?</h2>
        <Link to="/">Take Me Home</Link>
      </div>
  </div>

</section>


  )

export default NotFound 