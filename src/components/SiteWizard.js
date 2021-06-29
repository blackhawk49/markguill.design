import React from 'react';
import CSFooter from './CSFooter';
import ImgExample01 from '../assets/wizard-image-01.png';
import ImgExample06 from '../assets/select-site-style-01.png';
import ImgExample15 from '../assets/personas-thumb.png';
import ImgExample15a from '../assets/personas.png';
import ImgExample16 from '../assets/userflow.png';
import ImgExample17 from '../assets/dashboard-skip-site-creation-01.png';
import ImgExample18 from '../assets/login-v1.png';
import ImgExample19 from '../assets/site-setup-about-company-07.png';
import ImgExample20 from '../assets/site-setup-about-company-08.png';
import ImgExample21 from '../assets/site-setup-goals-02.png';
import ImgExample22 from '../assets/site-template-selection-02.png';
import ImgExample23 from '../assets/site-template-selection-03.png';
import ImgExample24 from '../assets/slider-overlay-01.png';
import ImgExample25 from '../assets/example-work-01.png';

import './CSTemplate.css';

const SiteWizard = () => (
    <section>
      <div className="Head convertly">
        <h1>Website Creation Wizard</h1>
        <h2>Create a simple wizard for small to medium-size businesses to build their site in minutes.</h2>
        <figure>
          <img src={ImgExample01} border="0" />
          <figcaption>Editor Screen Shot</figcaption>
        </figure>
      </div>

      <div className="Content">
        <h3>Overview</h3>
        <p><span>Convertly</span> is a content management system (CMS) designed to help bridge the gap between online advertising of small and medium-sized businesses and their online brand. We created a platform that is easy to use that can create fast and responsive websites for the users. I joined the team as the sole Product Designer.</p>
        <h3>Problem</h3>
        <p>Once an account is created for a customer a new site is created from 1 base template. After this someone (client, sales representative, client manager...etc.) would need to go in and customize the template with colors, branding, fonts and templates, and imagery. The business owners were less likely to make these changes themselves and would rely on Convertly internal resources to make these changes. This reduced the adoption rate of the product and led to fewer renewals of the product.</p>
        <h3>Goal</h3>
        <p>Create a simple wizard to allow the customer to create a website that they can quickly modify and update with logo and colors. This will familiarize the customer with the platform and increase the customer adoption rate and overall satisfaction.</p>
        <h3>My Role</h3>
        <p>Research, User Flow & Stories, Wireframing, Visual Design, Prototyping, User Testing</p>
      </div>

      <div className="Content">
        <h3>Process</h3>
        <h4>Research (User and Market)</h4>
        <p>I jumped into my research phase. I started reviewing other companies that provide similar services. Wix, Weebly, SquareSpace, GoDaddy, and probably 4-5 other platforms. I also tried to find other inspiration that did something similar to or that the target user would possibly interface with on a daily basis. I was trying to find design patterns that I could use to start implementing into my design.</p>
        <h4>Personas</h4>
        <div className="ExampleImages">
          <div>
            <figure>
              <a href={ImgExample15a} target="_blank"><img src={ImgExample15} border="0" /></a>
            </figure>
          </div>
        </div>        
        <p>The initial target customers for this product were small to medium size business owners. This wizard would need to be created so that external users and internal users would be able to create sites on the fly. No more development resources needed.</p>
        <h4>User Flow</h4>
        <div className="ExampleImages">
          <div>
            <figure>
              <a href={ImgExample16} target="_blank"><img src={ImgExample16} border="0" /></a>
            </figure>
          </div>
        </div> 
        <p>Created a simple user flow to make sure we focused on the quickest and easiest way to get the user through the setup process. From no websites to multiple websites we needed a way to create and access these sites.</p>
        <h4>Mockups and Prototype</h4>
        <p>Once signed off I moved into Figma. Since a design system existed I was able to skip past the wireframing of the product. I designed an interview-style questionnaire based on the sales teams' interviews with the clients. If you have established templates it is really easy to get a site up and running. Getting the user into the customization process immediately would help improve the engagement.</p>
      </div> 
      <div className="ExampleImages">
        <div>
        <figure>
            <a href={ImgExample18} target="_blank"><img src={ImgExample18} border="0" /></a>
            <figcaption>Login Screen</figcaption>
          </figure>
          <figure>
            <a href={ImgExample17} target="_blank"><img src={ImgExample17} border="0" /></a>
            <figcaption>Dashboard of new user with no websites</figcaption>
          </figure>
          <figure>
            <a href={ImgExample19} target="_blank"><img src={ImgExample19} border="0" /></a>
            <figcaption>Select your business type</figcaption>
          </figure>
          <figure>
            <a href={ImgExample20} target="_blank"><img src={ImgExample20} border="0" /></a>
            <figcaption>Type of Business Selected</figcaption>
          </figure>          
          <figure>
            <a href={ImgExample21} target="_blank"><img src={ImgExample21} border="0" /></a>
            <figcaption>Site Goal Selected</figcaption>
          </figure>         
          <figure>
            <a href={ImgExample22} target="_blank"><img src={ImgExample22} border="0" /></a>
            <figcaption>Select your Template</figcaption>
          </figure>
          <figure>
            <a href={ImgExample23} target="_blank"><img src={ImgExample23} border="0" /></a>
            <figcaption>View Template and different dimensions</figcaption>
          </figure>
          <figure>
            <a href={ImgExample06} target="_blank"><img src={ImgExample06} border="0" /></a>
            <figcaption>Upload logo and change branding (colors and fonts)</figcaption>
          </figure>
          <figure>
            <a href={ImgExample24} target="_blank"><img src={ImgExample24} border="0" /></a>
            <figcaption>How To video</figcaption>
          </figure>
          <figure>
            <a href={ImgExample25} target="_blank"><img src={ImgExample25} border="0" /></a>
            <figcaption>Steps left to finish setup</figcaption>
          </figure>                   
        </div>
      </div>
      <div className="Content">
        <h3>Outcome and Lessons</h3>
        <p>This product eliminated the development team in the site setup process reducing overall costs. It provided immediate site setup and improved customer satisfaction. The renewal rate increased by 50%.</p>
        <p>Once we got the customers into the product sooner it had an effect of more questions and comments. That increased the stress on the customer-facing teams but provided us with quicker and more relevant feedback on the product and services. This allowed us to tackle clients’ needs much faster and led to providing better training, documentation, and expedited the creation of the Help Center project.</p>
      </div>

      <div className="Content">
        <h3>Source Files & Prototypes</h3>
        <p>Mockups and Prototypes were created in Figma. These files were copied over from work account. Files and projects would normally be organized differently.</p>
        <p>
          <ul>
            <li><a href="https://www.figma.com/file/mYGutOE4hYGIaHs5XIFTfM/Onboarding-Mockups?node-id=0%3A1" target="blank">Mockups</a> - Site creation process and onboarding. <a href="https://www.figma.com/proto/mYGutOE4hYGIaHs5XIFTfM/Onboarding-Mockups?node-id=15398%3A1582&viewport=827%2C240%2C0.08919214457273483&scaling=min-zoom" target="_blank">Click Here</a> for interactive prototype.</li>
          </ul>
        </p>
      </div>  

      <CSFooter
            titleprevious="Help Center"
            pageprevious="/helpcenter"
            titlenext="Web Site Editor"
            pagenext="/convertly-site-editor"
      />

    </section>


  )

export default SiteWizard