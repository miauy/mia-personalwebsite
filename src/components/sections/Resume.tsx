import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Download, FileText, Github } from "lucide-react";

export function Resume() {
  const resumeUrl = "https://drive.google.com/file/d/1o5OvBBlXKuijQpNGnnsJA8S_s6ExcUER/view?usp=share_link";
  
  return (
    <section id="resume" className="py-24 bg-secondary/30">
      <Container>
        <div className="flex flex-col items-center text-center mb-16">
          <div
            className={cn(
              "inline-block mb-4 px-4 py-1.5 rounded-full",
              "bg-primary/5 text-primary text-sm font-medium",
              "dark:bg-primary/10"
            )}
          >
            Resume
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
            My Professional Background
          </h2>
          <p className="text-muted-foreground mb-0 max-w-2xl">
            View my resume to learn more about my education, skills, and work experience.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="max-w-md w-full mx-auto bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 mb-8">
            <div className="p-6 flex flex-col items-center text-center">
              <FileText className="h-16 w-16 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mia Uy - Resume</h3>
              <p className="text-muted-foreground mb-6">
                Check out my professional experience, education, and skills.
              </p>
              
              <div className="flex justify-center w-full">
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button variant="outline" className="gap-2 text-sm w-full" size="sm">
                    <FileText className="h-4 w-4" /> View Resume
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center w-full max-w-md mx-auto">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center space-x-4 p-4 rounded-lg transition-all hover:bg-secondary"
            >
              <div className="bg-primary/10 p-4 rounded-full">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-medium text-lg">GitHub</h3>
                <p className="text-muted-foreground">github.com/miauy</p>
              </div>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
