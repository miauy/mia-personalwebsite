
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const skills = [
  "User Research",
  "Product Strategy",
  "Wireframing",
  "Prototyping",
  "User Stories",
  "Roadmapping",
  "Data Analysis",
  "A/B Testing",
  "Agile Methodologies",
  "UI/UX Design"
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <Container>
        <div className="max-w-3xl mx-auto">
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
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
              Delivering Exceptional Product Experiences
            </h2>
            <p className="text-muted-foreground mb-0 max-w-2xl">
              My journey into product management combines analytical thinking with a passion for user-centered design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Who I Am</h3>
              <p className="text-muted-foreground">
                I am a junior at the University of Miami studying Computer Science and Immersive Media. I am seeking a career in Product Management in the technology industry, specifically within extended reality (XR). I discovered my passion for XR during my time as a project manager at my university's Virtual Experience Simulation Lab (VESL), where I have managed XR projects from proposal to deployment. In addition to managing projects, I have also explored UI/UX design and created the user interface for a VR community garden simulation that teaches kids in underprivileged communities how and where food is grown.
              </p>
              <p className="text-muted-foreground">
                Throughout college, I have developed one of my strongest skills: leadership. During my sophomore year, I co-founded and served as President of Kappa Theta Pi, my university's first and only Professional Technology Fraternity, for two years.
              </p>
              <p className="text-muted-foreground">
                Outside of academia, you will find me on the pickleball courts, in the kitchen experimenting with new recipes, or in a studio crocheting and sewing.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">My Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
