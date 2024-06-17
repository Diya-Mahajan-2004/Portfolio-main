import React from 'react';
import NavigateWebsiteImage from '../assets/NavigateWebsite.png';

function NavigateCaseStudy() {
  return (
    <div className="bg-white rounded-lg p-8 shadow-lg">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-center text-black">Navigate</h1>
      <p className="text-lg md:text-xl lg:text-xl leading-relaxed mb-8 text-black">
        Navigate is a frontend self-designed website for booking hotels and flights. This project aims to provide a seamless user experience for travelers looking to book their accommodations and flights in one place.
      </p>
      
      <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
      <ul className="list-disc list-inside mb-8 text-black">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
      <p className="text-lg leading-relaxed mb-8 text-black">
        One of the main challenges was ensuring the website's responsiveness across different devices. Additionally, integrating various APIs for flight and hotel bookings required careful handling of asynchronous data fetching and state management.
      </p>
      
      <h2 className="text-2xl font-semibold mb-4">Outcome</h2>
      <p className="text-lg leading-relaxed mb-8 text-black">
        The project successfully resulted in a functional and aesthetically pleasing website. The user interface is intuitive, and users can easily navigate through the booking process. The project enhanced my skills in frontend development and API integration.
      </p>
      
      <h2 className="text-2xl font-semibold mb-4">Screenshots</h2>
      <img src={NavigateWebsiteImage} alt="Navigate Website" className="w-full h-auto rounded-lg shadow-md mb-8" />
    </div>
  );
}

export default NavigateCaseStudy;
