"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5EFE7] dark:bg-[#213555] p-4">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[#D8C4B6] dark:border-[#3E5879] shadow-lg"
          >
            <img 
              src="/profilephoto.jpg" 
              alt="Bazley Tan"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-[#213555] dark:text-[#F5EFE7] mb-4"
            >
              Hi, I'm <ColourfulText text="Bazley Tan" />
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg md:text-xl text-[#3E5879] dark:text-[#D8C4B6] mb-6"
            >
              "I love bringing ideas to life through clean, user-friendly designs in Figma and building simple but effective systems with PHP. I also enjoy the hands-on side of tech whether it's crimping cables or setting up routers."
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex gap-4"
            >
              <button 
                onClick={scrollToContact}
                className="px-6 py-2 bg-[#213555] hover:bg-[#3E5879] text-[#F5EFE7] rounded-full transition-colors"
              >
                Contact Me
              </button>
              <a 
                href="/bazley_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border border-[#D8C4B6] dark:border-[#3E5879] hover:bg-[#D8C4B6] dark:hover:bg-[#3E5879] rounded-full transition-colors inline-block text-[#213555] dark:text-[#F5EFE7]"
              >
                Resume
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ColourfulText({ text }: { text: string }) {
  return (
    <span className="text-[#3E5879] dark:text-[#D8C4B6]">
      {text}
    </span>
  );
}
