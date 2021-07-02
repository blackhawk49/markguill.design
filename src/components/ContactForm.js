import React, {useState} from 'react';
import emailjs from 'emailjs-com';

import './ContactForm.css';

const Result =() =>{
  return(
    <p>Your Message has been successfully sent! I will get back to you ASAP.</p>
  )
}

function ContactForm(props) {
  const [result, showResult] = useState(false);
  const sendEmail=(e)=> {
    e.preventDefault();

    emailjs.sendForm('service_7859cef', 'template_1d7gjdf', e.target, 'user_Ku9vcBUPgyWCUOgtykjKm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }
      );
      e.target.reset();
      showResult(true);
  }

  return (
    <div className="ContactForm">
        <form action="" onSubmit={sendEmail}>
          <fieldset>
            <label>Name</label>
            <input type="text" name="from_name" required />
          </fieldset>
          <fieldset>
            <label>Email</label>
            <input type="email" name="reply_to" required />
          </fieldset>
          <fieldset>
            <label>Questions/Comments</label>
            <textarea rows="8" name="message" required></textarea>
          </fieldset>

          <input className="default" type="submit" value="Send Email"></input>
          
        </form>

    <div className="ContactFormSubmitted">
      {result ? <Result /> : null}
    </div>

    </div>
  );

}

export default ContactForm;
