import React from 'react';
import CSFooter from './CSFooter';
import ImgExample01 from '../assets/ecomm-example-01.png';
import ImgExample02 from '../assets/collection-item-01.png';
import ImgExample03 from '../assets/product-details-01.png';
import ImgExample04 from '../assets/checkout.png';
import ImgExample05 from '../assets/product-details-admin-01.png';
import ImgExample06 from '../assets/desktop-shopping-checkout-01.png';
import ImgExample07 from '../assets/desktop-shopping-cart-01.png';
import ImgExample08 from '../assets/mobile-product-page-02.png';
import ImgExample09 from '../assets/mobile-order-summary-02.png';
import ImgExample10 from '../assets/mobile-checkout-01.png';
import ImgExample11 from '../assets/mobile-order-summary-01.png';
import ImgExample12 from '../assets/mobile-account-page-04.png';
import ImgExample13 from '../assets/mobile-account-order-history-01.png';
import ImgExample14 from '../assets/ecomm-favs-01.png';

import './CSTemplate.css';

const EcommTemplate = () => (
    <section>
      <div className="Head ecomm">
        <h1>Ecommerce System</h1>
        <h2>Design Platform for creating and selling products on client websites.</h2>
        <figure>
          <img src={ImgExample01} border="0" />
          <figcaption>Editor Screen Shot</figcaption>
        </figure>
      </div>

      <div className="Content">
        <h3>Overview</h3>
        <p>Our primary product is a Contact Management System (CMS) for small to medium-sized businesses. Create a responsive website template that incorporates eCommerce functionality.</p>
        <h3>Problem</h3>
        <p>So many small to medium-sized businesses lack a web solution. Convertly is looking to address that. With a web presence comes the challenges of selling your products online to everyone on multiple platforms and devices. More people with access to your products and service will increase the business’s revenue and brand.</p>
        <h3>Goal</h3>
        <p>Create a site template that is responsive (the content of the site adjusts based off the size of the device you are viewing) and includes the option for selling products and services online.</p>
        <h3>My Role</h3>
        <p>Research, User Flow, Visual Design/Mockups, Prototyping</p>
      </div>

      <div className="ExampleImages">
        <div>
          <figure>
            <a href={ImgExample02} target="_blank"><img src={ImgExample02} border="0" /></a>
            <figcaption>Product Filter</figcaption>
          </figure>
          <figure>
            <a href={ImgExample03} target="_blank"><img src={ImgExample03} border="0" /></a>
            <figcaption>Product Details</figcaption>
          </figure>
        </div>
      </div>

      <div className="Content">
        <h3>Process</h3>
        <p>The initial design of this template was given a short turnaround time. I was given 1 week to create the design. This didn’t allow for stuff like wireframing, user research… etc. I did have time for some market research (many years of buying products online and observing design patterns), user flow, and mockups. Furthermore, this all happened during the week between Christmas and New Years’ day. I had no contact with the stakeholders during this time since he was on vacation. I had to work a bit in a bubble to get this done. </p>
        <p>I had the first iteration completed and ready for review after the first week. The stakeholder provided their feedback at that time. I was on the right track but there were more cosmetic changes that were requested. Change a font here, tweak an image there, stuff like that. Since the request was for a more polished mockup changes like these can be something that someone focuses on.</p>
        <p>So after taking the mockups back and making the changes requested I came back with the final product which checked off all the boxes. In the end, the changes that were requested were changes we would intend on the end-user to make themselves so with that I was clear the project designs were a success.</p>
      </div>
      <div className="Content">
        <h3>Desktop Mockups</h3>
      </div> 
      <div className="ExampleImages">
        <div>
          <figure>
            <a href={ImgExample14} target="_blank"><img src={ImgExample14} border="0" /></a>
            <figcaption>Shopping Cart</figcaption>
          </figure>
          <figure>
            <a href={ImgExample04} target="_blank"><img src={ImgExample04} border="0" /></a>
            <figcaption>Checkout Step 1</figcaption>
          </figure>
          <figure>
            <a href={ImgExample06} target="_blank"><img src={ImgExample06} border="0" /></a>
            <figcaption>Checkout Step 1 - White Label</figcaption>
          </figure>
          <figure>
            <a href={ImgExample07} target="_blank"><img src={ImgExample07} border="0" /></a>
            <figcaption>Shopping Cart - White Label</figcaption>
          </figure>
        </div>
      </div>

      <div className="Content">
        <h3>Mobile Mockups</h3>
      </div> 

      <div className="ExampleImages mobile">
        <div>
          <figure>
            <a href={ImgExample08} target="_blank"><img src={ImgExample08} border="0" /></a>
            <figcaption>Product Details</figcaption>
          </figure>
          <figure>
            <a href={ImgExample09} target="_blank"><img src={ImgExample09} border="0" /></a>
            <figcaption>Shopping Cart</figcaption>
          </figure>
          <figure>
            <a href={ImgExample10} target="_blank"><img src={ImgExample10} border="0" /></a>
            <figcaption>Checkout Step 1</figcaption>
          </figure> 
          <figure>
            <a href={ImgExample11} target="_blank"><img src={ImgExample11} border="0" /></a>
            <figcaption>Order Summary</figcaption>
          </figure>
          <figure>
            <a href={ImgExample12} target="_blank"><img src={ImgExample12} border="0" /></a>
            <figcaption>Returning User Login</figcaption>
          </figure> 
          <figure>
            <a href={ImgExample13} target="_blank"><img src={ImgExample13} border="0" /></a>
            <figcaption>Order History</figcaption>
          </figure> 
        </div>
      </div> 

      <div className="Content">
        <h3>Outcome and Lessons</h3>
        <p>Not all projects are going to be successful. This template wasn’t implemented due to resources. The development team didn’t move forward with an eCommerce platform for the first version of the product. Also, the sales team didn’t have a large client base that needed at the time to sell their products online.</p>
        <p>I learned that even though you don’t see your design come to fruition there are positive outcomes. I showed that I was able to turn products out quickly with minimal management and oversight. Also, it was one of the first projects I worked on with the stakeholder who happened to be the Senior VP of Sales and the driving force behind the product I was working on. Getting to see how they worked, their vision for the team as well as their personality was important for establishing a solid foundation going forward.</p>
      </div>

      <div className="Content">
        <h3>Source Files & Prototypes</h3>
        <p>Mockups and Prototypes were created in Figma. These files were copied over from work account. Files and projects would normally be organized differently.</p>
        <p>
          <ul>
            <li><a href="https://www.figma.com/file/0LtkLrzi76ZZsUQSsIKqU9/magicdragon_v2?node-id=0%3A2" target="blank">Branded Ecommerce Template</a> - Desktop Version</li>
            <li><a href="https://www.figma.com/file/0LtkLrzi76ZZsUQSsIKqU9/magicdragon_v2?node-id=0%3A3095" target="blank">Branded Ecommerce - Mobile</a> - All source files pertaining to the Facebook Campaign Creator </li>
            <li><a href="https://www.figma.com/file/X2A2jnDxChNx3Isrmx69vR/Ecomm-Checkout?node-id=105%3A2395" target="blank">Mobile White Label</a> - Mobile and desktop mockup of none branded version that can be used for all clients.</li>
            <li><a href="https://www.figma.com/file/uANf6c0qUvfoxrU1Ylq1vf/Product?node-id=0%3A1" target="blank">Prodcut Details Admin</a> - This was my idea for adding the product and the details to the consumer facing website.</li>
          </ul>
        </p>
      </div>  

      <CSFooter
      titleprevious="Digital Ad System"
      pageprevious="/adtech"
      titlenext="Blog System"
      pagenext="/blog"
    />

    </section>


  )

export default EcommTemplate