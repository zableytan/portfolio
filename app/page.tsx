import Navbar from "@/components/ui/Navbar";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import FollowingPointerDemo from "@/components/following-pointer-demo";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      <main>
        <div className="h-screen flex items-center justify-center">
          <TextHoverEffect text="BAZLEY" />
        </div>
        <section className="min-h-screen py-20 flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Featured Projects</h2>
          <FollowingPointerDemo />
        </section>
      </main>
    </div>
  );
}
