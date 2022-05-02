import React from 'react'
import './contact.css'
import {RiMessengerLine} from 'react-icons/ri'
import {RiWhatsappLine} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wsltqwd', 'template_w8i5ivd', form.current, '9wsDQF8KUksMk4oQx')

    e.target.reset()
    
  };

  return (
    <section id='contact'>
      <h5>Let's Talk</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Luis Calderon</h5>
            <a href="https://m.me/Captwinter" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiWhatsappLine className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+506 86703120</h5>
            <a href="https://api.whatsapp.com/send?phone=50686703120" target="_blank">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact