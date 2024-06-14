import React from 'react';

function About() {
  return (
    <div className='bg-[#163857] rounded-lg p-8 shadow-lg'>
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-4 font-montserrat text-white text-center">About Me</h1>
      <p className="text-lg md:text-xl md:mt-[4rem]  lg:text-xl leading-relaxed mb-8 font-open-sans text-gray-300">
        <span className="font-semibold text-white">Passionate and inventive</span>{" "}
        <span className="font-semibold text-white">Full Stack Web Developer</span>{" "}
        and{" "}
        <span className="font-semibold text-white">Web Designer</span>. 
        I started my coding journey at 16 and have since developed impressive projects 
        and participated in numerous hackathons. Recently, I was honored in the prestigious{" "}
        <span className="font-semibold text-white">PepSheCo Sales Star competition</span>{" "}
        by Internshala. I've built a strong foundation through platforms like{" "}
        <span className="font-semibold text-white">Udemy</span>,{" "}
        <span className="font-semibold text-white">Coding Ninjas</span>,{" "}
        and <span className="font-semibold text-white">Codecademy</span>. Currently, 
        I am furthering my education in technology as a bachelor's student at{" "}
        <span className="font-semibold text-white">Symbiosis</span>.
      </p>
      <div className='bg-[#1a496f] p-6 rounded-lg shadow-md '>
        <h2 className='text-3xl font-semibold text-white mb-4'>Experience & Skills</h2>
        <ul className='list-disc list-inside text-gray-300 text-lg  md:text-xl'>
          <li>Developed <span className='font-semibold text-white'>5 frontend projects</span>, a fullstack project, and a chatbot using Gemini AI.</li>
          <li>Proficient in <span className='font-semibold text-white'>frontend development</span> and have a medium level of expertise in <span className='font-semibold text-white'>backend development</span>.</li>
          <li>Currently enhancing my skills in <span className='font-semibold text-white'>Data Structures and Algorithms (DSA)</span> through LeetCode.</li>
          <li>Participated in <span className='font-semibold text-white'>3 hackathons</span>, showcasing my ability to work under pressure and deliver innovative solutions.</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
