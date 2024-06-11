import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaFileAlt, FaTwitter } from 'react-icons/fa';
import '../CSS/Home.css';

function Home() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [containerColor, setContainerColor] = useState('#535353'); // Default container color

  const handleItemClick = (item, color) => {
    setSelectedItem(item);
    setContainerColor(color);
  };

  const renderContent = () => {
    switch (selectedItem) {
      case 'projects':
        return <div  onClick={() => handleItemClick('projects', '#686868')} className={`content menu-item ${selectedItem === 'projects' && 'active'}`} style={{ color: containerColor === '#686868' ? 'white' : '#626262' }}>Here are my projects...</div>;
      case 'skills':
        return <div className="content"> <a href=""></a></div>;
      case 'about':
        return <div className="content"><a href=""></a></div>;
      default:
        return <div className="content"><a href=""></a></div>;
    }
  };

  return (
    <div className="home-container">
      <div className="menu-container">
        <div className="background-page-part" style={{ backgroundColor: containerColor }}>
          <ul className="menu font-bold mt-20">
            <li onClick={() => handleItemClick('projects', '#686868')} className={`menu-item ${selectedItem === 'projects' && 'active'}`} style={{ color: containerColor === '#686868' ? 'white' : '#626262' }}>Projects</li>
            <li onClick={() => handleItemClick('skills', '#ff609a')} className={`menu-item ${selectedItem === 'skills' && 'active'}`} style={{ color: containerColor === '#ff609a' ? 'white' : '#626262' }}>Skills</li>
            <li onClick={() => handleItemClick('about', '#7CB9E8')} className={`menu-item ${selectedItem === 'about' && 'active'}`} style={{ color: containerColor === '#7CB9E8' ? 'white' : '#626262' }}>About</li>
          </ul>
          <div className="social-icons ">
            <a href="https://www.linkedin.com" className="icon-wrapper mb-5" style={{ backgroundColor: 'white', color: containerColor }}><FaLinkedin className="icon" /></a>
            <a href="https://www.github.com" className="icon-wrapper mb-5" style={{ backgroundColor: 'white', color: containerColor }}><FaGithub className="icon" /></a>
            <a href="https://example.com/resume.pdf" className="icon-wrapper mb-5" style={{ backgroundColor: 'white', color: containerColor }}><FaFileAlt className="icon" /></a>
            <a href="https://www.twitter.com" className="icon-wrapper mb-5" style={{ backgroundColor: 'white', color: containerColor }}><FaTwitter className="icon" /></a>
          </div>
        </div>
      </div>
      <div className="content-container">
        {renderContent()}
      </div>
    </div>
  );
}

export default Home;
