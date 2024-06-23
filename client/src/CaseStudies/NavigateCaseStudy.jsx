import React from 'react';
import Navigate from './photos/Navigate.png';
import Navigate2 from './photos/Navigate2.png';
import Navigate3 from './photos/Navigate3.png';
import Navigate4 from './photos/Navigate4.png';
import Navigate5 from './photos/Navigate5.png';
import Navigatevideo from './photos/Navigatevideo.mp4';

function NavigateCaseStudy() {
  return (
    <div className="bg-gradient-to-r from-[#f7fafc] to-[#edf2f7] p-8 rounded-lg shadow-lg max-w-screen-lg mx-auto animate-fade-in">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Navigate</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 transform hover:scale-105 transition-transform duration-300">
        <p className="text-lg leading-relaxed text-gray-700">
          Navigate is one of my first coding projects. It is a frontend-only website for booking hotels and flights, designed using HTML, CSS, and JavaScript. Although it lacks responsiveness, creating this project was a significant learning experience. It was challenging to design and code, especially as I encountered and resolved errors for the first time.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mt-4">
          Check out the live project <a href="https://diya-mahajan-2004.github.io/Navigate/" className="text-blue-500 hover:text-blue-700 transition duration-300">here</a>.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Technologies Used</h2>
        <ul className="list-disc list-inside pl-4 text-gray-700">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Challenges</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          One of the main challenges was ensuring the website's design met my vision despite being my first project. Additionally, debugging and resolving errors was a new and educational experience.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Outcome</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          The project successfully resulted in a functional and visually appealing website. The user interface is straightforward, allowing users to navigate the booking process easily. This project significantly enhanced my skills in frontend development and error resolution.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Screenshots & Video</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <img src={Navigate} alt="Navigate Website 1" className="w-full h-auto rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300" />
        <img src={Navigate2} alt="Navigate Website 2" className="w-full h-auto rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300" />
        <img src={Navigate3} alt="Navigate Website 3" className="w-full h-auto rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300" />
        <img src={Navigate4} alt="Navigate Website 4" className="w-full h-auto rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300" />
        <img src={Navigate5} alt="Navigate Website 5" className="w-full h-auto rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300" />
      </div>

      <div className="mb-8">
        <video controls className="w-full h-auto rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
          <source src={Navigatevideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default NavigateCaseStudy;
