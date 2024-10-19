import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <footer className="footer">
     <div className="footer-content">
      <p>© 2024 SKILL ACADEMY</p>
      <ul className="footer-link">
        <li><a href="/terms-of-service">Terms of Service</a></li>
        <li><a href="/privacy-policy">Privacy Policy</a></li>
      </ul>
    </div>
    
    <div className="social">
         <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
         </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
      </a>
       <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
       <a href="mailto:support@skillacademy.com">
        <FontAwesomeIcon icon={faEnvelope} />
         </a>
     </div>
  </footer>
  );
};

export default Footer