import HeroSection from "@/components/hero-section";
import FollowingPointerDemo from "@/components/following-pointer-demo";
import ProfessionalExperience from "@/components/professional-experience";
import TechnicalSkills from "@/components/technical-skills";
import ContactSection from "@/components/contact-section";
import { CertificatesSection } from "@/components/certificates-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5EFE7] dark:bg-[#213555]">
      <HeroSection />
      <div id="projects" className="py-16">
        <h2 className="text-3xl font-bold text-[#213555] dark:text-[#F5EFE7] mb-8 text-center md:text-left px-6">
          Featured Projects
        </h2>
        <FollowingPointerDemo />
      </div>
      <ProfessionalExperience />
      <TechnicalSkills />
      <CertificatesSection />
      <ContactSection />
    </main>
  );
} 