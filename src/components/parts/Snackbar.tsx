import React from "react";
import Tick from "../../assets/tick.svg";
import "./parts.css";

const Snackbar: React.FC<{ show: boolean }> = ({ show }) => {
  return (
    <div
      className={`snackbar ${
        show ? "show z-30" : ""
      } bg-[#d6c9e7] shadow-md shadow-[#5d5df054] fixed bottom-20 flex flex-row gap-5 justify-center items-center w-1/5 h-16 rounded-lg text-darkpurple`}
    >
      <div className="text-[#5E5DF0] font-bold text-xl z-20">Email Copied</div>
      <div className="w-6 z-20">
        <img src={Tick} />
      </div>
    </div>
  );
};

export default Snackbar;
