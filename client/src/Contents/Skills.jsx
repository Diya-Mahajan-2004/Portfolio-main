import React from 'react';
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJs, FaSass, FaGitAlt } from 'react-icons/fa';
import { SiExpress, SiTailwindcss, SiThreedotjs, SiTypescript, SiRedux, SiNextdotjs, SiWebpack, SiBabel, SiGraphql, SiJest, SiCypress, SiFigma } from 'react-icons/si';
import "../CSS/Home.css";

const skills = [
  { name: "React.js", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "Vanilla JS", icon: <FaJs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "THREE.js", icon: <SiThreedotjs /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Webpack", icon: <SiWebpack /> },
  { name: "GraphQL", icon: <SiGraphql /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Responsive Design", icon: <FaCss3Alt /> }
];

function Skills() {
  return (
    <div className='bg-[#6d1938] rounded-lg p-8'>
      <div className='text-center md:text-[1.5rem] mt-2'>
        <h1 className='text-white'>Hello, I'm Diya, a <span className='underline underline-offset-8'>Web Developer</span></h1>
        <h2 className='mt-4 text-white'>My Skills:</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-6'>
          {skills.map(skill => (
            <div key={skill.name} className='skill-item text-white flex flex-col items-center p-4 rounded-lg transition-all duration-300 relative'>
              <div className='icon-wrapper text-4xl mb-2 transition-transform duration-300'>{skill.icon}</div>
              
              <div className='overlay absolute inset-0 bg-[#8b1d52] opacity-0 hover:opacity-90 flex items-center justify-center transition-all duration-300'>
                <p className='text-white text-lg'>{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
