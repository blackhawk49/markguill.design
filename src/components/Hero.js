import React from 'react'
import Button from './Button'
import './Hero.css'

const Hero = ({ siteTitle }) => (

  <section className="Hero">
    <div className="HeroContent">
      <div className="HeroCopy">
        <h1>Hello, I'm Mark Guill</h1>
        <p>Product Designer</p>
        <p>I am a digital product designer specializing in clean, simplistic designs. My goal is to match the user needs with business goals.</p>
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