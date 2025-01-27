import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = ({darkMode}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Message sent successfully!");
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="email-form" className={`pt-5 pb-5 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
    <div className="container">
      <div className="row justify-content-center">
        <div className={`col-md-8 p-4 border rounded-2 shadow ${darkMode ? 'bg-dark border-secondary' : 'bg-light border-white'}`}> 
          <h2 className="text-center mb-4">Send Us an Email</h2>

          {/* Email Form */}
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <label htmlFor="name" className={`col-sm-3 col-form-label text-end ${darkMode ? 'text-light' : 'text-dark'}`}>Name:</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className={`form-control ${darkMode ? 'bg-dark text-light border-light' : 'bg-white text-dark border-dark'}`}
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className={`btn ${darkMode ? 'btn-light' : 'btn-primary'}`}>Send Message</button>
            </div>
          </form>

          {/* Status Message */}
          {status && <div className="mt-3 text-center text-success">{status}</div>}
        </div>
      </div>
    </div>
  </section>
  );
};

export default Contact;
