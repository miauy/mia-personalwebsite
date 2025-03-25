
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { Mail, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <div
            className={cn(
              "inline-block mb-4 px-3 py-2 rounded-full text-center",
              "bg-primary/5 text-primary text-sm font-medium",
              "dark:bg-primary/10"
            )}
          >
            Contact
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-8">
            Let's connect!
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 space-y-6 md:space-y-0 mt-8">
            <a 
              href="mailto:miauy@miami.edu" 
              className="flex items-center space-x-4 p-4 w-full max-w-xs rounded-lg transition-all hover:bg-secondary"
            >
              <div className="bg-primary/10 p-4 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-medium text-lg">Email</h3>
                <p className="text-muted-foreground">miauy@miami.edu</p>
              </div>
            </a>

            <a 
              href="https://www.linkedin.com/in/miaauy/" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center space-x-4 p-4 w-full max-w-xs rounded-lg transition-all hover:bg-secondary"
            >
              <div className="bg-primary/10 p-4 rounded-full">
                <Linkedin className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-medium text-lg">LinkedIn</h3>
                <p className="text-muted-foreground">linkedin.com/in/miaauy</p>
              </div>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
