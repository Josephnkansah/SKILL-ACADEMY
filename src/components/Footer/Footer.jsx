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
        <li><a href="/privacy-policy">Privacy Policy</a></li>
        <li><a href="/terms-of-service">Terms of Service</a></li>
        
      </ul>
    </div>
    {/* Social Media Links Needed Section */}
    <div className="social">
             <a href="mailto:jnkansahoseph@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} />
         </a>
             <a href="https://www.instagram.com/youngma_90/profilecard/?igsh=M2p2bnQxOWtteWIx" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>

        <a href="https://twitter.com/Josephnkansah" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
      </a>
               <a href="https://www.facebook.com/share/Z8GqSauz4JMquVDu/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
         </a>


     </div>
  </footer>
  )
}

export default Footer;
