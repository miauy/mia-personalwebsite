
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";

// Main page component that assembles all sections
// To edit the order of sections, reorder the components in the JSX below
// To remove a section, delete the component from the JSX below
// To add a section, import and add the component to the JSX below
const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-secondary/30">
      {/* Header: Contains navigation and site identity */}
      <Header />
      
      {/* Main content container */}
      <main className="flex-grow">
        {/* Hero Section: Landing section with your name and photo */}
        <Hero />
        
        {/* About Section: Information about you and your background */}
        <About />
        
        {/* Projects Section: Showcase of your work */}
        <Projects />
        
        {/* Resume Section: Educational and professional experience */}
        <Resume />
        
        {/* Contact Section: How to get in touch with you */}
        <Contact />
      </main>
      
      {/* Footer: Copyright, social links, etc. */}
      <Footer />
    </div>
  );
};

export default Index;
