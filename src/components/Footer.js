import React from 'react'

import './Footer.css'

const Footer = ({ siteTitle }) => (

  <footer>
    <div className="container">
      <div className="social-links">
        <a href="https://www.linkedin.com/in/mark-guill-032a633/" target="blank" className="icon-linkedin">linkedin</a>
        <a href="https://www.instagram.com/yobogoya49/" target="blank" className="icon-instagram">Instagram</a>
        <a href="https://twitter.com/MarkBGuill" target="blank" className="icon-twitter">Twitter</a>
      </div>
      <div className="copy">
        <p>Designed and Built by Mark Guill - 2021</p>
      </div>
    </div>
  </footer>

)

export default Footer