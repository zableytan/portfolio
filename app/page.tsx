import Navbar from "@/components/ui/Navbar";
import FollowingPointerDemo from "@/components/following-pointer-demo";
import HeroSection from "@/components/hero-section";
import TechnicalSkills from "@/components/technical-skills";
import ProfessionalExperience from "@/components/professional-experience";
import ContactSection from "@/components/contact-section";
import CertificatesSection from "@/components/certificates-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5EFE7] dark:bg-[#213555]">
      <Navbar />
      <main>
        <HeroSection />
        <section id="projects" className="min-h-screen py-20 flex flex-col items-center justify-center bg-gradient-to-b from-[#F5EFE7] to-[#D8C4B6] dark:from-[#213555] dark:to-[#3E5879]">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#213555] dark:text-[#F5EFE7]">Featured Projects</h2>
          <FollowingPointerDemo />
        </section>
        <section className="min-h-screen py-16 bg-[#F5EFE7] dark:bg-[#213555]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <ProfessionalExperience />
              <TechnicalSkills />
            </div>
          </div>
        </section>
        <section className="min-h-screen py-16 bg-gradient-to-b from-[#F5EFE7] to-[#D8C4B6] dark:from-[#213555] dark:to-[#3E5879]">
          <div className="max-w-7xl mx-auto px-4">
            <CertificatesSection />
          </div>
        </section>
        <section id="contact" className="min-h-screen pt-10 pb-20 bg-gradient-to-b from-[#F5EFE7] to-[#D8C4B6] dark:from-[#213555] dark:to-[#3E5879]">
          <ContactSection />
        </section>
      </main>
    </div>
  );
}
