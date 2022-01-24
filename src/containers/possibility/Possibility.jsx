import React from "react";
import possibilityImage from "../../assets/NRP-Cross_Post_Oculus_5year_anniversary_banner.png";
import "./possibility.css";

const Possibility = () => (
  <div className="portfolioX__possibility section__padding" id="possibility">
    <div className="portfolioX__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="portfolioX__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination.</h1>
      <p>Yeah, and this is the place where you can create and image before you...</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
