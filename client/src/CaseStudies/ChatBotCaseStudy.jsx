import React, { useEffect, useRef } from "react";
import ChatBotvideo from "./photos/ChatBotvideo.mp4";
import ChatBot from "./photos/ChatBot.png";
import ChatBot2 from "./photos/ChatBot2.png";
import ChatBot3 from "./photos/ChatBot3.png";

function ChatBotCaseStudy() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Slow down the video playback rate
    }
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#1d3040] to-[#0063B2FF] p-8 rounded-lg shadow-lg max-w-screen-lg mx-auto animate-fade-in text-gray-200">
      <h1 className="text-4xl font-bold mb-8 text-center">ChatBot Case Study</h1>

      {/* Main content of your case study */}
      <div className="mb-8 border-[6px] border-[#7ed4fc] bg-gradient-to-r from-[#0063B2FF] to-[#64b3d7] rounded-lg overflow-hidden">
        {/* Video of the ChatBot */}
        <video
          ref={videoRef}
          src={ChatBotvideo}
          autoPlay
          loop
          muted
          className="w-full h-auto rounded-lg shadow-md pointer-events-none" // Make the video unclickable
        />
      </div>

      <div className="bg-gradient-to-r from-[#4c8eac] to-[#0063B2FF] p-6 rounded-lg shadow-md mb-8 transform hover:scale-105 transition-transform duration-300">
        <p className="text-lg leading-relaxed">
          ChatBotCaseStudy is a detailed exploration of my journey in building an interactive chatbot. This project involved using React with Vite for the frontend, integrating with Gemini API, and using Express with Node.js for the backend.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Explore the live chatbot application{" "}
          <a
            href="#"
            className="text-black hover:text-blue-900 font-bold transition duration-300"
          >
            here
          </a>.
        </p>
      </div>

      <div className="bg-gradient-to-r from-[#0063B2FF] to-[#64b3d7] p-6 rounded-lg shadow-md mb-8 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
        <ul className="list-disc list-inside pl-4">
          <li>React + Vite</li>
          <li>JavaScript</li>
          <li>Gemini API</li>
          <li>Express + Node.js</li>
          <li>Tailwind for styling</li>
        </ul>
      </div>

      <div className="bg-gradient-to-r from-[#64b3d7] to-[#0063B2FF] p-6 rounded-lg shadow-md mb-8 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
        <p className="text-lg leading-relaxed">
          Developing a conversational flow that feels natural and handling user inputs effectively were the primary challenges faced during the development of this chatbot.
        </p>
      </div>

      <div className="bg-gradient-to-r from-[#0063B2FF] to-[#64b3d7] p-6 rounded-lg shadow-md mb-8 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-4">Outcome</h2>
        <p className="text-lg leading-relaxed">
          The ChatBot successfully engages users in meaningful conversations and provides relevant responses. It demonstrates my skills in frontend development, API integration, and user experience design.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-center">Screenshots</h2>

      {/* Grid for displaying screenshots */}
      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="border-[6px] border-[#7ed4fc] rounded-lg overflow-hidden">
          <img
            src={ChatBot}
            alt="ChatBot Screenshot 1"
            className="w-full h-auto rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="border-[6px] border-[#7ed4fc] rounded-lg overflow-hidden">
          <img
            src={ChatBot2}
            alt="ChatBot Screenshot 2"
            className="w-full h-auto rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="border-[6px] border-[#7ed4fc] rounded-lg overflow-hidden">
          <img
            src={ChatBot3}
            alt="ChatBot Screenshot 3"
            className="w-full h-auto rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#64b3d7] to-[#0063B2FF] p-6 rounded-lg shadow-md mb-8 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-4">Project Goals</h2>
        <p className="text-lg leading-relaxed">
          The primary goal of the ChatBot was to provide users with an engaging and easy-to-use interface for interacting with the chatbot. Emphasis was placed on creating a responsive design to ensure accessibility across devices.
        </p>
      </div>

      <div className="bg-gradient-to-r from-[#0063B2FF] to-[#64b3d7] p-6 rounded-lg shadow-md mb-8 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-4">User Experience Design</h2>
        <p className="text-lg leading-relaxed">
          The UX design focused on simplicity and clarity. Features such as intuitive navigation and clear response visualization were implemented to enhance user engagement and usability.
        </p>
      </div>

      <div className="bg-gradient-to-r from-[#64b3d7] to-[#0063B2FF] p-6 rounded-lg shadow-md mb-8 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-4">Highlights and Learnings</h2>
        <p className="text-lg leading-relaxed">
          This project provided valuable insights into backend development practices, API integration challenges, and the importance of good UI/UX design. It strengthened my skills in handling asynchronous operations and implementing conversational interfaces.
        </p>
      </div>

      <div className="bg-gradient-to-r from-[#0063B2FF] to-[#64b3d7] p-6 rounded-lg shadow-md mb-8 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-4">Personal Reflections</h2>
        <p className="text-lg leading-relaxed">
          This is my first full stack project, and I am still working on it. The main challenges were integrating the frontend, backend, and API together for the first time, and finding the best API for chatbot responses. After extensive research, I found the Gemini API to be the best fit with the latest updates. I am still working on the backend and facing difficulties, but overall, this was a very fun experience learning about AI and progressing step by step.
        </p>
      </div>
    </div>
  );
}

export default ChatBotCaseStudy;
