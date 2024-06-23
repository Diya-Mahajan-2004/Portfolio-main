import React from 'react';
import NavigateWebsiteImage from '../assets/NavigateWebsite.png';
import bot1Image from '../assets/bot1.png';
import weatherpicImage from '../assets/weatherpic.png';
import AyuvWebsiteImage from '../assets/AyuvWebsite.png';
import GuardiianGigImage from '../assets/GuardiianGig.png';
import ResumeImage from '../assets/Resume.png';
import Weather1Image from '../assets/Weather1.png'

function Project() {
  const projectsSet1 = [
    {
      title: "Navigate",
      description: "My first project: a frontend-only website design for booking hotels and flights. This project focuses on the user interface and visual elements without backend functionality.",
      image: NavigateWebsiteImage,
      link: "/case-study/navigate"
    },
    
    {
      title: "AI CHATBOT",
      description: "An intelligent chatbot leveraging the Gemini AI API to facilitate seamless and engaging conversations with users, providing real-time responses.",
      image: bot1Image,
      link: "/case-study/chatbot"
    }
  ];
  
  const projectsSet2 = [
    {
      title: "Healthcare Website",
      description: "A comprehensive website developed for a healthcare startup, designed to provide users with easy access to health services and information.",
      image: AyuvWebsiteImage,
      link: "/case-study/ayuv"
    },
    {
      title: "Guardian Gig",
      description: "A decentralized freelancing platform created for a hackathon, enabling transparent and secure interactions between freelancers and clients.",
      image: GuardiianGigImage,
      link: "/case-study/guardiangig"
    }
  ];
  
  const projectsSet3 = [
    {
      title: "Weather-check",
      description: "A weather application built using HTML, CSS, JavaScript, and API integration to deliver accurate and up-to-date weather information.",
      image: Weather1Image,
      link: "/case-study/weatherapp"
    },
    {
      title: "Interactive Resume",
      description: "A dynamic and engaging resume created with HTML, CSS, and JavaScript, showcasing skills and experience in an interactive format.",
      image: ResumeImage,
      link: "/case-study/resume"
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
        <a href="https://github.com/Diya-Mahajan-2004?tab=repositories" className="text-lg text-black hover:underline">See more projects on GitHub</a>
      </div>
    </div>
  );
}

export default Project;
