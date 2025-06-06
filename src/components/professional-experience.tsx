"use client";
import React from 'react';

export default function ProfessionalExperience() {
  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold text-[#213555] dark:text-[#F5EFE7] mb-8 text-center md:text-left">
        Professional Experience
      </h2>

      <div className="grid grid-cols-1 gap-6">
        {experienceData.map((experience, index) => (
          <div
            key={index}
            className="bg-[#D8C4B6] dark:bg-[#3E5879] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-start gap-6">
              <img
                src={experience.image}
                alt={experience.workName}
                className="w-20 h-20 rounded-full object-cover border-2 border-[#213555] dark:border-[#F5EFE7] shadow-md"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-[#213555] dark:text-[#F5EFE7] mb-2">
                  {experience.workName}
                </h3>
                <p className="text-[#213555] dark:text-[#F5EFE7] font-medium text-lg mb-3">{experience.role}</p>
                <p className="text-[#3E5879] dark:text-[#D8C4B6] text-base leading-relaxed">
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
