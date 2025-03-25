
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      className="min-h-screen py-32 flex items-center relative overflow-hidden bg-white"
      id="hero"
    >
      <Container className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div
            className={cn(
              "inline-block mb-6 px-4 py-1.5 rounded-full",
              "bg-gray-100 text-gray-800 text-sm font-medium",
              "opacity-0 animate-fade-in [animation-delay:200ms]"
            )}
          >
            Hello, I'm Mia Uy
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 max-w-xl opacity-0 animate-fade-in [animation-delay:400ms]">
            Product Manager & <span className="text-gray-800">UX Enthusiast</span>
          </h1>
          
          <p className="text-gray-600 max-w-xl mb-10 text-lg md:text-xl opacity-0 animate-fade-in [animation-delay:600ms]">
            I'm a passionate product manager with a focus on user-centered design. I help bridge the gap between users and technology to create experiences that matter.
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
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-xl">
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
              Profile Image
            </div>
          </div>
        </div>
        
        <div className="col-span-1 md:col-span-2 flex justify-center mt-8 opacity-0 animate-fade-in [animation-delay:1000ms]">
          <a 
            href="#about"
            className="flex flex-col items-center text-gray-500 hover:text-gray-900 transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="h-5 w-5 animate-float" />
          </a>
        </div>
      </Container>
    </section>
  );
}
