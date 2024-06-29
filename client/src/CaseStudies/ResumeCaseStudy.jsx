import React, { useEffect, useRef } from "react";
import Resume1 from "./photos/Resume1.png";
import Resume2 from "./photos/Resume2.png";
import Resume3 from "./photos/Resume3.png";
import ResumeVideo from "./photos/Resume.mp4";

function ResumeCaseStudy() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Slow down the video playback rate
    }
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#37819c] to-[#4074a9] p-8 rounded-lg shadow-lg max-w-screen-lg mx-auto animate-fade-in text-gray-200">
      <h1 className="text-4xl font-bold mb-8 text-center">Interactive Resume Case Study</h1>

      {/* Main content of your case study */}
      <div className="mb-8 border-[6px] border-[#2d3e50] bg-gradient-to-r from-[#0063B2FF] to-[#64b3d7] rounded-lg overflow-hidden">
        {/* Video of Resume */}
        <video
          ref={videoRef}
          src={ResumeVideo}
          autoPlay
          loop
          muted
          className="w-full h-auto rounded-lg shadow-md pointer-events-none" // Make the video unclickable
        />
      </div>

      <div className="bg-gradient-to-r from-[#1e4a50] to-[#2d3e50]  p-6 rounded-lg shadow-md mb-8 transform hover:scale-105 transition-transform duration-300">
        <p className="text-lg leading-relaxed">
          This is the case study for my interactive resume project. The main goals were to ensure responsive design for various screen sizes, use semantic HTML for better structure, enhance accessibility with ARIA roles and attributes, and apply unified styling for a professional appearance. Additionally, I added subtle animations for a modern touch.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-center">Screenshots</h2>

      {/* Grid for displaying screenshots */}
      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="border-[6px] border-[#2d3e50] rounded-lg overflow-hidden">
          <img
            src={Resume1}
            alt="Resume Screenshot 1"
            className="w-full h-auto rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="border-[6px] border-[#2d3e50] rounded-lg overflow-hidden">
          <img
            src={Resume2}
            alt="Resume Screenshot 2"
            className="w-full h-auto rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="border-[6px] border-[#2d3e50] rounded-lg overflow-hidden">
          <img
            src={Resume3}
            alt="Resume Screenshot 3"
            className="w-full h-auto rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#2d3e50] to-[#1e4a50] p-6 rounded-lg shadow-md mb-8 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-4">Features and Enhancements</h2>
        <ul className="list-disc list-inside pl-4">
          <li>Responsive Design: Adjustments for better readability and layout on different screen sizes.</li>
          <li>Semantic HTML: Improved use of HTML5 semantic elements.</li>
          <li>Accessibility: Enhanced accessibility with better use of ARIA roles and attributes.</li>
          <li>Styling and Consistency: Unified styling for a more professional and polished appearance.</li>
          <li>Animation: Added subtle animations for a modern touch.</li>
        </ul>
      </div>
      <div className="bg-gradient-to-r from-[#1e4a50] to-[#2d3e50] p-6 rounded-lg shadow-md mb-8 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-4">Outcome</h2>
        <p className="text-lg leading-relaxed">
          The interactive resume project achieved its goals of creating a visually appealing, accessible, and responsive design. The use of semantic HTML and ARIA roles ensures better structure and accessibility, while the animations add a modern feel to the resume.
        </p>
      </div>
    </div>
  );
}

export default ResumeCaseStudy;
