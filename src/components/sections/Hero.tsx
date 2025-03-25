
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      className="min-h-screen pt-32 pb-16 flex flex-col justify-center relative overflow-hidden"
      id="hero"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl opacity-50"></div>
      </div>
      
      <Container className="relative z-10 flex flex-col items-start justify-center flex-1">
        <div
          className={cn(
            "inline-block mb-6 px-4 py-1.5 rounded-full",
            "bg-primary/5 text-primary text-sm font-medium",
            "dark:bg-primary/10",
            "opacity-0 animate-fade-in [animation-delay:200ms]"
          )}
        >
          Hello, I'm Mia Uy
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6 max-w-4xl opacity-0 animate-fade-in [animation-delay:400ms]">
          Product Manager & <span className="text-primary">UX Enthusiast</span>
        </h1>
        
        <p className="text-muted-foreground max-w-xl mb-10 text-lg md:text-xl opacity-0 animate-fade-in [animation-delay:600ms]">
          I'm a passionate product manager with a focus on user-centered design. I help bridge the gap between users and technology to create experiences that matter.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-24 opacity-0 animate-fade-in [animation-delay:800ms]">
          <Button asChild size="lg" className="rounded-full px-8 gap-2">
            <a href="#contact">
              <Mail className="h-4 w-4" /> Get in Touch
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 gap-2">
            <a href="#resume">
              <Download className="h-4 w-4" /> View Resume
            </a>
          </Button>
        </div>
        
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in [animation-delay:1000ms]">
          <a 
            href="#about"
            className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="h-5 w-5 animate-float" />
          </a>
        </div>
      </Container>
    </section>
  );
}
