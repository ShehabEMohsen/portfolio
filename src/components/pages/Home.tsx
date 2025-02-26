import React from "react";
import Hero from "../sections/Hero";
import Navbar from "../parts/Navbar";
import SkillsSection from "../sections/SkillsSection";
// import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import FadeInSection from "../parts/FadeInSection";
import "./pages.css";

const Home: React.FC = () => {
  return (
    <div className="bg-background w-full h-full">
      <div className="h-screen flex flex-col justify-between">
        <Navbar />
        <div className="sec1 flex flex-col h-full justify-around" id="home">
          <Hero />

          {/* <About /> */}
        </div>
      </div>
      <div className="sec w-full" id="skills">
        <SkillsSection />
      </div>

      <div className="sec" id="projects">
        <Projects />
      </div>

      <div className="sec w-full" id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
