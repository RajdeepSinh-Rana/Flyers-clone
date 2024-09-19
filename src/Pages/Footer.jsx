// Footer.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-container">
        <img src="https://drinkflyers.com/cdn/shop/files/Flyers_Monogram.png?v=1712684119&width=120" alt="Logo" className="logo" />
      </div>

      <div className="footer-sections">
        {/* First Section */}
        <div className="footer-section1">
          <ul>
            <li>Privacy Policy</li>
            <li>Shipping & Returns</li>
            <li>FDA Disclaimer</li>
            <li>Terms & Conditions</li>
            <li>COA</li>
          </ul>
        </div>

        {/* Second Section */}
        <div className="footer-section1">
          <ul>
            <li>SHOP ALL</li>
            <li>FAQ</li>
            <li>CONTACT</li>
          </ul>
        </div>

        {/* Third Section */}
        <div className="footer-section3 stay-awhile">
          <p className="color-font">STAY AWHILE & SAVE</p>
        </div>

        {/* Fourth Section - Social Media Icons */}
        <div className="footer-section4 social-media">
          <p className="color1">IN GOOD COMPANY @DRINKFLYERS</p>
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTiktok} className="social-icon" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
