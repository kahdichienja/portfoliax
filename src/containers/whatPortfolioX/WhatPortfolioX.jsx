import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatPortfolioX.css";

const WhatPortfolioX = () => (
  <div className="portfolioX__portfolioX section__margin rounded" id="wgpt3">
    <div className="portfolioX__portfolioX-feature">
      <Feature
        title="What is GPT-3"
        classX="text-gradient"
        text="We so opinion friends me message as delight. Whole front do of
        plate heard oh ought. His defective nor convinced residence own.
        Connection has put impossible own apartments boisterous. At
        jointure ladyship an insisted so humanity he. Friendly
        bachelor entrance to on by."
      />
    </div>
    <div className="portfolioX__portfolioX-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="portfolioX__portfolioX-container">
      <Feature classX="text-gradient" title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <Feature classX="text-gradient" title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      <Feature classX="text-gradient" title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
    </div>
  </div>
);

export default WhatPortfolioX;
