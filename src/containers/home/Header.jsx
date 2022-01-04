import React from "react";
import "./header.css";
// import { SiEthereum } from "react-icons/si";
// import { BsInfoCircle } from "react-icons/bs";
import people from "../../assets/people.png";
// import logoicon from "../../assets/logoicon.png";
import possibilityImage from "../../assets/oclus2.png";

const Header = () => (
  <div className="portfolioX__header section__padding pt-20 pb-40" id="home">
    <div className="portfolioX__header-content">
      <h1 className="gradient__text"> PotfolioX</h1>
      <p className="text-3xl sm:text-5xl text-white text-gradient py-1">
        Let&apos;s Showcase our strength with PotfolioX.
        This where i Showcase my personal and client projects that are online <br />
      </p>
      <div className="portfolioX__header-content__input">
        <button type="button" className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">Get Started</button>
      </div>

      <div className="portfolioX__header-content__people">
        <img src={people} />
        <p>1,600 people are using Portfolio X in last 24 hours</p>
      </div>
    </div>
    <div className="portfolioX__header-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
  </div>
);

export default Header;
