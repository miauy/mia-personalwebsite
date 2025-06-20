
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

// Categorized skills
const skillCategories = [
  {
    title: "Technical Skills",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "C", "C#", "HTML/CSS", "React", "Node.js", "Express", "Unity", "Three.js", "Git and GitHub"],
  },
  {
    title: "Design & UX",
    skills: ["Figma", "UI/UX Design", "Wireframing"],
  },
  {
    title: "Product & Project Management",
    skills: ["Product Strategy", "Project Management", "Agile Methodologies", "User Research", "Azure DevOps"],
  }
];

export function About() {
  return (
    <section id="about" className="py-24 relative bg-secondary/30">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <div
              className={cn(
                "inline-block mb-4 px-4 py-1.5 rounded-full",
                "bg-primary/5 text-primary text-sm font-medium",
                "dark:bg-primary/10"
              )}
            >
              About Me
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6 text-foreground">
              Crafting Digital Experiences
            </h2>
            <p className="text-muted-foreground mb-0 max-w-2xl">
              
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-4 max-w-2xl">
              <h3 className="text-xl font-semibold text-primary">Who I Am</h3>
              <div className="text-muted-foreground text-justify">
                <p>
                  I am a senior at the University of Miami studying Computer Science and Immersive Media. I am seeking a career in Product Management in the technology industry, specifically within extended reality (XR). I discovered my passion for XR during my time as a project manager at my university's Virtual Experience Simulation Lab (VESL), where I have managed XR projects from proposal to deployment. In addition to managing projects, I have also explored UI/UX design and created the user interface for a VR community garden simulation that teaches kids in underprivileged communities how and where food is grown.
                </p>
                <p className="mt-4">
                  Throughout college, I have developed one of my strongest skills: leadership. During my sophomore year, I co-founded and served as President of Kappa Theta Pi, my university's first and only Professional Technology Fraternity, for two years.
                </p>
                <p className="mt-4">
                  Outside of academia, you will find me on the pickleball courts, in the kitchen experimenting with new recipes, or in a studio crocheting and sewing.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-primary">My Skills</h3>
              
              <div className="flex flex-col gap-6">
                {skillCategories.map((category) => (
                  <div 
                    key={category.title}
                    className="bg-background/50 border border-border rounded-lg p-5 shadow-sm"
                  >
                    <h4 className="text-lg font-medium text-primary mb-3">{category.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
