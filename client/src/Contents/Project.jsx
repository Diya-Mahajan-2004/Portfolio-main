import React from 'react';
import NavigateWebsiteImage from '../assets/NavigateWebsite.png';
import bot1Image from '../assets/bot1.png';
import weatherpicImage from '../assets/weatherpic.png';
import AyuvWebsiteImage from '../assets/AyuvWebsite.png';
import GuardiianGigImage from '../assets/GuardiianGig.png';

function Project() {
  const projectsSet1 = [
    {
      title: "Navigate",
      description: "A frontend self-designed website for booking hotels and flights",
      image: NavigateWebsiteImage,
      link: "#"
    },
    {
      title: "AI CHATBOT",
      description: "AI chatbot using Gemini AI API",
      image: bot1Image,
      link: "#"
    }
  ];

  const projectsSet2 = [
    {
      title: "Healthcare Website",
      description: "Website for a Healthcare startup",
      image: AyuvWebsiteImage,
      link: "#"
    },
    {
      title: "Guardian Gig",
      description: "Decentralized freelancing website for hackathon.",
      image: GuardiianGigImage,
      link: "#"
    }
  ];

  const projectsSet3 = [
    {
      title: "Weather-check",
      description: "Weather app with HTML, CSS, JS, and API",
      image: weatherpicImage,
      link: "#"
    }
  ];

  const renderProjects = (projects) => (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      {projects.map((project, index) => (
        <div key={index} className='relative'>
          <a href={project.link} className='block relative'>
            <div className='bg-white rounded-lg overflow-hidden shadow-md  border-solid border-8 border-[#7d5b3c]'>
              <img src={project.image} alt={project.title} className='w-full h-64 object-cover transition duration-300 transform hover:scale-105' />
              <div className='absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity'>
                <div className='p-4 absolute bottom-0 left-0 right-0'>
                  <h2 className='text-2xl font-semibold text-white'>{project.title}</h2>
                  <p className='text-lg text-gray-300'>{project.description}</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );

  return (
    <div className='bg-[#D4B996FF] rounded-lg p-6'>
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-gray-800'>Projects</h1>
      
      <div className='mb-20 mt-16'>
        {renderProjects(projectsSet1)}
      </div>
      
      <div className='mb-20'>
        {renderProjects(projectsSet2)}
      </div>
      
      <div>
        {renderProjects(projectsSet3)}
      </div>

      <div className="text-center mt-8">
        <a href="https://github.com/your-username" className="text-lg text-black hover:underline">See more projects on GitHub</a>
      </div>
    </div>
  );
}

export default Project;
