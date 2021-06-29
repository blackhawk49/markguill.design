import React from 'react'
import WorkExContent from './WorkExContent'
import imgSrc01 from '../assets/example-work-06.png';
import imgSrc02 from '../assets/example-work-01.png';
import imgSrc03 from '../assets/example-work-02.png';
import imgSrc04 from '../assets/example-work-03.png';
import imgSrc05 from '../assets/blog-thumb-06.png';
import imgSrc06 from '../assets/example-work-05.png';

import './WorkExGrid.css'

const WorkExGrid = ({ siteTitle }) => (
  <section className="WorkExGrid">
    <a id="my-work" alt="work bookmark"></a>
    <div className="WorkExGridContainer">
    <WorkExContent
        imgSrc={imgSrc01}
        imgAlt="website creation wizard thumb"
        title="Website Creation Wizard"
        text="Create a simple wizard for small to medium-size businesses to build their site in minutes."
        project="/create-site-wizard"
      />
      <WorkExContent
        imgSrc={imgSrc02}
        imgAlt="website editor thumb"
        title="Website Editor"
        text="Designed a simple wizard to help small and medium sized business owners easily create their website on the Convertly platform."
        project="/convertly-site-editor"
      />
      <WorkExContent
        imgSrc={imgSrc03}
        imgAlt="digital ad tool thumb"
        title="Digital Ad Tool - Convertly"
        text="Created a single portal for all your social media advertising needs. Create Google, Facebook, and Instagram digital ads in one convenient place."
        project="/adtech"
      />
      <WorkExContent
        imgSrc={imgSrc04}
        imgAlt="ecommerce template thumb"
        title="Ecommerce Template"
        text="An eCommerce website template optimized for both mobile and desktop traffic. Also created a responsive shopping cart interface for people with an existing website product."
        project="/ecomm"
      />
      <WorkExContent
        imgSrc={imgSrc05}
        imgAlt="blog tool thumb"
        title="Blog Tool"
        text="Designed a blog that can be a stand-alone product or be an added feature to an existing Convertly website platform."
        project="/blog"
      />
      <WorkExContent
        imgSrc={imgSrc06}
        imgAlt="help center thumb"
        title="Help Center"
        text="With a new product come many questions. To reduce the number of email and slack messages we designed a help center to help answer user questions and provide product tutorials."
        project="/helpcenter"
      />      

    </div>
  </section>
)

export default WorkExGrid 