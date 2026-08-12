import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// ...

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-white">
      <Navbar />
      <Hero />
      <ProjectsSection />
      <Skills />
      <About />
      <Contact />
      <Footer/>
    </main>
  );
}