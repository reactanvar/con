import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer wrapper">
      <div className="footer-logo">
        <img src="https://www.99bikes.com.au/media/wysiwyg/homepage/557x279-Logo-Cube.png" alt="" />
      </div>
      <ul className="footer-links">
        <li><NavLink to="/">Kompaniya</NavLink></li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-copyright">
        <hr />
        <p>Mualliflik huquqi @ 2023 - Barcha huquqlar himoyalangan</p>
      </div>
    </div>
  );
};

export default Footer;
