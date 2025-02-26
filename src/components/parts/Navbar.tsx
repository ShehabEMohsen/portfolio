import React, { useState } from "react";
import Logo from "../../assets/logo.png";

const Navbar: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState("Home");
  const [hoveredPage, setHoveredPage] = useState("");

  const handleLinkClick = (page: string) => {
    setSelectedPage(page);
  };

  const handleMouseEnter = (page: string) => {
    setHoveredPage(page);
  };

  const handleMouseLeave = () => {
    setHoveredPage("");
  };

  const pageStyle = (link: string) => {
    if (selectedPage === link) {
      return "nav-pages font-semibold text-darkpurple text-xl translate-y-2";
    } else if (hoveredPage === link) {
      return "font-semibold text-greypurple text-xl hover:text-darkpurple transition ease-in-out translate-y-2";
    } else {
      return "font-semibold text-greypurple text-xl hover:text-darkpurple transition ease-in-out";
    }
  };

  return (
    <div className="flex flex-row bg-background shadow-md fixed w-full z-50">
      <div className="w-16 ml-20 mt-3">
        <img src={Logo} />
      </div>
      <div className="flex w-5/6 flex-row justify-center">
        <div className="flex justify-between content-between w-96 mt-6">
          <a
            href="#home"
            // className="nav-pages font-semibold text-darkpurple text-xl"
            onMouseEnter={() => handleMouseEnter("Home")}
            onMouseLeave={() => handleMouseLeave()}
            className={`${pageStyle("Home")}`}
            onClick={() => handleLinkClick("Home")}
          >
            Home
          </a>
          <a
            href="#skills"
            // className="nav-pages font-semibold text-darkpurple text-xl"
            onMouseEnter={() => handleMouseEnter("Skills")}
            onMouseLeave={() => handleMouseLeave()}
            className={`${pageStyle("Skills")}`}
            onClick={() => handleLinkClick("Skills")}
          >
            Skills
          </a>
          <a
            href="#projects"
            // className="font-semibold text-greypurple text-xl hover:text-darkpurple"
            onMouseEnter={() => handleMouseEnter("Projects")}
            onMouseLeave={() => handleMouseLeave()}
            className={`${pageStyle("Projects")}`}
            onClick={() => handleLinkClick("Projects")}
          >
            Projects
          </a>
          <a
            href="#contact"
            // className="font-semibold text-greypurple text-xl hover:text-darkpurple"
            onMouseEnter={() => handleMouseEnter("Contact")}
            onMouseLeave={() => handleMouseLeave()}
            className={`${pageStyle("Contact")}`}
            onClick={() => handleLinkClick("Contact")}
          >
            Contact
          </a>
        </div>
      </div>
      <div className="w-1/7"></div>
    </div>
  );
};

export default Navbar;
