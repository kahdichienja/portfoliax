import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import { ServiceCard } from "../../components";

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          Services that we
          <br />
          continue to improve
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          The best choice for buying and selling your crypto assets, with the
          various super friendly services we offer
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Security gurantee"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Working arroind the clock to ensure that your premiun projects get secured"
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Quick Sharing"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Personal open share will allow you share link to specific project portfolio"
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Fastest Connection"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Improving the just now connection feature for faster and efficient connection with clients."
        />
      </div>
    </div>
  </div>
);

export default Services;
