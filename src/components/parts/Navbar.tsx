import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.png";

const Navbar: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState("Home");
  const [hoveredPage, setHoveredPage] = useState("");
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update navbar visibility
      if (Math.abs(currentScrollY - lastScrollY) > 50) {
        setIsHidden(currentScrollY > lastScrollY);
        setLastScrollY(currentScrollY);
      }

      // Update active section
      updateActiveSection();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const updateActiveSection = () => {
    const sections = [
      { id: 'home', offset: 0 },
      { id: 'skills', offset: 100 },
      { id: 'projects', offset: 200 },
      { id: 'contact', offset: 300 }
    ];

    const currentScroll = window.scrollY;
    
    // Find the section that should be active
    const activeSection = sections.find(section => {
      const sectionElement = document.getElementById(section.id);
      if (!sectionElement) return false;
      
      const sectionTop = sectionElement.offsetTop - section.offset;
      const sectionBottom = sectionTop + sectionElement.offsetHeight;
      
      // Check if we're in the section
      return currentScroll >= sectionTop && currentScroll < sectionBottom;
    });

    if (activeSection) {
      setSelectedPage(activeSection.id.charAt(0).toUpperCase() + activeSection.id.slice(1));
    }
  };

  // const handleLinkClick = (page: string) => {
  //   setSelectedPage(page);
  // };

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
    <div className={`flex flex-row bg-background shadow-md fixed w-full z-50 transition-all duration-300 ${isHidden ? 'transform translate-y-[-100%]' : 'transform translate-y-0'}`}>
      <div className="w-16 ml-20 mt-3">
        <img src={Logo} />
      </div>
      <div className="flex w-5/6 flex-row justify-center">
        <div className="flex justify-between content-between w-96 mt-6">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              const targetElement = document.getElementById('home');
              if (targetElement) {
                window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: 'smooth'
                });
              }
            }}
            onMouseEnter={() => handleMouseEnter("Home")}
            onMouseLeave={() => handleMouseLeave()}
            className={`${pageStyle("Home")}`}
          >
            Home
          </a>
          <a
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              const targetElement = document.getElementById('skills');
              if (targetElement) {
                window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: 'smooth'
                });
              }
            }}
            onMouseEnter={() => handleMouseEnter("Skills")}
            onMouseLeave={() => handleMouseLeave()}
            className={`${pageStyle("Skills")}`}
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              const targetElement = document.getElementById('projects');
              if (targetElement) {
                window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: 'smooth'
                });
              }
            }}
            onMouseEnter={() => handleMouseEnter("Projects")}
            onMouseLeave={() => handleMouseLeave()}
            className={`${pageStyle("Projects")}`}
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const targetElement = document.getElementById('contact');
              if (targetElement) {
                window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: 'smooth'
                });
              }
            }}
            onMouseEnter={() => handleMouseEnter("Contact")}
            onMouseLeave={() => handleMouseLeave()}
            className={`${pageStyle("Contact")}`}
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
