"use client";
import React from 'react';

export default function ProfessionalExperience() {
  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold text-[#333446] dark:text-[#EAEFEF] mb-8 text-center md:text-left">
        Professional Experience
      </h2>

      <div className="grid grid-cols-1 gap-6">
        {experienceData.map((experience, index) => (
          <div
            key={index}
            className="bg-[#B8CFCE] dark:bg-[#7F8CAA] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-start gap-6">
              <img
                src={experience.image}
                alt={experience.workName}
                className="w-20 h-20 rounded-full object-cover border-2 border-[#333446] dark:border-[#EAEFEF] shadow-md"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-[#333446] dark:text-[#EAEFEF] mb-2">
                  {experience.workName}
                </h3>
                <p className="text-[#333446] dark:text-[#EAEFEF] font-medium text-lg mb-3">{experience.role}</p>
                <p className="text-[#7F8CAA] dark:text-[#B8CFCE] text-base leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const experienceData = [
  {
    image: '/VA.webp',
    workName: 'Freelance',
    role: 'Virtual Assistant Apprentice',
    description: 'Assisted with various tasks including data entry, customer support, and administrative duties. Developed skills in time management and task prioritization.',
  },
  {
    image: '/backgrounddmsf.jpg',
    workName: 'DMSFI Library',
    role: 'IT Intern',
    description: 'Developed internal systems and performed technical tasks including network setup and maintenance. Assisted with system installation and configuration.',
  }
];
