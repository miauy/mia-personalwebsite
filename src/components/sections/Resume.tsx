
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
import { Download, FileText, ExternalLink } from "lucide-react";

export function Resume() {
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
          <div className="max-w-md w-full mx-auto bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="p-6 flex flex-col items-center text-center">
              <FileText className="h-16 w-16 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mia Uy - Product Manager Resume</h3>
              <p className="text-muted-foreground mb-6">
                Check out my professional experience, education, and skills.
              </p>
              
              <div className="flex gap-4">
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button variant="outline" className="gap-2">
                      <FileText className="h-4 w-4" /> View Resume
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent className="max-h-[90vh]">
                    <div className="mx-auto w-full max-w-4xl">
                      <DrawerHeader>
                        <DrawerTitle>Mia Uy - Product Manager</DrawerTitle>
                        <DrawerDescription>Resume Preview</DrawerDescription>
                      </DrawerHeader>
                      <div className="p-4 overflow-auto max-h-[60vh]">
                        <div className="aspect-[8.5/11] bg-white border rounded-md shadow-sm p-8 mx-auto">
                          <h2 className="text-2xl font-bold mb-1">Mia Uy</h2>
                          <p className="text-muted-foreground mb-4">Product Manager</p>
                          
                          <div className="mb-6">
                            <h3 className="text-lg font-semibold border-b pb-1 mb-2">Contact</h3>
                            <p>hello@miauy.com • LinkedIn • GitHub</p>
                          </div>
                          
                          <div className="mb-6">
                            <h3 className="text-lg font-semibold border-b pb-1 mb-2">Experience</h3>
                            <div className="mb-4">
                              <div className="flex justify-between">
                                <span className="font-medium">TechCorp</span>
                                <span className="text-sm">2022 - Present</span>
                              </div>
                              <p className="font-medium">Associate Product Manager</p>
                              <ul className="list-disc list-inside text-sm space-y-1 mt-1">
                                <li>Led user research initiatives and collaborated with engineering teams</li>
                                <li>Conducted A/B testing to optimize user flows</li>
                                <li>Delivered product features that increased user engagement by 25%</li>
                              </ul>
                            </div>
                            
                            <div className="mb-4">
                              <div className="flex justify-between">
                                <span className="font-medium">InnovateTech</span>
                                <span className="text-sm">2021 - 2022</span>
                              </div>
                              <p className="font-medium">Product Management Intern</p>
                              <ul className="list-disc list-inside text-sm space-y-1 mt-1">
                                <li>Assisted in roadmap planning and feature prioritization</li>
                                <li>Conducted competitive analysis and gathered user feedback</li>
                              </ul>
                            </div>
                          </div>
                          
                          <div className="mb-6">
                            <h3 className="text-lg font-semibold border-b pb-1 mb-2">Education</h3>
                            <div className="flex justify-between">
                              <span className="font-medium">Bachelor of Science in Information Technology</span>
                              <span className="text-sm">2017 - 2021</span>
                            </div>
                            <p className="text-sm">University of Technology</p>
                          </div>
                          
                          <div>
                            <h3 className="text-lg font-semibold border-b pb-1 mb-2">Skills</h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {["User Research", "Product Strategy", "Wireframing", "Prototyping", "User Stories", "Roadmapping", "Data Analysis", "A/B Testing", "Agile Methodologies", "UI/UX Design"].map((skill, i) => (
                                <span key={i} className="px-2 py-0.5 bg-secondary text-xs rounded">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <DrawerFooter>
                        <Button className="gap-2">
                          <Download className="h-4 w-4" /> Download PDF
                        </Button>
                        <DrawerClose asChild>
                          <Button variant="outline">Close</Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </div>
                  </DrawerContent>
                </Drawer>
                
                <Button variant="default" className="gap-2">
                  <Download className="h-4 w-4" /> Download PDF
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
