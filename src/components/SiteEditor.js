import React from 'react';
import CSFooter from './CSFooter';
import ImgExample01 from '../assets/editor-image-01.png';
import ImgExample02 from '../assets/editor-home-02.png';
import ImgExample03 from '../assets/create-pages-04.png';
import ImgExample04 from '../assets/account-settings-start-01.png';
import ImgExample05 from '../assets/editor-home-05.png';
import ImgExample06 from '../assets/select-site-style-01.png';
import ImgExample08 from '../assets/editor-creator-step-02.png';
import ImgExample09 from '../assets/editor-helpcenter.png';
import ImgExample10 from '../assets/editor-row-layout.png';
import ImgExample11 from '../assets/editor-image-change.png';
import ImgExample12 from '../assets/editor-dashboard-site-creation-confirmation.png';
import ImgExample13 from '../assets/editor-theme-selector.png';
import ImgExample14 from '../assets/editor-assets-selection.png';
import ImgExample15 from '../assets/personas-thumb.png';
import ImgExample15a from '../assets/personas.png';

import './CSTemplate.css';

const SiteEditor = () => (
    <section>
      <div className="Head convertly">
        <h1>Website Editor</h1>
        <h2>Creating websites for small businesses that meet their digital needs.</h2>
        <figure>
          <img src={ImgExample01} border="0" />
          <figcaption>Editor Screen Shot</figcaption>
        </figure>
      </div>

      <div className="Content">
        <h3>Overview</h3>
        <p><span>Convertly</span> is a content management system (CMS) designed to help bridge the gap between online advertising of small and medium-sized businesses and their online brand. We created a platform that is easy to use that can create fast and responsive websites for the users. I joined the team as the sole Product Designer.</p>
        <h3>Problem</h3>
        <p>Small to medium-sized businesses would purchase digital ad space from the digital ad agency at the parent company of Convertly. Many of these small businesses would have varying website designs and platforms. Even if the clickthrough rate of a particular ad was high the conversion rate may drop off due to many different factors. One of the factors is a poor-performing website. The website may not be optimized for mobile devices or not have a clear user flow and path. This would potentially lead to businesses not renewing ad buy contracts.</p>
        <h3>Goal</h3>
        <p>Create a platform for small to medium-sized businesses to create a website for their businesses that will integrate into our ad platform to allow for better tracking of campaign success, a one-stop-shop for your online presence, and make sure it is easy to use but flexible so their business owner can update their product as well as a 3rd party (including our sales representatives) to come in and build the site for them on our platform.</p>
        <h3>My Role</h3>
        <p>Research, User Flow & Stories, Wireframing, Visual Design, Prototyping, User Testing</p>
      </div>

      <div className="Content">
        <h3>Process</h3>
        <h4>Research (User and Market)</h4>
        <p>I jumped into my research phase. I started reviewing other companies that provided similar services. Wix, Weebly, SquareSpace, GoDaddy, and probably 4-5 other platforms. I also tried to find other inspiration that did something similar to or that the target user would possibly interface with on a daily basis. I was trying to find design patterns that I could use to start implementing into my design.</p>
        <h4>Personas</h4>
        <div className="ExampleImages">
          <div>
            <figure>
              <a href={ImgExample15a} target="_blank"><img src={ImgExample15} border="0" /></a>
            </figure>
          </div>
        </div>
        <p>The initial target customers for this product were small to medium size business owners. I did research with sales associates by sitting on calls with clients to discuss site changes (updating content to link to digital ads or just suggestions to help provide a betting experience for the user). Soon I saw how much we spent time on the site product to assist the small business owners.</p>
        <p>Once we had a product we created a small team to assist with the site setup. These individuals (designers) would help customize the site to help with the adoption rate. Get the site up and running early on in the process was key for testing. So after these sessions, the users are business owners, sales associates, and web designers.</p>
        <h4>User Map and Journey</h4>
        <p>Created a user map and user flow in Sketch initially (switched to Figma about 8 months into the project) and then transitioned that into overflow.io. I created separate projects based on the user flow. Started with wireframes that moved into low-fidelity mockups pretty quickly (the stakeholder didn’t find the impact of both the user map and wireframes in the decision making).</p>
        <h4>Mockups and Prototype</h4>
        <p>Once signed off I moved into mockups and prototyping. I worked on 1 component at a time (site creation, text editor, template selection… etc.). Once each component was completed I would submit it for review and handoff to development.</p>
      </div> 
      <div className="ExampleImages">
        <div>
          <figure>
            <a href={ImgExample02} target="_blank"><img src={ImgExample02} border="0" /></a>
            <figcaption>Inline Text Editor</figcaption>
          </figure>
          <figure>
            <a href={ImgExample03} target="_blank"><img src={ImgExample03} border="0" /></a>
            <figcaption>Create/Edit Page</figcaption>
          </figure>          
          <figure>
            <a href={ImgExample05} target="_blank"><img src={ImgExample05} border="0" /></a>
            <figcaption>Image Editor</figcaption>
          </figure>         
          <figure>
            <a href={ImgExample11} target="_blank"><img src={ImgExample11} border="0" /></a>
            <figcaption>Image Editor</figcaption>
          </figure>
          <figure>
            <a href={ImgExample13} target="_blank"><img src={ImgExample13} border="0" /></a>
            <figcaption>Editor Site Theme Tool</figcaption>
          </figure>
          <figure>
            <a href={ImgExample14} target="_blank"><img src={ImgExample14} border="0" /></a>
            <figcaption>Asset Selection Tool</figcaption>
          </figure>
          <figure>
            <a href={ImgExample10} target="_blank"><img src={ImgExample10} border="0" /></a>
            <figcaption>Help Tool Flyout</figcaption>
          </figure>           
        </div>
      </div>
      <div className="Content">
        <h3>Outcome and Lessons</h3>
        <p>The initial product was beta-tested internally. We used the tool to create websites for clients that had purchased ad space on our platform but didn't have a strong website presence or didn't have a web presence at all. We also moved some of our owned and operated websites (bayareanewsgroup.com was one) over to the platform. This gave us an internal pool of users to use the product and provide tons of feedback. Although this wasn't the initial goal, it allowed us to slowly ramp up the users while providing them with a more hands-on customer experience that they wouldn’t get from other services at that price point.</p>
        <p>Convertly is an always evolving product. It is the largest single product I have worked on. Being the only Product Designer on this product I learned how to bend my process to the needs of the project. Not all projects are made the same. If time doesn't permit me to create personas and wireframes it is imperative to constantly keep the stakeholders up to date during my process. This allows me to make changes rapidly to keeps to deadlines and under budget.</p>
      </div>

      <div className="Content">
        <h3>Source Files & Prototypes</h3>
        <p>Mockups and Prototypes were created in Figma. These files were copied over from work account. Files and projects would normally be organized differently.</p>
        <p>
          <ul>
            <li><a href="https://www.figma.com/file/QgaosZVgHP14ElGPMTnyjz/Convertly-Editor?node-id=28%3A11719" target="_blank">Site Editor</a> - This contains the side navigation options</li>
            <li><a href="https://www.figma.com/proto/25TokjgZFCsaNOZ5smea55/Site-Editor?node-id=2609%3A1690&scaling=min-zoom" target="blank">Add Page - Prototype</a> - This contains the side navigation options</li>
            <li><a href="https://www.figma.com/file/wCd1bm9BijqDqk2rVYt3rs/?node-id=0%3A1" target="blank">Inline Text Editor</a> - Here is what one of the tools looks like. <a href="https://www.figma.com/proto/wCd1bm9BijqDqk2rVYt3rs/Site-Editor-Text-and-Title?node-id=2%3A10133&viewport=-10288%2C694%2C1&scaling=min-zoom" target="_blank">Click here</a> for a link to the prototype</li>
           </ul>
        </p>
      </div>  

      <CSFooter
      titleprevious="Website Creation Wizard"
      pageprevious="/create-site-wizard"
      titlenext="Digital Ad System"
      pagenext="/adtech"
    />

    </section>


  )

export default SiteEditor