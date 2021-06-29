import React from 'react';
import CSFooter from './CSFooter';
import ImgExample01 from '../assets/hc-cshero.png';
import ImgExample02 from '../assets/hc-guest-support-01-thumb.png';
import ImgExample03 from '../assets/hc-guest-support-02-thumb.png';
import ImgExample04 from '../assets/hc-help-form-widget-04-thumb.png';
import ImgExample05 from '../assets/hc-site-dashboard-desktop-thumb.png';
import ImgExample06 from '../assets/hc-admin-05-thumb.png';
import ImgExample07 from '../assets/hc-admin-table-thumb.png';
import ImgExample08 from '../assets/hc-guest-support-01.png';
import ImgExample09 from '../assets/hc-guest-support-02.png';

import './CSTemplate.css';

const HelpCenter = () => (
    <section>
      <div className="Head helpcenter">
        <h1>Help Center - Convertly</h1>
        <h2>Creating a Support Center for product users</h2>
        <figure>
          <img src={ImgExample01} border="0" />
          <figcaption></figcaption>
        </figure>
      </div>

      <div className="Content">
        <h3>Overview</h3>
        <p>The Help Center is a knowledge database for the website product as well as a tool to ask questions when you are not able to find the answer. The tool is to be located as a link in the primary navigation as well as a quick help icon floating at the bottom right of the site.</p>
        <h3>Problem</h3>
        <p>New products = many questions. Beta testers were just sending emails and slack messages to the team if they had questions on how to use the product. This can lead to a strain on resources and there can be different messages provided to users.</p>
        <h3>Goal</h3>
        <p>Create a portal that users can access a knowledge base to help answer questions as well as ask questions. The questions will help generate the content for the help center.</p>
      </div>

      <div className="ExampleImages">
        <div>
          <figure>
            <a href={ImgExample08} target="_blank"><img src={ImgExample02} border="0" /></a>
            <figcaption>Blog Settings</figcaption>
          </figure>
          <figure>
            <a href={ImgExample04} target="_blank"><img src={ImgExample04} border="0" /></a>
            <figcaption>New Blog Post Creation</figcaption>
          </figure>
        </div>
      </div>

      <div className="Content">
        <h3>My Role</h3>
        <p>Research, User Flow & Stories, Visual Design/Mockups, Prototyping, User Testing</p>
      </div>

      <div className="Content">
        <h3>Process</h3>
        <p>We have already created a lot of content and have how-to guides ready to go but there is always more to learn. The need to gather the data was vital so we needed to create a tool to help with that. So designed a quick question option for beta testers so when they are on a page they are able to ask a question using the help widget. This widget would gather the time and location that the user was at when they came upon that question or when they might have gotten stuck.</p>
        <p>Once we vetted the information we need a way to add the content to the site. I took a lot of inspiration from the Convertly Blog tool in coming up with the admin tool so our team can easily add content to the database. Created a basic tabular layout of the dashboard to help view and search based on keywords.</p>
      </div> 
      <div className="ExampleImages">
        <div>
          <figure>
            <a href={ImgExample05} target="_blank"><img src={ImgExample05} border="0" /></a>
            <figcaption>Inline Text Editor - Heading</figcaption>
          </figure>
          <figure>
          <a href={ImgExample09} target="_blank"><img src={ImgExample03} border="0" /></a>
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
        <p>A support site is pretty straightforward. The help widget has helped reduce the about of emails received internally. The widget would create a ticket in the project management system when they come in. It helps catalog the questions and dictates the content in the help center.</p>
        <p>This project helped me learn more about the users. It was a form of user testing and research.</p>
      </div>

      <div className="Content">
        <h3>Source Files & Prototypes</h3>
        <p>Mockups and Prototypes were created in Figma. These files were copied over from work account. Files and projects would normally be organized differently.</p>
        <p>
          <ul>
            <li><a href="https://www.figma.com/file/tg6mLHyEws7jx6zc35xtEz/Convertly---Helpcenter?node-id=164%3A13318" target="blank">Help Center Widget</a> - Mockups of the help widget. <a href="https://www.figma.com/proto/tg6mLHyEws7jx6zc35xtEz/Convertly-Helpcenter?node-id=164%3A13318&viewport=236%2C60%2C1.4833984375&scaling=min-zoom" target="blank">Click here</a> for the prototype</li>
            <li><a href="https://www.figma.com/file/tg6mLHyEws7jx6zc35xtEz/Convertly-Helpcenter?node-id=94%3A8443" target="blank">Help Center Admin</a> - Mockups of the internal admin page of the tool.</li>
            <li><a href="https://www.figma.com/file/tg6mLHyEws7jx6zc35xtEz/Convertly-Helpcenter?node-id=78%3A343" target="blank">Help Center Intergration</a> - Mockups of the tool in action.</li>
            <li><a href="https://www.figma.com/file/tg6mLHyEws7jx6zc35xtEz/Convertly-Helpcenter?node-id=2%3A0" target="blank">Guest Help Center</a> - Mockups of the guest experience. Same as members but guest header and nav.</li>
          </ul>
        </p>
      </div>  

      <CSFooter
      titleprevious="Blog System"
      pageprevious="/blog"
      titlenext="Website Creation Wizard"
      pagenext="/create-site-wizard"
    />

    </section>


  )

export default HelpCenter