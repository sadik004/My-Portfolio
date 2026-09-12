import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import Marquee from "@/components/motion/marquee";
import ProjectList from "@/components/sections/project-list";
import Footer from "@/components/sections/footer";
import Preloader from "@/components/motion/preloader";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0c] text-neutral-900 dark:text-neutral-100 selection:bg-neutral-900 selection:text-white relative">
      <Preloader />
      <Navbar />
      <Hero />
      <Marquee />
      <ProjectList />
      <Footer />
    </main>
  );
}