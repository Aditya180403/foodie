import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-content">
        <div className="footer-section">
          <h1 className='f-footer'>Foodie's</h1>
          <p>Delicious food served fresh!</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/chefs">Chefs</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
      </div>
      <hr /> 
      <div className="footer-bottom">
        <p>&copy; 2023 Foodie's. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
