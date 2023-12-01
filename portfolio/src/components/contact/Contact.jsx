import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
// import { SiMessenger } from 'react-icons/si';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_rn2fbvf',
        'template_s8ooyme',
        form.current,
        'Xg_ury3HuE6fnlG8a'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>E-mail</h4>
            <h5>rachana.p1398@gmail.com</h5>
            <a
              href="mailto:rachana.p1398@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
                Drop a mail{' '}
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+919886926778</h5>
            <a
              href="https://api.whatsapp.com/send?phone=9886926778"
              target="_blank"
              rel="noreferrer"
            >
                Leave a message{' '}
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your E-mail" required />
          <textarea
            name="message"
            // cols="25"
            rows="7"
            placeholder="Your Message "
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
