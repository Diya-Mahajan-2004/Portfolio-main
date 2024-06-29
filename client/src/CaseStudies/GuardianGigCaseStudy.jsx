import React from 'react';
import GuardianGig from './photos/GuardianGig.png';
import GuardianGig2 from './photos/GuardianGig2.png';
import GuardianGig3 from './photos/GuardianGig3.png';
import GuardianGig4 from './photos/GuardianGig4.png';
import GuardianGigvideo from './photos/GuardianGigvideo.mp4';

function GuardianGigCaseStudy() {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-lg shadow-lg max-w-screen-lg mx-auto animate-fade-in text-gray-200">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">GuardianGig Case Study</h1>

      <div className="mb-8 border-[6px] border-gray-700 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg overflow-hidden">
        <video
          src={GuardianGigvideo}
          alt="GuardianGig Video"
          className="w-full h-auto rounded-lg shadow-md pointer-events-none"
          autoPlay
          loop
          muted
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-lg shadow-md mb-8 transform hover:scale-105 transition-transform duration-300">
        <p className="text-lg leading-relaxed">
          GuardianGig is a decentralized freelancing platform built using blockchain technology. This project was a group effort for a hackathon, and I collaborated with one of my teammates on the frontend development.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Explore the live application <a href="#" className="text-blue-400 hover:text-blue-500 font-bold transition duration-300">here</a>.
        </p>
      </div>

      <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-6 rounded-lg shadow-md mb-8 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-4 text-white">Technologies Used</h2>
        <ul className="list-disc list-inside pl-4">
          <li>React</li>
          <li>JavaScript</li>
          <li>Blockchain technology</li>
          <li>Tailwind CSS for styling</li>
        </ul>
      </div>

      <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-lg shadow-md mb-8 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-4 text-white">Challenges</h2>
        <p className="text-lg leading-relaxed">
          Integrating blockchain technology with a user-friendly interface and ensuring secure transactions were the primary challenges faced during the development of this project.
        </p>
      </div>

      <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-6 rounded-lg shadow-md mb-8 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-4 text-white">Outcome</h2>
        <p className="text-lg leading-relaxed">
          GuardianGig successfully provides a secure and decentralized platform for freelancers and clients to connect and conduct transactions. It demonstrates our skills in frontend development, blockchain integration, and user experience design.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-center text-white">Screenshots</h2>

      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        <div className="border-[6px] border-gray-700 rounded-lg overflow-hidden">
          <img
            src={GuardianGig}
            alt="GuardianGig Screenshot 1"
            className="w-full h-auto rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="border-[6px] border-gray-700 rounded-lg overflow-hidden">
          <img
            src={GuardianGig2}
            alt="GuardianGig Screenshot 2"
            className="w-full h-auto rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="border-[6px] border-gray-700 rounded-lg overflow-hidden">
          <img
            src={GuardianGig3}
            alt="GuardianGig Screenshot 3"
            className="w-full h-auto rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="border-[6px] border-gray-700 rounded-lg overflow-hidden">
          <img
            src={GuardianGig4}
            alt="GuardianGig Screenshot 4"
            className="w-full h-auto rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-lg shadow-md mb-8 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-4 text-white">Project Goals</h2>
        <p className="text-lg leading-relaxed">
          The primary goal of GuardianGig was to provide a decentralized platform that ensures secure and transparent transactions between freelancers and clients. Emphasis was placed on creating a responsive design to ensure accessibility across devices.
        </p>
      </div>

      <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-6 rounded-lg shadow-md mb-8 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-4 text-white">User Experience Design</h2>
        <p className="text-lg leading-relaxed">
          The UX design focused on simplicity and clarity. Features such as intuitive navigation and secure transaction processing were implemented to enhance user engagement and usability.
        </p>
      </div>

      <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-lg shadow-md mb-8 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-4 text-white">Highlights and Learnings</h2>
        <p className="text-lg leading-relaxed">
          This project provided valuable insights into blockchain technology, secure transaction processing, and the importance of user-centric design. It strengthened our skills in frontend development, API integration, and implementing decentralized solutions.
        </p>
      </div>

      <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-6 rounded-lg shadow-md mb-8 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-4 text-white">Personal Reflections</h2>
        <p className="text-lg leading-relaxed">
          This was a group project for a hackathon, and it was an enriching experience to work on a decentralized freelancing platform. My teammate and I collaborated on the frontend development, which was both challenging and rewarding.
        </p>
      </div>
    </div>
  );
}

export default GuardianGigCaseStudy;
