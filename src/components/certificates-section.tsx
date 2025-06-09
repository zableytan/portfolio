'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface CertificateCardProps {
    title: string;
    issuer: string;
    date: string;
    icon: React.ReactNode;
    imageUrl: string;
    link: string;
}

const certificateData: CertificateCardProps[] = [
    {
        title: "Capstone Writing 1",
        issuer: "Academic Achievement",
        date: "2024",
        imageUrl: "/Capstone_Writing1.png",
        link: "/Capstone_Writing1.png",
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    },
    {
        title: "Capstone Writing 2",
        issuer: "Academic Achievement",
        date: "2024",
        imageUrl: "/Capstone_Writing2.png",
        link: "/Capstone_Writing2.png",
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9.75 4.5l3-2.25-3-2.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    },
    {
        title: "SQL - The Complete Introduction to SQL programming",
        issuer: "Academic Achievement",
        date: "2025",
        imageUrl: "/SQLcert.png",
        link: "https://www.udemy.com/certificate/UC-47cd8dd0-0a14-43a8-b5a7-b3c1d7a2a373/",
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9.75 4.5l3-2.25-3-2.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    },
    {
        title: "PHP Essentials: Deep dive into the Principles of PHP",
        issuer: "Academic Achievement",
        date: "2025",
        imageUrl: "/PHPcert.png",
        link: "https://www.udemy.com/certificate/UC-aec0c417-5f24-493d-a03e-fd55451a65f0/",
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9.75 4.5l3-2.25-3-2.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    },
    {
        title: "JavaScript Tutorial",
        issuer: "Academic Achievement",
        date: "2024",
        imageUrl: "/JScert.png",
        link: "/JScert.png",
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9.75 4.5l3-2.25-3-2.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    }

];

const CertificateCard: React.FC<CertificateCardProps> = ({ title, issuer, date, icon, imageUrl, link }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:shadow-2xl transition-shadow duration-200 rounded-2xl block"
        >
            <div className="bg-white dark:bg-[#213555] rounded-2xl shadow-lg transition-shadow duration-300 ease-in-out h-full border border-[#e5e7eb] dark:border-[#3E5879] overflow-hidden flex flex-col max-w-md mx-auto">
                <div className="w-full flex items-center justify-center bg-white p-2" style={{ aspectRatio: '4 / 3' }}>
                    <Image 
                        src={imageUrl} 
                        alt={`Certificate for ${title}`} 
                        width={400}
                        height={300}
                        className="object-contain rounded-t-2xl w-full h-full"
                        style={{ background: 'white' }}
                    />
                </div>
                <div className="border-t border-[#e5e7eb] dark:border-[#3E5879]" />
                <div className="p-4 flex-1 flex flex-col justify-between">
                    <div className="flex items-start gap-3 mb-2">
                        <div className="flex-shrink-0 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-[#213555] dark:text-[#F5EFE7]">
                                {icon}
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-[#213555] dark:text-[#F5EFE7]">{title}</h3>
                            <p className="text-sm text-[#3E5879] dark:text-[#D8C4B6] mt-1">{issuer}</p>
                            <p className="text-xs text-[#3E5879] dark:text-[#D8C4B6] mt-2">{date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};

const CertificatesSection: React.FC = () => {
    return (
        <section className="py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#213555] dark:text-[#F5EFE7]">Certificates & Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {certificateData.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <CertificateCard 
                            title={cert.title}
                            issuer={cert.issuer}
                            date={cert.date}
                            icon={cert.icon}
                            imageUrl={cert.imageUrl}
                            link={cert.link}
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default CertificatesSection; 