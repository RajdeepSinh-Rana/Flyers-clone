import React from 'react';
import ScrollingNavbar from '../components/ScrollingNavbar';
import Navbar from '../components/Navbar';
import './ContactPage.css';  // Import a CSS file for styling

const ContactPage = () => {
  return (
    <div className="contact-page">
     
      <Navbar />
      <div className="contact-content">
        <h1>Contact</h1>
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="6" required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
