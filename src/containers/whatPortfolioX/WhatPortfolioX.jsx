import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatPortfolioX.css";

const WhatPortfolioX = () => (
  <div className="portfolioX__portfolioX section__margin rounded" id="wgpt3">
    <div className="portfolioX__portfolioX-feature">
      <Feature
        title="What is portfolioX"
        classX="text-gradient"
        text="We help developers and non devs create and share their portfolio, help devs share persional projects and their prototype
        in one place by creating account in the platform.
        "
      />
    </div>
    <div className="portfolioX__portfolioX-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      {/* <p>Explore the Library</p> */}
    </div>
    <div className="portfolioX__portfolioX-container">
      <Feature classX="text-gradient" title="Easy to Use" text="Just click and save." />
      <Feature classX="text-gradient" title="Quick" text="Create account with one click." />
      <Feature classX="text-gradient" title="Future" text="Optimistic that this will be the next generation portfolio sharing platform." />
    </div>
  </div>
);

export default WhatPortfolioX;
