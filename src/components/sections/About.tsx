import React from "react";
import "./sections.css";

const About: React.FC = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col ml-20">
        <div className="text-cyan-950 font-bold text-5xl mb-12">About</div>
        <div className="flex flex-row ">
          <div className="border border-t-4 border-solid border-[#5E5DF0] h-0 w-56 mt-2"></div>
          <div className="pr-32 pl-3 text-2xl font-semibold">
            Detail-oriented Frontend Developer with a solid foundation in web
            development and experience in modern web technologies. Proven
            ability to build and maintain responsive websites. Familiar with
            UI/UX design principles. Seeking to leverage my skills and
            experience to contribute to innovative projects and help drive
            success in everything.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
