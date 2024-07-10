
import React from 'react';
import '../styles/ContactSection.css';
import icon1 from '../assets/images/email.png'; 
import icon2 from '../assets/images/phone.png'; 
import icon3 from '../assets/images/whatsapp.png'; 
import contactImage from '../assets/images/contactimage.jpg'; 

const ContactSection = () => {
  return (
    <div className="contact-section">
      <h2>Contact Information</h2>
      <p>If you're eager to join our community of whiskey enthusiasts or have any inquiries, drop us a line, we'd love to welcome you aboard our journey of whiskey exploration and friendship.</p>
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-item">
            <img src={icon1} alt="Icon 1" className="contact-icon" />
            <div className="contact-text">
              <h3>Email</h3>
              <p>info@1001whiskeys.com</p>
              <a href="mailto:info@1001whiskeys.com">Send an Email</a>
            </div>
          </div>
          <div className="contact-item">
            <img src={icon2} alt="Icon 2" className="contact-icon icon-second" />
            <div className="contact-text">
              <h3>Phone</h3>
              <p>(123) 456-7890</p>
              <a href="tel:+1234567890">Call Us</a>
            </div>
          </div>
          <div className="contact-item">
            <img src={icon3} alt="Icon 3" className="contact-icon" />
            <div className="contact-text">
              <h3>Whatsapp</h3>
              <p>(123) 456-7890</p>
              <a href="https://wa.me/1234567890">Send a Whatsapp message</a>
            </div>
          </div>
        </div>
        <div className="contact-image-container">
          <img src={contactImage} alt="Contact" className="contact-image" />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
