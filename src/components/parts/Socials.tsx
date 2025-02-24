import React from "react";
import Github from "../../assets/github.svg";
import LinkedIn from "../../assets/linkedin.svg";

const Socials: React.FC = () => {
  return (
    <div className="flex flex-col bg-transparent align-bottom w-full">
      <div className="border border-l-4 border-r-0 border-t-0 border-b-0 border-solid border-[#5E5DF0] h-44 ml-10 mb-4"></div>
      <a href="https://github.com/ShehabEMohsen" target="_blank">
        <img
          className="w-20 mb-3 hover:scale-125 transition-all duration-300"
          src={Github}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/shehab-eldin-mohsen/"
        target="_blank"
      >
        <img
          className="w-20 hover:scale-125 transition-all duration-300"
          src={LinkedIn}
        />
      </a>
    </div>
  );
};

export default Socials;
