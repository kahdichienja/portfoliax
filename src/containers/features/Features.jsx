import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "You need to connect the dot...",
  },
  {
    title: "Become the master of all",
    text: "Actually no one can't know whether you are that master unless you show them.",
  },
  {
    title: "Show it or am nothing",
    text: "Well if you keep it low, nobody, absolutely no one will know that you know how to do it on the fly. Keep pushing.",
  },
];

const Features = () => (
  <div className="portfolioX__features section__padding" id="features">
    <div className="portfolioX__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="portfolioX__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
