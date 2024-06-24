import React from 'react';
import Weather1 from './photos/Weather1.png';
import Weather2 from './photos/Weather2.png';
import Weather3 from './photos/Weather3.png';
import Weather4 from './photos/Weather4.png';
import Weather5 from './photos/Weather5.png';


function WeatherAppCaseStudy() {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-lg shadow-lg max-w-screen-lg mx-auto animate-fade-in text-gray-200">
      <h1 className="text-4xl font-bold mb-8 text-center">Weather App Case Study</h1>

      {/* Main content of your case study */}
      <div className="mb-8 border-8 border-gray-700 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg overflow-hidden">
        {/* Image of the Weather App */}
        <img
          src={Weather1}
          alt="Weather App Screenshot"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-lg shadow-md mb-8 transform hover:scale-105 transition-transform duration-300">
        <p className="text-lg leading-relaxed">
          WeatherAppCaseStudy is a detailed exploration of my journey in building a weather application. This project involved using HTML, integrating with a weather API, improving functionality with Javascript, and designing a user-friendly interface.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Explore the live weather application <a href="#" className="text-blue-500 hover:text-blue-700 transition duration-300">here</a>.
        </p>
      </div>

      <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-lg shadow-md mb-8 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
        <ul className="list-disc list-inside pl-4">
          <li>HTML</li>
          <li>Javascript</li>
          <li>API integration</li>
          <li>CSS for styling</li>
        </ul>
      </div>

      <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-lg shadow-md mb-8 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
        <p className="text-lg leading-relaxed">
          Developing a responsive design that works across different devices and handling asynchronous data fetching were the primary challenges faced during the development of this weather app.
        </p>
      </div>

      <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-lg shadow-md mb-8 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-4">Outcome</h2>
        <p className="text-lg leading-relaxed">
          The Weather App successfully provides users with real-time weather information in an intuitive manner. It demonstrates my skills in frontend development, API integration, and user interface design.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-center">Screenshots</h2>

      {/* Grid for displaying screenshots */}
      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="border-4 border-gray-700 rounded-lg overflow-hidden">
          <img
            src={Weather3}
            alt="Weather App Screenshot 1"
            className="w-full h-auto rounded-lg pt-12 shadow-md transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="border-4 border-gray-700 rounded-lg overflow-hidden">
          <img
            src={Weather2}
            alt="Weather App Screenshot 2"
            className="w-full h-auto pt-[30px] rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="border-4 border-gray-700 rounded-lg overflow-hidden">
          <img
            src={Weather4}
            alt="Weather App Screenshot 3"
            className="w-full h-auto rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-lg shadow-md mb-8 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-4">Project Goals</h2>
        <p className="text-lg leading-relaxed">
          The primary goal of the Weather App was to provide users with a visually appealing and easy-to-use interface for accessing real-time weather information. Emphasis was placed on creating a responsive design to ensure accessibility across devices.
        </p>
      </div>

      <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-lg shadow-md mb-8 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-4">User Experience Design</h2>
        <p className="text-lg leading-relaxed">
          The UX design focused on simplicity and clarity. Features such as intuitive navigation, clear weather icons, and interactive temperature graphs were implemented to enhance user engagement and usability.
        </p>
      </div>

      <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-lg shadow-md mb-8 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-4">Highlights and Learnings</h2>
        <p className="text-lg leading-relaxed">
          This project provided valuable insights into frontend development practices, API integration challenges, and the importance of responsive design. It strengthened my skills in handling asynchronous operations and implementing data visualization techniques.
        </p>
      </div>
    </div>
  );
}

export default WeatherAppCaseStudy;
