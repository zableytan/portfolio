"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-[#F5EFE7] dark:bg-[#213555]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#213555] dark:text-[#F5EFE7] mb-12 text-center">
          Get in Touch
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#D8C4B6] dark:bg-[#3E5879] p-8 rounded-2xl shadow-lg"
          >
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#213555] dark:text-[#F5EFE7] mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg bg-[#F5EFE7] dark:bg-[#213555] text-[#213555] dark:text-[#F5EFE7] border border-[#213555] dark:border-[#F5EFE7] focus:outline-none focus:ring-2 focus:ring-[#3E5879] dark:focus:ring-[#D8C4B6]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#213555] dark:text-[#F5EFE7] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-[#F5EFE7] dark:bg-[#213555] text-[#213555] dark:text-[#F5EFE7] border border-[#213555] dark:border-[#F5EFE7] focus:outline-none focus:ring-2 focus:ring-[#3E5879] dark:focus:ring-[#D8C4B6]"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#213555] dark:text-[#F5EFE7] mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-[#F5EFE7] dark:bg-[#213555] text-[#213555] dark:text-[#F5EFE7] border border-[#213555] dark:border-[#F5EFE7] focus:outline-none focus:ring-2 focus:ring-[#3E5879] dark:focus:ring-[#D8C4B6]"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#213555] hover:bg-[#3E5879] text-[#F5EFE7] rounded-lg font-medium transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#D8C4B6] dark:bg-[#3E5879] p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-[#213555] dark:text-[#F5EFE7] mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <EmailIcon />
                <a href="mailto:your.email@example.com" className="text-[#213555] dark:text-[#F5EFE7] hover:text-[#3E5879] dark:hover:text-[#D8C4B6] transition-colors">
                  Bazley456@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon />
                <a href="tel:+1234567890" className="text-[#213555] dark:text-[#F5EFE7] hover:text-[#3E5879] dark:hover:text-[#D8C4B6] transition-colors">
                  09629116149
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <LocationIcon />
                <span className="text-[#213555] dark:text-[#F5EFE7]">
                  Vinzon St. Carried Apartment, Davao City, Philippines
                </span>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-[#213555] dark:text-[#F5EFE7] mb-6">
                Connect with Me
              </h3>
              <div className="flex space-x-6">
                <a href="https://github.com/zableytan" target="_blank" rel="noopener noreferrer" className="text-[#213555] dark:text-[#F5EFE7] hover:text-[#3E5879] dark:hover:text-[#D8C4B6] transition-colors">
                  <GithubIcon />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-[#213555] dark:text-[#F5EFE7] hover:text-[#3E5879] dark:hover:text-[#D8C4B6] transition-colors">
                  <LinkedinIcon />
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-[#213555] dark:text-[#F5EFE7] hover:text-[#3E5879] dark:hover:text-[#D8C4B6] transition-colors">
                  <TwitterIcon />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#213555] dark:text-[#F5EFE7]">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#213555] dark:text-[#F5EFE7]">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#213555] dark:text-[#F5EFE7]">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
); 