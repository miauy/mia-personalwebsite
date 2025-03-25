
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      className="min-h-screen py-32 flex items-center relative overflow-hidden bg-white"
      id="hero"
    >
      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-8 opacity-0 animate-fade-in [animation-delay:400ms]">
              Hi I'm Mia!
            </h1>
            
            <p className="text-gray-800 max-w-xl mb-10 text-xl md:text-2xl opacity-0 animate-fade-in [animation-delay:600ms]">
              I am a junior at the University of Miami studying Computer Science and Immersive Media. I want to leverage my technical background to bridge the gap between users and technology to create experiences that matter.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8 opacity-0 animate-fade-in [animation-delay:800ms]">
              <Button asChild size="lg" className="rounded-full px-8 gap-2 bg-gray-900 hover:bg-gray-800">
                <a href="#contact">
                  <Mail className="h-4 w-4" /> Get in Touch
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 gap-2 border-gray-300 text-gray-800 hover:bg-gray-50">
                <a href="#resume">
                  <Download className="h-4 w-4" /> View Resume
                </a>
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center md:justify-end opacity-0 animate-fade-in [animation-delay:600ms]">
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-xl">
              <img 
                src="/lovable-uploads/903c31a3-df23-4391-b24c-9fb7cf8d3a5d.png" 
                alt="Mia Uy" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
