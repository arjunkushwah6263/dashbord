

import React from 'react';
import { Link } from 'react-router-dom';
import './components.css'; 

const Navigation = () => {
  return (
    <nav>
      <div className="nav-container">
      <ul className="navigation">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/services" className="nav-link">Services</Link></li>
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
      </ul>
      </div>
    </nav>
  );
}

export default Navigation;
