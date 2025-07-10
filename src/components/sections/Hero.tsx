import React from "react";
import Person from "../../assets/me2.jpg";
import "./sections.css";
import Socials from "../parts/Socials";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col justify-center ml-20">
        <div className=" text-cyan-950 font-medium text-6xl">
          I'M{" "}
          <div>
            <span className="text-9xl font-bold text-[#5E5DF0] text-wrap">
              Shehab El-Din Mohsen
            </span>
          </div>
        </div>
        <div className="text-cyan-950 font-medium text-4xl mt-3">
          Frontend Developer & Designer
        </div>
        <div className="flex gap-5">
          <button
            className="button-34 mt-7 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300"
            role="button"
            onClick={() => window.scrollTo({ top: document.getElementById('contact')?.offsetTop || 0, behavior: 'smooth' })}
          >
            Contact Me
          </button>
          <button
            className="button-35 mt-7 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300"
            role="button"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '../../assets/resume.pdf'; 
              link.download = 'resume.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            My Resume
          </button>
        </div>
      </div>  
      <div className="flex w-1/3 ml-auto">
      <div className="w-[500px] h-[500px] object-cover rounded-full border-4 border-[#5E5DF0] border-opacity-80 overflow-hidden">
        <img src={Person} alt="Person" />
        </div>
        <div className=" content-end mb-3">
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Hero;
