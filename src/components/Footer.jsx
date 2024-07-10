import React from 'react';
import '../styles/Footer.css';
import logo from '../assets/images/logolight.png'; 

const Footer = () => {
  return (
    <footer className="footer">
      <a href="#hero"><img src={logo} alt="Logo" className="logo" /></a>
      <p>&copy; 2024 1001 Whiskeys. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
