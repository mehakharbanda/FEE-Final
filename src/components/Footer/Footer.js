import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-col">
        <h3>Services</h3>
        <ul>
          <li><a href="/email-marketing">Email Marketing</a></li>
          <li><a href="/campaigns">Campaigns</a></li>
          <li><a href="/brandings">Brandings</a></li>
        </ul>
      </div>

      <div className="footer-col">
        <h3>About</h3>
        <ul>
          <li><a href="/our-story">Our Story</a></li>
          <li><a href="/team">Team</a></li>
          <li><a href="/brandings">Brandings</a></li>
        </ul>
      </div>

      <div className="footer-col">
        <h3>Help</h3>
        <ul>
          <li><a href="/faqs">FAQs</a></li>
          <li><a href="/contact-us">Contact Us</a></li>
        </ul>
      </div>

      <div className="footer-col">
        <h3>Follow Us</h3>
        <div className="links">
          <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
          <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
          <a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
