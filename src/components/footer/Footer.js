import React from 'react';

// import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

import "./Footer.css";

function Footer() {
    return (
        <footer class="footer">
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <ul class="social-icon">
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <FaFacebookF />
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <FaTwitter />
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <FaLinkedinIn />
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <FaInstagram />
        </a></li>
    </ul>
    <p>&copy;2021 aNumak & Company</p>
  </footer>
    )
}

export default Footer
