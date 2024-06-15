import React from 'react';

function About() {
  return (
    <div className='bg-[#c3e6ff] rounded-lg p-8 shadow-lg'>
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-4 font-montserrat text-black text-center animate-fadeIn">About Me</h1>
      
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t-2 border-[#79c4fa]"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="px-3 bg-[#c3e6ff] text-xl md:text-2xl text-black font-bold">My Journey</span>
        </div>
      </div>
      
      <p className="text-lg md:text-xl lg:text-xl leading-relaxed mb-8 font-open-sans text-black">
        <span className="font-semibold text-black">Passionate and inventive</span>{" "}
        <span className="font-semibold text-black">Front-End Developer</span>{" "}
        and{" "}
        <span className="font-semibold text-black">Web Designer</span>. 
        I started my coding journey at 16 and have since developed impressive projects 
        and participated in numerous hackathons. Recently, I was honored in the prestigious{" "}
        <span className="font-semibold text-black">PepSheCo Sales Star competition</span>{" "}
        by Internshala. I've built a strong foundation through platforms like{" "}
        <span className="font-semibold text-black">Udemy</span>,{" "}
        <span className="font-semibold text-black">Coding Ninjas</span>,{" "}
        and <span className="font-semibold text-black">Codecademy</span>. Currently, 
        I am furthering my education in technology as a bachelor's student at{" "}
        <span className="font-semibold text-black">Symbiosis</span>.
      </p>
      
      <div className='bg-[#79c4fa] p-6 rounded-lg shadow-md mb-8 md:mb-0 animate-slideIn'>
        <h2 className='text-3xl font-semibold text-black mb-4'>Experience & Skills</h2>
        <ul className='list-disc list-inside text-gray-900 text-lg md:text-xl space-y-2'>
          <li>Developed <span className='font-semibold text-black'>5 frontend projects</span>, a fullstack project, and a chatbot using Gemini AI.</li>
          <li>Proficient in <span className='font-semibold text-black'>frontend development</span> and have a medium level of expertise in <span className='font-semibold text-black'>backend development</span>.</li>
          <li>Currently enhancing my skills in <span className='font-semibold text-black'>Data Structures and Algorithms (DSA)</span> through LeetCode.</li>
          <li>Participated in <span className='font-semibold text-black'>3 hackathons</span>, showcasing my ability to work under pressure and deliver innovative solutions.</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
