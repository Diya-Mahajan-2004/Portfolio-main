import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaFileAlt, FaTwitter } from 'react-icons/fa';
import '../CSS/Home.css';

function Home() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const getBackgroundColor = () => {
    switch (selectedItem) {
      case 'projects':
        return '#686868';
      case 'skills':
        return '#F5F5dc';
      case 'about':
        return '#7CB9E8';
      default:
        return '#535353';
    }
  };

  const renderContent = () => {
    switch (selectedItem) {
      case 'projects':
        return <div className="content">Here are my projects...</div>;
      case 'skills':
        return <div className="content">Here are my skills...</div>;
      case 'about':
        return <div className="content">About me...</div>;
      default:
        return <div className="content">Select an item to see more...</div>;
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center" style={{ backgroundColor: getBackgroundColor() }}>
      <div className="sidebar font-bold text-white pr-8 flex flex-col items-end space-y-4">
        <ul className="list-none text-right">
          <li onClick={() => handleItemClick('projects')} className="cursor-pointer">projects</li>
          <li onClick={() => handleItemClick('skills')} className="cursor-pointer">skills</li>
          <li onClick={() => handleItemClick('about')} className="cursor-pointer">about</li>
        </ul>
        <div className="flex flex-col space-y-4 mt-4">
          <a href="https://www.linkedin.com" className="icon-wrapper"><FaLinkedin className="icon" /></a>
          <a href="https://www.github.com" className="icon-wrapper"><FaGithub className="icon" /></a>
          <a href="https://example.com/resume.pdf" className="icon-wrapper"><FaFileAlt className="icon" /></a>
          <a href="https://www.twitter.com" className="icon-wrapper"><FaTwitter className="icon" /></a>
        </div>
      </div>
      <div className="content-container">
        {renderContent()}
      </div>
    </div>
  );
}

export default Home;
