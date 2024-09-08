import React, { useEffect, useRef } from "react";
import Ayuv1 from "./photos/Ayuv1.png";
import Ayuv2 from "./photos/Ayuv2.png";
import Ayuv3 from "./photos/Ayuv3.png";
import AyuvVideo from "./photos/AyuvVideo.mp4";

function AyuvCaseStudy() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Slow down the video playback rate
    }
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#345a64] to-[#66A5AD] p-8 rounded-lg shadow-lg max-w-screen-lg mx-auto animate-fade-in text-gray-100">
      <div></div>
      <h1 className="text-4xl font-bold mb-8 text-center">Ayuv Case Study</h1>

      {/* Main content of your case study */}
      <div className="mb-8 border-[6px] border-[#064744] bg-gradient-to-r from-[#0063B2FF] to-[#64b3d7] rounded-lg overflow-hidden">
        {/* Video of Ayuv */}
        <video
          ref={videoRef}
          src={AyuvVideo}
          autoPlay
          loop
          muted
          className="w-full h-auto rounded-lg shadow-md pointer-events-none" // Make the video unclickable
        />
      </div>

      <div className="bg-gradient-to-r from-[#538991] to-[#146c68] p-6 rounded-lg shadow-md mb-8 transform hover:scale-105 transition-transform duration-300">
        <p className="text-lg leading-relaxed">
          Ayuv is a Unified Healthcare Interface and Data Security site I created for a startup. I developed the frontend and assisted with the backend. The project involved integrating many features into a single page while maintaining a clean and easy-to-navigate UI. Consistency in the required color theme and designing the site as per the company's specifications were key challenges.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-center">Screenshots</h2>

      {/* Grid for displaying screenshots */}
      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="border-[6px] border-[#064744] rounded-lg overflow-hidden">
          <img
            src={Ayuv1}
            alt="Ayuv Screenshot 1"
            className="w-full h-auto rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="border-[6px] border-[#064744] rounded-lg overflow-hidden">
          <img
            src={Ayuv2}
            alt="Ayuv Screenshot 2"
            className="w-full h-auto rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="border-[6px] border-[#064744] rounded-lg overflow-hidden">
          <img
            src={Ayuv3}
            alt="Ayuv Screenshot 3"
            className="w-full h-auto rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#146c68] to-[#538991] p-6 rounded-lg shadow-md mb-8 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
        <p className="text-lg leading-relaxed">
          Integrating multiple features into a single page while keeping the UI clean and easy to navigate was a significant challenge. Maintaining a consistent color theme as required by the startup and designing the site according to the company's specifications were also critical tasks.
        </p>
      </div>

      <div className="bg-gradient-to-r from-[#538991] to-[#146c68]  p-6 rounded-lg shadow-md mb-8 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-4">Outcome</h2>
        <p className="text-lg leading-relaxed">
          The Ayuv project resulted in a unified healthcare interface that met the startup's requirements. It demonstrated my ability to develop a comprehensive frontend solution, assist in backend development, and handle complex UI design challenges.
        </p>
      </div>

      <div className="bg-gradient-to-r from-[#146c68] to-[#538991]  p-6 rounded-lg shadow-md mb-8 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-4">Personal Reflections</h2>
        <p className="text-lg leading-relaxed">
          Although Ayuv is not my personal project, working on it provided valuable experience in collaborating with a startup, integrating multiple features, and maintaining design consistency. It was a challenging yet rewarding experience that enhanced my skills in frontend and backend development.
        </p>
      </div>
    </div>
  );
}

export default AyuvCaseStudy;
