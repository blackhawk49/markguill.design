import React from 'react'
import Button from './Button'
import './Hero.css'

const Hero = ({ siteTitle }) => (

  <section className="Hero">
    <div className="HeroContent">
      <div className="HeroCopy">
        <h1>Hello, I am Mark Guill</h1>
        <p>Product Designer</p>
        <p>Specializing in SaaS and Data Visualization out of Silicon Valley</p>
        <p>Product design starts with empathy and some good coffee. It is important to understand the goals of the user but remember the needs of the business.</p>
        <Button
          link="about"
          cname=""
          label="Learn About Me"
        />
      </div>
    </div>
  </section>

)

export default Hero