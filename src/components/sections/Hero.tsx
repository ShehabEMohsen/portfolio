import React from "react";
import Person from "../../assets/me2.jpg";
import { motion } from "framer-motion";
import "./sections.css";
import Socials from "../parts/Socials";

const Hero: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 1.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 1, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="flex flex-row"
    >
      <div className="flex flex-col justify-center ml-20">
        <motion.div
          variants={item}
          className="text-cyan-950 font-medium text-6xl"
        >
          I'M{" "}
          <div>
            <span className="text-9xl font-bold text-[#5E5DF0] text-wrap">
              Shehab El-Din Mohsen
            </span>
          </div>
        </motion.div>
        <motion.div
          variants={item}
          className="text-cyan-950 font-medium text-4xl mt-3"
        >
          Frontend Developer & Designer
        </motion.div>
        <motion.div
          variants={item}
          className="flex gap-5"
        >
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
          >
            <a href="/resume.pdf" download="resume.pdf" className="w-full h-full">
              My Resume
            </a>
          </button>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex w-1/3 ml-auto"
      >
        <div className="w-[500px] h-[500px] object-cover rounded-full border-4 border-[#5E5DF0] border-opacity-80 overflow-hidden">
          <img src={Person} alt="Person" />
        </div>
        <div className="content-end mb-3">
          <Socials />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
