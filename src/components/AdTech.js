import React from 'react';
import CSFooter from './CSFooter';
import ImgExample01 from '../assets/adtech-hero-01.png';
import ImgExample02 from '../assets/ad-tool-dashboard-01.png';
import ImgExample03 from '../assets/campaign-custom-schedule-01.png';
import ImgExample04 from '../assets/campaign-onboarding-01.png';
import ImgExample05 from '../assets/create_audience_01.png';
import ImgExample06 from '../assets/create-ad-carousel-01.png';
import ImgExample07 from '../assets/google-ad-responsive-08.png';
import ImgExample08 from '../assets/banner-social-medial-selection.png';
import ImgExample09 from '../assets/banner-add-element-02.png';

import './CSTemplate.css';

const AdTech = () => (
    <section>
      <div className="Head adtech">
        <h1>Digital Ad System - Convertly</h1>
        <h2>Creating digital ads and integrate them into Facebook and Google</h2>
        <figure>
          <img src={ImgExample01} border="0" />
          <figcaption>Editor Screen Shot</figcaption>
        </figure>
      </div>

      <div className="Content">
        <h3>Overview</h3>
        <p>The Digital Ad System (referred to internally as AdTech) was an internal ad system at Convertly that allows the user to create a static image banner to use in a google ad placement, a Facebook/Instagram ad spot, or export the image to be used in a 3rd party platform. As well as being able to create a static jpg banner, this platform is integrated into Google and Facebook to allow for a singular location to create digital ads.</p>
        <h3>Problem</h3>
        <p>There are currently 2 web systems to create and maintain digital ad campaigns (Facebook and Google). This means there are 2 different locations to create, view, and maintain campaigns. This can lead to confusion for smaller businesses that are not familiar with the ad platforms. Furthermore, these platforms can be very complex with a learning curve that can intimidate users.</p>
        <h3>Goal</h3>
        <p>Provide small/medium size businesses a product that will allow them to create digital ads and place them in high-trafficked platforms, such as Google and Facebook, without having to leave their website portal. Also, provide them with the tools to review ad stats to see what campaigns are working and which ones need to be adjusted. </p>
        <h3>My Role</h3>
        <p>Research, User Flow & Stories, Visual Design, Interactive Design, Prototyping, User Testing</p>
      </div>

      <div className="ExampleImages">
        <div>
          <figure>
            <a href={ImgExample02} target="_blank"><img src={ImgExample02} border="0" /></a>
            <figcaption>Campaign Dashboard</figcaption>
          </figure>
          <figure>
            <a href={ImgExample03} target="_blank"><img src={ImgExample03} border="0" /></a>
            <figcaption>Set Budget and Schedule</figcaption>
          </figure>
        </div>
      </div>

      <div className="Content">
        <h3>Process</h3>
        <p>Once we have established the problem we were looking to solve I went into the research mode. This required me to sit with sales associates who were working with businesses to create campaigns through the Google and Facebook ad portals. Not only did we have goals for the product but each business and sales rep had individual goals they needed to reach. Businesses need to generate traffic/sales. Sales reps needed to generate traffic for their clients as well as create as many campaigns in as little time as possible to be able to service their clients and generate more. So all of these goals need to align.</p>
        <p>After seeing how the sales rep and client create the campaigns it was time to do it myself. I created campaigns in both Google and Facebook to feel how it is done. I took lots of screenshots and marked up them using Microsoft Edge's web capture feature to note my observations and comments. I used this to create a User Flow for each portal separately. So we have:
          <ul>
            <li>- Creating Banner</li>
            <li>- Creating Google Campaign</li>
            <li>- Creating Facebook/Instagram Campaign</li>
        </ul>
        </p>
        <p>Once the User Flow was established I started on mockups. Since we were using the UI from the existing Convertly product I was able to use existing Figma components to speed up the process. Since the user of the product would-be business owners and sale reps I created a simple wizard setup that required fewer questions and inputs as well as a more extensive form for fine-tuning the campaign allowing for more specific audience targeting. Once this we completed I worked on some prototyping especially to show how the wizard would flow into the campaign creation tool.</p>
      </div> 
      <div className="ExampleImages">
        <div>
          <figure>
            <a href={ImgExample05} target="_blank"><img src={ImgExample05} border="0" /></a>
            <figcaption>Create Audience - Facebook</figcaption>
          </figure>
          <figure>
          <a href={ImgExample04} target="_blank"><img src={ImgExample04} border="0" /></a>
            <figcaption>Campaign Creation Wizard</figcaption>
          </figure>
          <figure>
            <a href={ImgExample06} target="_blank"><img src={ImgExample06} border="0" /></a>
            <figcaption>Create Carousal Ad</figcaption>
          </figure>
          <figure>
            <a href={ImgExample07} target="_blank"><img src={ImgExample07} border="0" /></a>
            <figcaption>Ad Creation Tool - Google</figcaption>
          </figure>
          <figure>
            <a href={ImgExample08} target="_blank"><img src={ImgExample08} border="0" /></a>
            <figcaption>Campaign Creation Step 1</figcaption>
          </figure>
          <figure>
            <a href={ImgExample09} target="_blank"><img src={ImgExample09} border="0" /></a>
            <figcaption>Banner Creation Tool</figcaption>
          </figure> 
        </div>
      </div>
      <div className="Content">
        <h3>Outcome and Lessons</h3>
        <p>Once the product went live we found that the primary user of this platform was our sales reps. The campaign setup process improved by 20% (based off of average setup time). This allowed sales reps to create a website for a business and create digital ad campaigns in 1 portal. That alone would reduce the setup time and helped businesses see the added value of the synergy of a CMS and a Ad Platform. </p>
        <p>This was a huge undertaking for our team as well as myself. Creating a product that is integrated with a 3rd party products keeps you on your toes. Simple changes can "break" the product causing you to constantly communicate with that 3rd party as well as jump back on the product and create a fix ASAP. Constent feedback from the user is essential as with all products.</p>
      </div>

      <div className="Content">
        <h3>Source Files & Prototypes</h3>
        <p>Mockups and Prototypes were created in Figma. These files were copied over from work account. Files and projects would normally be organized differently.</p>
        <p>
          <ul>
            <li><a href="https://www.figma.com/file/jGa3IRLHkN59CrcdVXKzEh/?node-id=0%3A1" target="blank">Banner Creator</a> - Create a static banner image</li>
            <li><a href="https://www.figma.com/file/uxCHby0pzkhQELYVAcP0fS/Google-Ad?node-id=1171%3A40" target="_blank">Campaign Builder</a> - Here is a campaign builder for Google Ads. <a href="https://www.figma.com/proto/uxCHby0pzkhQELYVAcP0fS/Google-Ad?node-id=1171%3A40&scaling=min-zoom" target="_blank">Click Here</a> for prototype.</li>
            <li><a href="https://www.figma.com/file/jGa3IRLHkN59CrcdVXKzEh/?node-id=3025%3A0" target="blank">Responsive Ad Creator</a> - This wizard creates a responsive ad for placement in google or other places</li>
            <li><a href="https://www.figma.com/file/YM14k4sVt89l0EFLQaTjJs/Facebook-Ad" target="blank">Facebook Campaign Creator</a> - All source files pertaining to the Facebook Campaign Creator </li>
            <li><a href="https://www.figma.com/proto/YM14k4sVt89l0EFLQaTjJs/Facebook-Ad?node-id=352%3A2558&viewport=45%2C706%2C0.06493214517831802&scaling=min-zoom" target="blank">FB Audience Prototype</a> - The should be viewed on desktop. This will take you through the audience creation flow.</li>
          </ul>
        </p>
      </div>  

      <CSFooter
      titleprevious="Site Builder"
      pageprevious="/convertly-site-editor"
      titlenext="Ecommerce System"
      pagenext="/ecomm"
    />

    </section>


  )

export default AdTech