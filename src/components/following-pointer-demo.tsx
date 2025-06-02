"use client";
import { FollowerPointerCard } from "@/components/ui/following-pointer";

export default function FollowingPointerDemo() {
  const contents = [
    {
      slug: "library-stats-system",
      author: "Bazley Tan",
      date: "February, 2025",
      title: "Library Stats System",
      description:
        "The Library Stats System is a web-based tool that tracks and displays how many students click on library resource links. It helps administrators monitor engagement and identify the most accessed materials for better resource planning.",
      image: "/libstats.png",
      authorAvatar: "/profile.jpg",
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      link: "https://github.com/zableytan/Library_Stats",
    },
    {
      slug: "web-development",
      author: "Bazley Tan",
      date: "29th May, 2025",
      title: "Quotation System",
      description:
        "A web-based platform that lets customers easily request quotations and allows staff to file leave requests, which can be approved by admins for smoother and more efficient operations.",
      image: "/quotationsystem.png",
      authorAvatar: "/profile.jpg",
      technologies: ["PHP", "MySQL", "jQuery", "HTML/CSS", "Tailwind CSS"],
      link: "https://github.com/zableytan/Research_lab",
    },
    {
      slug: "ui-animations",
      author: "Bazley Tan",
      date: "28th May, 2025",
      title: "Event Attendance",
      description:
        "A QR code-based event attendance system that allows students to quickly scan their unique codes for efficient and accurate attendance tracking during school events.",
      image: "eventatt.png",
      authorAvatar: "/profile.jpg",
      technologies: ["PHP", "MySQL", "QR Code API", "JavaScript", "Tailwind CSS"],
      link: "https://github.com/zableytan/event_attendance",
    },
    {
      slug: "responsive-design",
      author: "Bazley Tan",
      date: "27th May, 2025",
      title: "Verification System",
      description:
        "A simple verification system that allows users to enter their application number to check and confirm their validity or application status. Designed for fast and secure verification with minimal user input.",
      image: "verification.png",
      authorAvatar: "/profile.jpg",
      technologies: ["PHP", "MySQL", "AJAX", "Bootstrap", "Tailwind CSS"],
      link: "https://example.com/verification-system",
    },
    {
      slug: "fullstack-development-question-shuffler", // Changed slug
      author: "Bazley Tan",
      date: "26th May, 2025",
      title: "Question Shuffler System",
      description:
        "Developed a Question Shuffler System that allows users to upload exam questions in a predefined format and automatically generates randomized question sets for secure and varied exam creation.",
      image: "/question.png",
      authorAvatar: "/profile.jpg",
      technologies: ["PHP", "MySQL", "JavaScript", "Excel Processing", "Bootstrap"],
      link: "https://example.com/question-shuffler",
    },
    {
      slug: "fullstack-development-theses-library", // Changed slug
      author: "Bazley Tan",
      date: "26th May, 2025",
      title: "Theses Library",
      description:
        "A thesis library system designed for students to search and access thesis PDFs, with secure access control through admin-generated passwords to ensure restricted and authorized viewing.",
      image: "/theses.png",
      authorAvatar: "/profile.jpg",
      technologies: ["PHP", "MySQL", "PDF.js", "JavaScript", "Tailwind CSS"],
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
          <div className="group relative h-full overflow-hidden rounded-lg sm:rounded-2xl border border-zinc-100 bg-white transition duration-200 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-lg sm:rounded-t-2xl bg-gray-100">
              <img
                src={content.image}
                alt={content.title}
                width={400}
                height={250}
                className="h-full w-full transform object-cover transition duration-200 group-hover:scale-95 group-hover:rounded-2xl"
                loading="lazy"
              />
            </div>
            <div className="p-3 sm:p-4">
              <h2 className="my-2 sm:my-4 text-base sm:text-lg font-bold text-zinc-700 dark:text-zinc-100">
                {content.title}
              </h2>
              <h2 className="my-2 sm:my-4 text-xs sm:text-sm font-normal text-zinc-500 dark:text-zinc-400 line-clamp-3">
                {content.description}
              </h2>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                {content.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 sm:px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 sm:mt-10 flex flex-row items-center justify-between">
                <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  {content.date}
                </span>
                <a
                  href={content.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 block rounded-lg sm:rounded-xl bg-black px-4 sm:px-6 py-1.5 sm:py-2 text-xs font-bold text-white hover:bg-gray-800 transition-colors active:scale-95"
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

