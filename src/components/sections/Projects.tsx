
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, GitBranch, Star } from "lucide-react";

const projects = [
  {
    title: "User Insights Dashboard",
    description: "A comprehensive dashboard for analyzing user behavior and product usage patterns.",
    tags: ["Product Analytics", "User Research", "Data Visualization"],
    link: "#"
  },
  {
    title: "Feature Prioritization Framework",
    description: "A structured approach to evaluate and prioritize product features based on impact and effort.",
    tags: ["Product Strategy", "Roadmapping", "Decision Framework"],
    link: "#"
  },
  {
    title: "Mobile App Redesign",
    description: "Led the redesign of a mobile application to improve user experience and engagement metrics.",
    tags: ["UX Design", "Mobile", "User Testing"],
    link: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <Container>
        <div className="flex flex-col items-center text-center mb-16">
          <div
            className={cn(
              "inline-block mb-4 px-4 py-1.5 rounded-full",
              "bg-primary/5 text-primary text-sm font-medium",
              "dark:bg-primary/10"
            )}
          >
            Projects
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
            Featured Work
          </h2>
          <p className="text-muted-foreground mb-0 max-w-2xl">
            A selection of my recent product management projects and case studies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="flex flex-col h-full hover:shadow-md transition-all duration-300 overflow-hidden border border-border hover:border-primary/20"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <Button asChild variant="ghost" className="gap-2 hover:bg-transparent hover:text-primary p-0 h-auto">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
