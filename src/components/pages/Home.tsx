import React from "react";
import Hero from "../sections/Hero";
import Navbar from "../parts/Navbar";
import SkillsSection from "../sections/SkillsSection";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

const Home: React.FC = () => {
  return (
    <div className="bg-background w-full h-full">
      <div className="h-screen flex flex-col justify-between">
        <Navbar />
        <div className="flex flex-col h-full justify-around">
          <Hero />

          {/* <About /> */}
        </div>
      </div>

      <SkillsSection />

      <Projects />

      <Contact />
    </div>
  );
};

export default Home;
