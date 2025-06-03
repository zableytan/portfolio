import Navbar from "@/components/ui/Navbar";
import FollowingPointerDemo from "@/components/following-pointer-demo";
import HeroSection from "@/components/hero-section";
import TechnicalSkills from "@/components/technical-skills";
import ProfessionalExperience from "@/components/professional-experience";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#333446]">
      <Navbar />
      <main>
        <HeroSection />
        <section id="projects" className="min-h-screen py-20 flex flex-col items-center justify-center bg-gradient-to-b from-[#EAEFEF] to-[#B8CFCE] dark:from-[#333446] dark:to-[#7F8CAA]">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#333446] dark:text-[#EAEFEF]">Featured Projects</h2>
          <FollowingPointerDemo />
        </section>
        <section className="min-h-screen py-16 bg-[#EAEFEF] dark:bg-[#333446]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <ProfessionalExperience />
              <TechnicalSkills />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
