// import { SiEthereum } from "react-icons/si";
// import { BsInfoCircle } from "react-icons/bs";

const PXIDCard = ({ icon, title, pxid, logoicon }) => (
  <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
    <div className="flex justify-between flex-col w-full h-full">
      <div className="flex justify-between items-start">
        <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
          <img src={logoicon} />
        </div>
        {icon}
      </div>
      <div>
        <p className="text-white font-light text-sm">
          {title}
        </p>
        <p className="text-white font-semibold text-lg mt-1">
          {pxid}
        </p>
      </div>
    </div>
  </div>
);

export default PXIDCard;
