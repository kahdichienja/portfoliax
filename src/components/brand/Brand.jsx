import React from "react";
import {
  iconlogo1,
  iconlogo2,
  iconlogo3,
  iconlogo4,
  iconlogo5,
  iconlogo6,
  iconlogo7,
} from "./imports";
import "./brand.css";

const Brand = () => (
  <div className="portfolioX__brand section__padding">
    <div>
      <img src={iconlogo1} />
    </div>
    <div>
      <img src={iconlogo2} />
    </div>
    <div>
      <img src={iconlogo3} />
    </div>
    <div>
      <img src={iconlogo4} />
    </div>
    <div>
      <img src={iconlogo5} />
    </div>
    <div>
      <img src={iconlogo6} />
    </div>
    <div>
      <img src={iconlogo7} />
    </div>
  </div>
);

export default Brand;
