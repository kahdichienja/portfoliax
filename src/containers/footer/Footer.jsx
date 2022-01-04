import React from "react";
import gpt3Logo from "../../assets/logo.png";
import "./footer.css";

const Footer = () => (
  <div className="portfolioX__footer section__padding">
    <div className="portfolioX__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="portfolioX__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="portfolioX__footer-links">
      <div className="portfolioX__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
      </div>
      <div className="portfolioX__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="portfolioX__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="portfolioX__footer-links_div">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="portfolioX__footer-copyright">
      <p>@2022 GPT-3. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
