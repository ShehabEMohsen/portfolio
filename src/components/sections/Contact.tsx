import React, { useState } from "react";
import "./sections.css";
import Email from "../../assets/email.svg";
import LinkedIn from "../../assets/contact-linkedin.svg";
import Location from "../../assets/location.svg";
import Snackbar from "../parts/Snackbar";

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const clickCopy = () => {
    navigator.clipboard.writeText("shehabmohsenhamed@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col pb-12 h-screen justify-center">
      <div className="w-full h-96 bg-[#d6c9e7]">
        <div>
          <div className="flex flex-row justify-between">
            <div className="border border-t-4 border-r-0 border-l-0 border-b-0 border-solid border-[#5E5DF0] w-[30%] mb-4"></div>
            <div className=" font-bold text-6xl text-darkpurple -mt-10">
              Contact me
            </div>
            <div className="border border-t-4 border-r-0 border-l-0 border-b-0 border-solid border-[#5E5DF0] w-[30%] mb-4"></div>
          </div>
        </div>
        <div className="flex flex-col h-full justify-center">
          <div className="flex flex-row justify-center gap-3">
            <div className="flex justify-center gap-3 w-80 px-12 py-4 rounded-xl text-center bg-background text-xl font-semibold text-[#080341]">
              <div className="">
                <img src={Location} alt="Location" />
              </div>
              <div>Cairo, Egypt</div>
            </div>
            <a
              href="https://www.linkedin.com/in/shehab-eldin-mohsen/"
              target="_blank"
            >
              <div className="flex justify-around w-fit px-12 py-4 rounded-xl text-center bg-background text-xl font-semibold text-[#080341]">
                <div className="mr-3">
                  <img src={LinkedIn} alt="LinkedIn" />
                </div>
                <div>Shehab ElDin Mohsen</div>
              </div>
            </a>
          </div>
          <div className="flex justify-center mt-5">
            <div
              className="flex justify-around w-fit px-12 py-4 rounded-xl text-center bg-background text-xl font-semibold text-[#080341] cursor-pointer"
              onClick={clickCopy}
            >
              <div className="mr-2">
                <img src={Email} alt="Email" />
              </div>
              <div>shehabmohsenhamed@gmail.com</div>
            </div>
            {/* </a> */}
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="border border-t-4 border-r-0 border-l-0 border-b-0 border-solid border-[#5E5DF0] w-[40%] mb-4"></div>
        <div className="border border-t-4 border-r-0 border-l-0 border-b-0 border-solid border-[#5E5DF0] w-[40%] mb-4"></div>
      </div>

      {copied && (
        <div className="flex justify-center">
          <Snackbar show={copied} />
        </div>
      )}
    </div>
  );
};

export default Contact;
