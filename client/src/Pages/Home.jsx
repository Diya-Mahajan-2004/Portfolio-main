import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Skills from "../Contents/Skills";
import Project from "../Contents/Project";
import About from "../Contents/About";

import "../CSS/Home.css";

function Home() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [containerColor, setContainerColor] = useState("#535353"); // Default container color
  const [showContent, setShowContent] = useState(false); // State to manage visibility of content container

  const handleItemClick = (item, color) => {
    setSelectedItem(item);
    setContainerColor(color);
    setShowContent(true); // Show content container on menu item click
  };

  const renderContent = () => {
    switch (selectedItem) {
      case "projects":
        return <Project />;
      case "skills":
        return <Skills />; // Render the Skills component
      case "about":
        return <About />;
      default:
        return (
          <div className="default-content">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-gray-800">Welcome to My Portfolio!</h2>
            <p className="text-lg text-center text-gray-600">
              Click on the menu items above to explore my projects, skills, and learn more about me.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="container" style={{ backgroundColor: containerColor }}>
      <div className="sidebar">
        <ul className="menu">
          <li
            onClick={() => handleItemClick("projects", "#A07855FF")}
            className={`menu-item ${selectedItem === "projects" && "active"}`}
          >
            Projects
          </li>
          <li
            onClick={() => handleItemClick("skills", "#ff609a")}
            className={`menu-item ${selectedItem === "skills" && "active"}`}
          >
            Skills
          </li>
          <li
            onClick={() => handleItemClick("about", "#4d84d0")}
            className={`menu-item ${selectedItem === "about" && "active"}`}
          >
            About
          </li>
        </ul>

        <div className="social-icons">
          <a
            href="https://www.linkedin.com"
            className="icon-wrapper"
            style={{ color: containerColor }}
          >
            <FaLinkedin className="icon bg-white text-[2rem] rounded-full p-1" />
          </a>
          <a
            href="https://www.github.com"
            className="icon-wrapper"
            style={{ color: containerColor }}
          >
            <FaGithub className="icon bg-white text-[2rem] rounded-full p-1" />
          </a>
          <a
            href="https://example.com/resume.pdf"
            className="icon-wrapper"
            style={{ color: containerColor }}
          >
            <FaFileAlt className="icon bg-white text-[2rem] rounded-full p-1" />
          </a>
          <a
            href="https://www.twitter.com"
            className="icon-wrapper"
            style={{ color: containerColor }}
          >
            <FaXTwitter className="icon bg-white text-[2rem] rounded-full p-1" />
          </a>
        </div>
      </div>
      <div className="content-container">{renderContent()}</div>
    </div>
  );
}

export default Home;
