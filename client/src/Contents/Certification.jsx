// src/Contents/Certification.js
import React from 'react';
import Certification1 from './photos/Certification1.png';
import Certification2 from './photos/Certification2.png';
import Certification3 from './photos/Certification3.png';
import Certification4 from './photos/Certification4.png';

function Certification() {
  return (
    <div className="certification-section p-6 rounded-lg shadow-md bg-gradient-to-r from-[#f5d4e3] to-[#edf2f7]">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Certifications</h2>
      <p className="text-lg leading-relaxed text-gray-700">
        Below are some of the certifications I have earned over the course of my learning journey.
      </p>
      <ul className="list-disc list-inside pl-4 text-gray-700 mt-4">
        <li>Hackathon 1: Description of the certification.</li>
        <li>Hackathon 2: Description of the certification.</li>
        <li>Hackathon 3: Description of the certification.</li>
        <li>Hackathon 4: Description of the certification.</li>
      </ul>
      <h3 className="text-xl font-semibold mb-4 mt-8 text-gray-800">Certification Images</h3>
      <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-2 lg:grid-cols-2 justify-items-center">
        {[Certification1, Certification2, Certification3, Certification4].map((image, index) => (
          <div key={index} className="border-4 border-[#f5d4e3] rounded-lg overflow-hidden flex justify-center items-center">
            <img
              src={image}
              alt={`Certification ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certification;
