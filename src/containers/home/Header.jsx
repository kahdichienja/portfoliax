import React from "react";
import "./header.css";
// import { SiEthereum } from "react-icons/si";
// import { BsInfoCircle } from "react-icons/bs";
import people from "../../assets/people.png";
// import logoicon from "../../assets/logoicon.png";
import possibilityImage from "../../assets/possibility.png";

const Header = () => (
  <div className="portfolioX__header section__padding" id="home">
    <div className="portfolioX__header-content">
      <h1 className="gradient__text"> PotfolioX</h1>
      <p className="text-3xl sm:text-5xl text-white text-gradient py-1">
        Let&apos;s Showcase our strength with PotfolioX. <br />
        Similar to static http servers, Vite has the concept of a root directory which your <br />
        files are served from. You will see it referenced as throughout the rest of the docs. <br />
        Absolute URLs in your source code will be resolved using the project root as base,
      </p>
      <div className="portfolioX__header-content__input">
        <button type="button" className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">Get Started</button>
      </div>

      <div className="portfolioX__header-content__people">
        <img src={people} />
        <p>1,600 people are using portfoliox in last 24 hours</p>
      </div>
    </div>
    <div className="portfolioX__header-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
  </div>
);

export default Header;
