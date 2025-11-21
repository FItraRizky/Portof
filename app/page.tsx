import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Photos from "@/components/Photos";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <Photos />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
