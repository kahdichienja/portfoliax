import React from "react";
import "./header.css";
// import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import people from "../../assets/people.png";
import logoicon from "../../assets/logoicon.png";

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
      {/* <img src={logoicon} />
      <SiEthereum fontSize={21} color="#fff" />
       */}

      <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
        <div className="flex justify-between flex-col w-full h-full">
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
              <img src={logoicon} />
            </div>
            <BsInfoCircle fontSize={17} color="#fff" />
          </div>
          <div>
            <p className="text-white font-light text-sm">
              John Doe Smith
            </p>
            <p className="text-white font-semibold text-lg mt-1">
              PXID: 2344 **** **** **** 1233
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
