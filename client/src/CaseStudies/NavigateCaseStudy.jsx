import React from 'react';
import Navigate from './photos/Navigate.png';
import Navigate2 from './photos/Navigate2.png';
import Navigate3 from './photos/Navigate3.png';
import Navigate4 from './photos/Navigate4.png';
import Navigate5 from './photos/Navigate5.png';
import Navigatevideo from './photos/Navigatevideo.mp4';

function NavigateCaseStudy() {
  return (
    <div className="bg-gradient-to-r from-[#FC766AFF] to-[#bdddff] p-8 rounded-lg shadow-lg max-w-screen-lg mx-auto animate-fade-in">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Navigate</h1>

      <div className="mb-8 bg-gradient-to-r from-[#5B84B1FF] to-[#edf2f7] rounded-lg overflow-hidden border-4 border-[#5B84B1FF]">
        <video autoPlay muted loop className="w-full h-auto rounded-lg shadow-md">
          <source src={Navigatevideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="bg-gradient-to-r from-[#5B84B1FF] to-[#ffc0ba] p-6 rounded-lg shadow-md mb-8 transform hover:scale-105 transition-transform duration-300">
        <p className="text-lg leading-relaxed text-gray-700">
          Navigate is one of my first coding projects, a frontend-only website designed for booking hotels and flights. Utilizing HTML, CSS, JavaScript, and Bootstrap, this project represents a significant milestone in my coding journey. Though the website lacks full responsiveness, it serves as a testament to the skills and knowledge I gained through this endeavor.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mt-4">
          Creating Navigate was a challenging yet rewarding experience. It pushed me to think critically about design and functionality, while also teaching me the importance of debugging and error resolution. Each step in the development process was a learning opportunity, from initial concept to final implementation.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mt-4">
          You can explore the live project <a href="https://diya-mahajan-2004.github.io/Navigate/" className="text-blue-500 hover:text-blue-700 transition duration-300">here</a>.
        </p>
      </div>

      <div className="bg-gradient-to-r from-[#ffc0ba] to-[#5B84B1FF] p-6 rounded-lg shadow-md mb-8 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Technologies Used</h2>
        <ul className="list-disc list-inside pl-4 text-gray-700">
          <li><strong>HTML:</strong> The backbone of the website, providing the structure and content.</li>
          <li><strong>CSS:</strong> Used for styling and layout, ensuring the site is visually appealing.</li>
          <li><strong>JavaScript:</strong> Added interactivity and dynamic features to enhance user experience.</li>
          <li><strong>Bootstrap:</strong> A framework that helped in creating a responsive and modern design.</li>
        </ul>
      </div>

      <div className="bg-gradient-to-r from-[#5B84B1FF] to-[#ffc0ba] p-6 rounded-lg shadow-md mb-8 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Challenges</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          One of the main challenges was ensuring the website's design met my vision, despite being my first project. Balancing aesthetics with functionality was not easy, and I spent a considerable amount of time refining the user interface.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mt-4">
          Additionally, debugging and resolving errors was a new and educational experience. Each bug I encountered taught me something new about the development process and how to troubleshoot effectively.
        </p>
      </div>

      <div className="bg-gradient-to-r from-[#ffc0ba] to-[#5B84B1FF] p-6 rounded-lg shadow-md mb-8 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Outcome</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          The project successfully resulted in a functional and visually appealing website. The user interface is straightforward, allowing users to navigate the booking process easily. This project significantly enhanced my skills in frontend development, error resolution, and Bootstrap.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mt-4">
          Completing Navigate has not only boosted my confidence but also provided me with a solid foundation for future projects. The skills and knowledge gained from this experience are invaluable as I continue to grow as a developer.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Screenshots</h2>

      <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {[Navigate, Navigate2, Navigate3, Navigate4, Navigate5].map((image, index) => (
          <div key={index} className="border-4 border-[#5B84B1FF] rounded-lg overflow-hidden flex justify-center items-center">
            <img
              src={image}
              alt={`Navigate Website ${index + 1}`}
              className="w-full max-w-md h-auto rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavigateCaseStudy;
