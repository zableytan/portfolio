"use client";
import { FollowerPointerCard } from "@/components/ui/following-pointer";

export default function FollowingPointerDemo() {
  const contents = [
    {
      slug: "library-stats-system",
      author: "Bazley Tan",
      date: "February, 2025",
      title: "Library Stats System",
      description: "The Library Stats System is a web-based tool that tracks and displays how many students click on library resource links...",
      image: "/libstats.png",
      authorAvatar: "/profile.jpg",
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      link: "https://github.com/zableytan/Library_Stats",
    },
    {
      slug: "web-development",
      author: "Bazley Tan",
      date: "February, 2025",
      title: "Quotation System",
      description: "A web-based platform that lets customers easily request quotations and allows staff to file leave requests, which can be approved by admins for smoother and more efficient operations.",
      image: "/quotationsystem.png",
      authorAvatar: "/profile.jpg",
      technologies: ["PHP", "MySQL", "jQuery", "HTML/CSS", "Tailwind CSS"],
      link: "https://github.com/zableytan/Research_lab",
    },
    {
      slug: "ui-animations",
      author: "Bazley Tan",
      date: "March, 2025",
      title: "Event Attendance",
      description: "A QR code-based event attendance system that allows students to quickly scan their unique codes for efficient and accurate attendance tracking during school events.",
      image: "/eventatt.png",
      authorAvatar: "/profile.jpg",
      technologies: ["PHP", "MySQL", "QR Code API", "JavaScript", "Tailwind CSS"],
      link: "https://github.com/zableytan/event_attendance",
    },
    {
      slug: "responsive-design",
      author: "Bazley Tan",
      date: "March, 2025",
      title: "Verification System",
      description: "A simple verification system that allows users to enter their application number to check and confirm their validity or application status. Designed for fast and secure verification with minimal user input.",
      image: "/verification.png",
      authorAvatar: "/profile.jpg",
      technologies: ["PHP", "MySQL", "AJAX", "Bootstrap", "Tailwind CSS"],
      link: "https://github.com/zableytan/Verification",
    },
    {
      slug: "fullstack-development-question-shuffler",
      author: "Bazley Tan",
      date: "February, 2025",
      title: "Question Shuffler System",
      description: "Developed a Question Shuffler System that allows users to upload exam questions in a predefined format and automatically generates randomized question sets for secure and varied exam creation.",
      image: "/question.png",
      authorAvatar: "/profile.jpg",
      technologies: ["PHP", "MySQL", "JavaScript", "Excel Processing", "Bootstrap"],
      link: "https://github.com/zableytan/questionshuffler",
    },
    {
      slug: "fullstack-development-theses-library",
      author: "Bazley Tan",
      date: "March 2025",
      title: "Theses Library",
      description: "A thesis library system designed for students to search and access thesis PDFs, with secure access control through admin-generated passwords to ensure restricted and authorized viewing.",
      image: "/theses.png",
      authorAvatar: "/profile.jpg",
      technologies: ["PHP", "MySQL", "PDF.js", "JavaScript", "Tailwind CSS"],
      link: "https://github.com/zableytan/Thesis_Library",
    },
    {
      slug: "capstone-writing",
      author: "Bazley Tan",
      date: "December 2024",
      title: "Capstone: FarmPrice App",
      description: "Created a mobile application that allows farmers to easily track and manage their livestock, providing real-time updates on their health and growth, and enabling them to make informed decisions about their farming operations.",
      image: "/farmprice.png",
      authorAvatar: "/profile.jpg",
      technologies: ["Flutter", "Firebase", "Dart"],
      link: "https://github.com/zableytan/Thesis_Library",
    },
  ];

  return (
    <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 max-w-7xl px-2 sm:px-4">
      {contents.map((content) => (
        <FollowerPointerCard
          key={content.slug}
          title={
            <TitleComponent
              title={content.author}
              avatar={content.authorAvatar}
            />
          }
        >
          <div className="group relative h-full overflow-hidden rounded-lg sm:rounded-2xl border border-[#F5EFE7] bg-[#F5EFE7] transition duration-200 hover:shadow-xl dark:bg-[#213555] dark:border-[#3E5879] flex flex-col">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-lg sm:rounded-t-2xl bg-[#D8C4B6]">
              <img
                src={content.image}
                alt={content.title}
                width={400}
                height={250}
                className="h-full w-full transform object-cover transition duration-200 group-hover:scale-95 group-hover:rounded-2xl"
                loading="lazy"
              />
            </div>
            <div className="p-3 sm:p-4 flex flex-col flex-grow">
              <h2 className="text-base sm:text-lg font-bold text-[#213555] dark:text-[#F5EFE7] mb-2">
                {content.title}
              </h2>
              <p className="text-xs sm:text-sm font-normal text-[#3E5879] dark:text-[#D8C4B6] mb-4 line-clamp-3">
                {content.description}
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                {content.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 sm:px-3 py-1 text-xs font-medium rounded-full bg-[#D8C4B6] text-[#213555] dark:bg-[#3E5879] dark:text-[#F5EFE7]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex flex-row items-center justify-between">
                <span className="text-xs sm:text-sm text-[#3E5879] dark:text-[#D8C4B6]">
                  {content.date}
                </span>
                <a
                  href={content.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 block rounded-lg sm:rounded-xl bg-[#213555] px-4 sm:px-6 py-1.5 sm:py-2 text-xs font-bold text-[#F5EFE7] hover:bg-[#3E5879] transition-colors active:scale-95"
                >
                  Open Project
                </a>
              </div>
            </div>
          </div>
        </FollowerPointerCard>
      ))}
    </div>
  );
}

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex items-center space-x-2">
    <img
      src={avatar}
      height="20"
      width="20"
      alt={`${title}'s avatar`}
      className="rounded-full border-2 border-[#F5EFE7] w-5 h-5 sm:w-6 sm:h-6"
    />
    <p className="text-[#F5EFE7] text-sm sm:text-base">{title}</p>
  </div>
);

