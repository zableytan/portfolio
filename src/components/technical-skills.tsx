"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function TechnicalSkills() {
  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold text-[#333446] dark:text-[#EAEFEF] mb-8 text-center md:text-left">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 gap-6">
        {/* Frontend Skills */}
        <div className="bg-[#B8CFCE] dark:bg-[#7F8CAA] p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold text-[#333446] dark:text-[#EAEFEF] mb-6 flex items-center gap-3">
            <CodeIcon />
            Frontend Technologies
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {frontendSkills.map((skill, index) => (
              <SkillBadge key={index} skill={skill} />
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div className="bg-[#B8CFCE] dark:bg-[#7F8CAA] p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold text-[#333446] dark:text-[#EAEFEF] mb-6 flex items-center gap-3">
            <ServerIcon />
            Backend Technologies
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {backendSkills.map((skill, index) => (
              <SkillBadge key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const frontendSkills = [
  'PHP',
  'Figma',
  'HTML',
  'CSS',
  'Flutter'
];

const backendSkills = [
  'MySQL',
  'MariaDB',
  'Firebase',
  'PHP'
];

const SkillBadge = ({ skill }: { skill: string }) => {
  return (
    <div className="flex items-center gap-3 p-2 rounded-lg bg-[#EAEFEF] dark:bg-[#333446]">
      <div className="w-8 h-8 rounded-full bg-[#333446] dark:bg-[#EAEFEF] flex items-center justify-center">
        <CheckIcon />
      </div>
      <span className="text-[#333446] dark:text-[#EAEFEF] font-medium">{skill}</span>
    </div>
  );
};

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#EAEFEF] dark:text-[#333446]">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#333446] dark:text-[#EAEFEF]">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const ServerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#333446] dark:text-[#EAEFEF]">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
    <line x1="6" y1="6" x2="6" y2="6"></line>
    <line x1="6" y1="18" x2="6" y2="18"></line>
  </svg>
);
