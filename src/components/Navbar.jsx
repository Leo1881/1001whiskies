import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../styles/Navbar.css';
import logo from '../assets/images/logodark.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <div className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li>
          <HashLink smooth to="/#copy" onClick={() => setIsOpen(false)}>About Us</HashLink>
        </li>
        <li>
          <HashLink smooth to="/#events" onClick={() => setIsOpen(false)}>Events</HashLink>
        </li>
        <li>
          <HashLink smooth to="/#contact" onClick={() => setIsOpen(false)}>Contact</HashLink>
        </li>
        <li><Link to="/whiskeys" onClick={() => setIsOpen(false)}>Whiskies</Link></li>
        <li><Link to="/members" onClick={() => setIsOpen(false)}>Members</Link></li>
        <li><Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
