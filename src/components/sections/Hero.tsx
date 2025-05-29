'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col-reverse lg:flex-row items-center gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Bazley Tan</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
            I love bringing ideas to life through clean, user-friendly designs in Figma and building simple but effective systems with PHP. I also enjoy the hands-on side of tech—whether it’s crimping cables or setting up routers.
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-full font-medium hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
            >
              View Projects
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96">
            <Image
              src="/profile.jpg"
              alt="Profile"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
