import React from 'react';
import CSFooter from './CSFooter';
import ImgExample01 from '../assets/blog-hero-01.png';
import ImgExample02 from '../assets/blog-thumb-01.png';
import ImgExample03 from '../assets/blog-thumb-02.png';
import ImgExample04 from '../assets/blog-thumb-03.png';
import ImgExample05 from '../assets/blog-thumb-04.png';
import ImgExample06 from '../assets/blog-thumb-05.png';
import ImgExample07 from '../assets/blog-thumb-06.png';

import './CSTemplate.css';

const Blog = () => (
    <section>
      <div className="Head blog">
        <h1>Blog System - Convertly</h1>
        <h2>Create a blog and share it in minutes</h2>
        <figure>
          <img src={ImgExample01} border="0" />
          <figcaption></figcaption>
        </figure>
      </div>

      <div className="Content">
        <h3>Overview</h3>
        <p>Potential or existing customers want to share thoughts about their company, about the area of expertise they are in, or just engage more with their community. One way to do that is through social media platforms but there can be limitations (reliance on a 3rd party’s platform) and issue with branding and overall engagement. It is easy to lose the message a company is trying to convey when there are updates and posts from thousands of other sites and companies.</p>
        <h3>Problem</h3>
        <p>Just having a website doesn’t guarantee anyone will come to it or ever find it. We need to find a way to add new content to the site and add a more social aspect for the business owners to reach their existing or potential customers.</p>
        <h3>Goal</h3>
        <p>Design a standalone blog product. Was given 2 weeks to create and get it over to development.</p>
        <h3>My Role</h3>
        <p>Research, User Flow, Visual Design/Mockups, Prototyping, User Testing</p>
      </div>

      <div className="ExampleImages">
        <div>
          <figure>
            <a href={ImgExample02} target="_blank"><img src={ImgExample02} border="0" /></a>
            <figcaption>Blog Settings</figcaption>
          </figure>
          <figure>
            <a href={ImgExample04} target="_blank"><img src={ImgExample04} border="0" /></a>
            <figcaption>New Blog Post Creation</figcaption>
          </figure>
        </div>
      </div>

      <div className="Content">
        <h3>Process</h3>
        <h4>User Research</h4>
        <p>Started off by sitting with sales and in on some calls to see what the potential customers are currently doing. If they are using Squarespace how are they using it? Reviewed the steps taken to edit or create a blog. Find out how they informed their patrons of a new post.</p>
        <p>I also research specifically the tools these people used. Not just tools blog tools on Wix or Squarespace but if they were active on Facebook or Instagram. Maybe they find those tools easier to use.</p>
        <p>A few things I discovered from the research. The person creating the blog didn’t utilize all the tools available. They would spend under 10 minutes on average. I saw a lot of copy and pasting (I would assume for spellchecking reasons). So once they had the idea for the blog they wanted to get it posted as quickly as possible. They would use Word or Google docs for their thoughts and editing and review.</p>
        <h4>User Flow and Interactive Designs</h4>
        <p>The design of the Blog system needed to be completed in 2 weeks. To reduce time and money I made sure to utilize the existing design system where I could. Most elements and components already existed so this made it much easier. This allowed me to skip wireframing and jump into the interactive designs. I used the Figma prototype tool to create the user flows.</p>
        <h4>Prototyping and User Testing</h4>
        <p>Now the user of their product would include internal departments. This provided me with a quick opportunity for user testing. Using a quick prototype in Figma and providing a simple script to add a page with a couple of paragraphs, an image, tag it and add it to the first spot on the blog. Adding the copy isn’t doable in Figma but I just had them click on the text area to add the text.</p>
      </div> 
      <div className="ExampleImages">
        <div>
          <figure>
            <a href={ImgExample05} target="_blank"><img src={ImgExample05} border="0" /></a>
            <figcaption>Inline Text Editor - Heading</figcaption>
          </figure>
          <figure>
          <a href={ImgExample03} target="_blank"><img src={ImgExample03} border="0" /></a>
            <figcaption>Total Active Blog Post List</figcaption>
          </figure>
          <figure>
            <a href={ImgExample06} target="_blank"><img src={ImgExample06} border="0" /></a>
            <figcaption>Blog Post Theme Selector - Single Post</figcaption>
          </figure>
          <figure>
            <a href={ImgExample07} target="_blank"><img src={ImgExample07} border="0" /></a>
            <figcaption>Blog Post Theme Selector</figcaption>
          </figure>        
        </div>
      </div>
      <div className="Content">
        <h3>Outcome and Lessons</h3>
        <p>I received a buy-off from the Senior VP of Sales so this was moved into development. This project was in development when I left the company. I am not sure of the outcome. That happens sometimes for sure. Getting signoff on the design is just 1 step in a process that you don’t have control of.</p>
        <p>This project reiterated how important it is to have a design system in place. Creating components in Figma that I could just grab and drop into my designs saved a lot of time. Also that you are always doing research. I think of reading Medium articles just to learn new design ideas and see what other designers are talking about. That tool itself help with my inspiration for this product.</p>
      </div>

      <div className="Content">
        <h3>Source Files & Prototypes</h3>
        <p>Mockups and Prototypes were created in Figma. These files were copied over from work account. Files and projects would normally be organized differently.</p>
        <p>
          <ul>
            <li><a href="https://www.figma.com/file/XyVtLzsvEEzJ2Uso05NbC7/Convertly-Blog?node-id=72%3A197" target="blank">Blog Tool</a> - Mockups for the blog tool a lot of just the panels that would slide out from the navigation.</li>
          </ul>
        </p>
      </div>  
      <CSFooter
      titleprevious="Ecommerce System"
      pageprevious="/ecomm"
      titlenext="Help Center"
      pagenext="/helpcenter"
    />

    </section>


  )

export default Blog