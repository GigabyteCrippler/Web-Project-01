import React from 'react';
// import { Link } from 'react-router-dom';
import './App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaBeer, FaEnvelope , FaTwitter , FaFacebook } from 'react-icons/fa';
import {FiFacebook} from 'react-icons/fi';






  //  <IconContext.Provider value={{ className: 'react-icons' }}>
const Footer = () => (
  <section id="sidebar">
    <section className="footer">

          <a>
<FaEnvelope/>  <FiFacebook/>  <FaTwitter/>  <FaFacebook/>
          </a>

      <p className="copyright">&copy; GigabyteCrippler</p>
    </section>
  </section>
);

export default Footer;
