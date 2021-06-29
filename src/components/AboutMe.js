import React from 'react';
import Portrait from '../assets/portrait-02.png';


import './CSTemplate.css';
import './AboutMe.css';

const AboutMe = () => (

<section className="AboutMe">
  <div className="Head">
    <div className="Header-Content">
      <div>
        <h1>A little bit about myself...</h1>
        <h2>I am an observer by nature and always wondering why. Without the "Why?” there is no “How?"</h2>
      </div>
      <figure>
        <img src={Portrait} border="0" />
        <figcaption>Editor Screen Shot</figcaption>
      </figure>
      </div>
    </div>

  <div className="Content">
    <p>I am a digital product designer living in northern California. I started off as a Web Designer where I working with HTML, CSS, and JavaScript. I eventually transitioned into a UX/UI design role at Medley where I also managed a team of talented developers, designers, and copywriters. After some freelance work, I joined Convertly as the lone Product designer. For 3 1/2 years, I worked in a fast-paced start-up environment working on creating a new product for small to medium-size businesses to take their digital presence to the next level.</p>
    <p>I believe in working directly with the end-user from the beginning, to create solutions that are genuinely desirable, feasible, and viable for the business and the users. In practice, this means a lot of experiments, prototypes, and stakeholder interviews. I think user first but you have to keep a balance between the user and business needs and goals.</p>
    <p>0n a personal level, I loved to travel and experience new places and things. Seeing the architecture from around the world is amazing. The way people honor the past while embracing the future with the design is amazing. I am a lover of all things brewed (coffee and beer). I find it is interesting to see how different cultures come together to start the day with a cup of coffee to prepare themselves for the day and how they end it gathered with friends in a local pub enjoying a beer while talking about their day.</p>
    <p>If you are interested in learning more about my job experience, check out my <a href="http://markguill.design/resume-mguill.pdf" target="_blank">resume</a>.</p>
  </div>

</section>


  )

export default AboutMe 