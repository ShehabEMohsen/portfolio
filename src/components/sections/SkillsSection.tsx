import React from "react";
import "./sections.css";
import Skills from "../parts/Skills";
import HTMLCSS from "../../assets/html-svg (1).svg";
import ReactImg from "../../assets/react.svg";
import TS from "../../assets/typescript.svg";
import JS from "../../assets/javascript.svg";
// import Tailwind from "../../assets/tailwind.svg";
import Figma from "../../assets/figma.svg";
import Vue from "../../assets/vue.svg";
import Next from "../../assets/Next.js.svg";
import Tailwind from "../../assets/Tailwind CSS.svg";

const SkillsSection: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-full flex justify-center font-bold text-5xl text-darkpurple mt-16">
        My Skills
      </div>
      <div className="grid grid-cols-4 mt-6 w-3/4">
        <Skills photo={HTMLCSS} name={"HTML & CSS"} />
        <Skills photo={Vue} name={"Vue"} />
        <Skills photo={ReactImg} name={"React"} />
        <Skills photo={Next} name={"NextJS"} />
        <Skills photo={Tailwind} name={"Tailwind CSS"} />
        <Skills photo={TS} name={"Typescript"} />
        <Skills photo={JS} name={"Javascript"} />
        <Skills photo={Figma} name={"Figma"} />
      </div>
    </div>
  );
};

export default SkillsSection;
