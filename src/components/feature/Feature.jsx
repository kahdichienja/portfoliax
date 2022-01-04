import React from "react";
import "./feature.css";

const Feature = ({ title, text, classX }) => (
  <div className="portfolioX__features-container__feature">
    <div className="portfolioX__features-container__feature-title">
      <div />
      <h1 className={`${classX}`}>{title}</h1>
    </div>
    <div className="portfolioX__features-container_feature-text">
      <p className={`${classX}`}>{text}</p>
    </div>
  </div>
);

export default Feature;
