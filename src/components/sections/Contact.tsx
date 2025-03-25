
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex-col">
            <div
              className={cn(
                "w-[87] inline-block mb-4 px-3 py-2 rounded-full text-center",
                "bg-primary/5 text-primary text-sm font-medium",
                "dark:bg-primary/10"
              )}
            >
              Contact
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
              Let's connect!
            </h2>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-secondary p-2 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a href="mailto:miauy@miami.edu" className="text-muted-foreground hover:text-primary transition-colors">
                    miauy@miami.edu
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-secondary p-2 rounded-full mr-4">
                  <Linkedin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/miaauy/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    linkedin.com/in/miaauy
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-secondary p-2 rounded-full mr-4">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">GitHub</h3>
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    github.com/miauy
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm border border-primary/10 self-start">
            <h3 className="font-display font-semibold text-xl mb-6 text-primary">Send Me a Message</h3>
            <form className="space-y-4">
              <div>
                <Input placeholder="Your Name" className="w-full focus-visible:ring-primary" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" className="w-full focus-visible:ring-primary" />
              </div>
              <div>
                <Textarea placeholder="Your Message" className="w-full min-h-[120px] focus-visible:ring-primary" />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/80">Send Message</Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
