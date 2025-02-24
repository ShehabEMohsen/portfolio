import React from "react";
import Tick from "../../assets/tick.png";
import "./parts.css";

const Snackbar: React.FC<{ show: boolean }> = ({ show }) => {
  return (
    <div
      className={`snackbar ${
        show ? "show" : ""
      } bg-[#d6c9e7] fixed bottom-20 flex flex-row gap-5 justify-center items-center w-1/5 h-16 rounded-lg text-darkpurple`}
    >
      <div className="text-[#5E5DF0] font-bold text-xl">Email Copied</div>
      <div className="w-6">
        <img src={Tick} />
      </div>
    </div>
  );
};

export default Snackbar;
