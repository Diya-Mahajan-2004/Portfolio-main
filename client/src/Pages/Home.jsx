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
        return <Project/>;
      case "skills":
        return <Skills />; // Render the Skills component
      case "about":
        return <About/>;
      default:
        return <div className="content">b </div>;
    }
  };

  return (
    <div className="container" style={{ backgroundColor: containerColor }}>
      <div className="sidebar ">
        <ul className="menu">
          <li
            onClick={() => handleItemClick("projects", "#0FA4AF")}
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
            className="icon-wrapper "
            style={{ color: containerColor }}
          >
            <FaFileAlt className="icon bg-white text-[2rem] rounded-full p-1" />
          </a>
          <a
            href="https://www.twitter.com"
            className="icon-wrapper "
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
