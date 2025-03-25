
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      className="min-h-screen pt-24 pb-16 flex flex-col justify-center relative overflow-hidden"
      id="hero"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl opacity-50"></div>
      </div>
      
      <Container className="relative z-10 flex flex-col items-center justify-center flex-1 text-center">
        <div
          className={cn(
            "inline-block mb-6 px-4 py-1.5 rounded-full",
            "bg-primary/5 text-primary text-sm font-medium",
            "dark:bg-primary/10",
            "opacity-0 animate-fade-in [animation-delay:200ms]"
          )}
        >
          Product Manager
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6 max-w-4xl opacity-0 animate-fade-in [animation-delay:400ms]">
          Hi, I'm <span className="text-primary">Mia Uy</span>
          <br />
          <span className="text-3xl md:text-5xl lg:text-6xl text-muted-foreground">Crafting Digital Experiences</span>
        </h1>
        
        <p className="text-muted-foreground max-w-xl mb-8 text-lg md:text-xl opacity-0 animate-fade-in [animation-delay:600ms]">
          Aspiring product manager passionate about creating intuitive and impactful digital solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-24 opacity-0 animate-fade-in [animation-delay:800ms]">
          <Button asChild size="lg" className="rounded-full px-8">
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8">
            <a href="#about">Learn More</a>
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
