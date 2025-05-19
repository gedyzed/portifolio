import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const service_Id = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const template_Id = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const public_key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = ({darkMode}) => {
  const [status, setStatus] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
          .sendForm(service_Id, template_Id, form.current, {
            publicKey: public_key,
          })
          .then(
            () => {
              setStatus("Message sent!");
              console.log("success!")  
            },
            (error) => {
              setStatus("Message failed!")
              console.log("message failed", error.text)
            },
          );

  };

  return (
    <section id="email-form" className={`pt-5 pb-5 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
    <div className="container">
      <div className="row justify-content-center">
        <div className={`col-md-8 p-4 border rounded-2 shadow ${darkMode ? 'bg-dark border-secondary' : 'bg-light border-white'}`}> 
          <h2 className="text-center mb-4">Send me an Email</h2>

          {/* Email Form */}
          <form onSubmit={sendEmail} ref={form}>
            <div className="row mb-3">
              <label htmlFor="name" className={`col-sm-3 col-form-label text-end ${darkMode ? 'text-light' : 'text-dark'}`}>Name:</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className={`form-control ${darkMode ? 'bg-dark text-light border-light' : 'bg-white text-dark border-dark'}`}
                  id="name"
                  name="name"
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="email" className={`col-sm-3 col-form-label text-end ${darkMode ? 'text-light' : 'text-dark'}`}>Email:</label>
              <div className="col-sm-9">
                <input
                  type="email"
                  className={`form-control ${darkMode ? 'bg-dark text-light border-light' : 'bg-white text-dark border-dark'}`}
                  id="email"
                  name="email"
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="message" className={`col-sm-3 col-form-label text-end ${darkMode ? 'text-light' : 'text-dark'}`}>Message:</label>
              <div className="col-sm-9">
                <textarea
                  className={`form-control ${darkMode ? 'bg-dark text-light border-light' : 'bg-white text-dark border-dark'}`}
                  id="message"
                  name="message"
                  rows="4"
                  required
                />
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className={`btn ${darkMode ? 'btn-light' : 'btn-primary'}`}>Send Message</button>
            </div>
          </form>

          {status && <div className="mt-3 text-center text-success">{status}</div>}
        </div>
      </div>
    </div>
  </section>
  );
};

export default Contact;
