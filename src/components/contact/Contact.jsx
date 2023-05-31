import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessageLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1euh7qj', 'template_8kehksf', form.current, 'vo7OEzUI7novtnb5w')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });


      e.target.reset();
  };
  return (
    <section id='contact'>
     <h5>Get In Touch</h5>
     <h2>Contact Me</h2>

     <div className="container contact__container">
      {/* CONTACT OPTIONS */}
      <div className="contact__options">
        {/* CONTACT OPTION: EMAIL */}
        <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>rostandmessi2@gmail.com</h5>
          <a href="mailto:rostandmessi2@gmail.com">Send a Message</a>
        </article>

          {/* CONTACT OPTION: MESSENGER */}
          <article className="contact__option">
        

          {/* CONTACT OPTION: WHATSAPP */}
          <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+23765*****35</h5>
          <a href="https://wa.me/+237653921635">Send a Message</a>
        </article>
      </div>

      {/* FORM SECTION */}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder='Your Full Name' required />
        <input type="email" name="email" placeholder='Your Email' required />
        <textarea name="message" rows="7" required></textarea>
        <button type="submit" className='btn btn-primary'>Send Message</button>
      </form>
     </div>
    </section>
  )
}

export default Contact
