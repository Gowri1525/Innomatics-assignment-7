// src/pages/Contact.js
import React, { useState } from 'react';
import './Contact.css'; // Import your CSS file for styling

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', feedback: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted by ${formData.name}`);
  };

  return (
    <div className="contact-container">
      <h1>FEEDBACK</h1>
      <form onSubmit={handleSubmit} className="feedback-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="input-field"
        />
        <textarea
          name="feedback"
          placeholder="Feedback Description"
          onChange={handleChange}
          className="textarea-field"
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
