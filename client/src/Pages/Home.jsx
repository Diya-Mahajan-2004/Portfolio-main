import React, { useState, useRef } from "react";
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Skills from "../Contents/Skills";
import Project from "../Contents/Project";
import About from "../Contents/About";
import First from "../Contents/First";
/*import Certification from "../Contents/Certification"; */

import "../CSS/Home.css";

function Home() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [containerColor, setContainerColor] = useState("#1D2B64"); // Default container color
  const [showContent, setShowContent] = useState(false); // State to manage visibility of content container

  const projectsRef = useRef(null); // Create a ref for the projects section

  const handleItemClick = (item, color) => {
    setSelectedItem(item);
    setContainerColor(color);
    setShowContent(true); // Show content container on menu item click
  };

  const handleGetStartedClick = () => {
    setSelectedItem("projects");
    setContainerColor("#A07855FF");
    setShowContent(true);
    projectsRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to the projects section
  };

  const renderContent = () => {
    switch (selectedItem) {
      case "projects":
        return <Project />;
      case "skills":
        return <Skills />; // Render the Skills component
      case "about":
        return <About />;
      case "certifications":
        return <Certification />;
      default:
        return <First onGetStartedClick={handleGetStartedClick} />;
    }
  };

  return (
    <div className="container pl-4" style={{ backgroundColor: containerColor }}>
      <div className="sidebar">
        <ul className="menu">
          <li
            onClick={() => handleItemClick("projects", "#A07855FF")}
            className={`menu-item pb-6 ${selectedItem === "projects" && "active"}`}
          >
            Projects
          </li>
          
          <li
            onClick={() => handleItemClick("skills", "#ff609a")}
            className={`menu-item pb-6 ${selectedItem === "skills" && "active"}`}
          >
            Skills
          </li>
          <li
            onClick={() => handleItemClick("about", "#408EC6")}
            className={`menu-item pb-6 ${selectedItem === "about" && "active"}`}
          >
            About
          </li>
          <li
            onClick={() => handleItemClick("certifications", "#6A0572")}
            className={`menu-item pb-6 ${selectedItem === "certifications" && "active"}`}
          >
            Certifications
          </li>
         
        </ul>

        <div className="social-icons static">
          <a
            href="https://www.linkedin.com/in/diya-mahajan-11948b21b/"
            className="icon-wrapper"
            style={{ color: containerColor }}
          >
            <FaLinkedin className="icon bg-white text-[2rem] rounded-full p-1" />
          </a>
          <a
            href="https://github.com/Diya-Mahajan-2004"
            className="icon-wrapper"
            style={{ color: containerColor }}
          >
            <FaGithub className="icon bg-white text-[2rem] rounded-full p-1" />
          </a>
          <a
            href="https://diya-mahajan-2004.github.io/Resume/"
            className="icon-wrapper"
            style={{ color: containerColor }}
          >
            <FaFileAlt className="icon bg-white text-[2rem] rounded-full p-1" />
          </a>
          <a
            href="https://x.com/DiyaMahajan17"
            className="icon-wrapper"
            style={{ color: containerColor }}
          >
            <FaXTwitter className="icon bg-white text-[2rem] rounded-full p-1" />
          </a>
        </div>
      </div>
      <div className="content-container">
        {renderContent()}
        <div ref={projectsRef}></div> {/* Ref for the projects section */}
      </div>
    </div>
  );
}

export default Home;
