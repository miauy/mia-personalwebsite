
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer";
import { Download, FileText, ExternalLink, Github } from "lucide-react";

export function Resume() {
  const resumeUrl = "/lovable-uploads/2354da66-563f-4f42-91a8-27f3d6c10749.png";
  
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
              
              {/* Modified flex layout to center buttons, using justify-center */}
              <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button variant="outline" className="gap-2 text-sm" size="sm">
                      <FileText className="h-4 w-4" /> View Resume
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent className="max-h-[90vh]">
                    <div className="mx-auto w-full max-w-4xl">
                      <DrawerHeader>
                        <DrawerTitle>Mia Uy</DrawerTitle>
                        <DrawerDescription>Resume</DrawerDescription>
                      </DrawerHeader>
                      <div className="p-4 overflow-auto max-h-[70vh]">
                        <div className="bg-white rounded-md shadow-sm mx-auto">
                          <img 
                            src={resumeUrl} 
                            alt="Mia Uy's Resume" 
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      </div>
                      <DrawerFooter>
                        <a href={resumeUrl} download="Mia_Uy_Resume.png">
                          <Button className="gap-2">
                            <Download className="h-4 w-4" /> Download Resume
                          </Button>
                        </a>
                        <DrawerClose asChild>
                          <Button variant="outline">Close</Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </div>
                  </DrawerContent>
                </Drawer>
                
                <a href={resumeUrl} download="Mia_Uy_Resume.png" className="w-full sm:w-auto">
                  <Button variant="default" className="gap-2 text-sm w-full" size="sm">
                    <Download className="h-4 w-4" /> Download Resume
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* GitHub link, centered below resume container */}
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
