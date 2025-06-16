
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { Download, Mail, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      className="min-h-screen py-32 flex items-center relative overflow-hidden bg-secondary/30"
      id="hero"
    >
      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            {/* Main heading - edit your name here */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-8 opacity-0 animate-fade-in [animation-delay:400ms]">
              Hi I'm <span className="text-primary">Mia!</span>
            </h1>
            
            {/* Bio text - edit your personal statement here */}
            {/* Font size reduced by 3 sizes from text-xl/2xl to text-xs/sm */}
            <p className="text-gray-800 max-w-xl mb-10 text-xs md:text-sm opacity-0 animate-fade-in [animation-delay:600ms]">
              I am a senior at the University of Miami studying Computer Science and Immersive Media. I want to leverage my technical background to bridge the gap between users and technology to create experiences that matter.
            </p>
            
            {/* Call-to-action buttons - edit links and text here */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 opacity-0 animate-fade-in [animation-delay:800ms]">
              <Button asChild size="lg" className="rounded-full px-8 gap-2 bg-primary hover:bg-primary/80">
                <a href="#contact">
                  <Mail className="h-4 w-4" /> Connect!
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 gap-2 border-primary/30 text-primary hover:bg-secondary/50">
                <a href="#resume">
                  <Download className="h-4 w-4" /> View Resume
                </a>
              </Button>
            </div>
          </div>
          
          {/* Profile image container - replace image src to change your photo */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end opacity-0 animate-fade-in [animation-delay:600ms]">
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-xl ring-2 ring-primary/20">
              <img 
                src="/lovable-uploads/903c31a3-df23-4391-b24c-9fb7cf8d3a5d.png" 
                alt="Mia Uy" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
      
      {/* Animated scroll down arrow - moved to very bottom of section */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex justify-center">
        <div className="opacity-0 animate-fade-in [animation-delay:1000ms]">
          <ChevronDown className="h-10 w-10 text-primary animate-float cursor-pointer" 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} />
        </div>
      </div>
    </section>
  );
}
