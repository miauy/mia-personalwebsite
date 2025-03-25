
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Associate Product Manager",
    company: "TechCorp",
    period: "2022 - Present",
    description:
      "Led user research initiatives and collaborated with engineering teams to implement new features. Conducted A/B testing to optimize user flows.",
  },
  {
    title: "Product Management Intern",
    company: "InnovateTech",
    period: "2021 - 2022",
    description:
      "Assisted in roadmap planning and feature prioritization. Conducted competitive analysis and gathered user feedback to inform product decisions.",
  },
  {
    title: "UX Research Assistant",
    company: "DesignHub",
    period: "2020 - 2021",
    description:
      "Supported user research activities, including user interviews and usability testing. Created personas and journey maps to guide design decisions.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-secondary/50">
      <Container>
        <div className="flex flex-col items-center text-center mb-16">
          <div
            className={cn(
              "inline-block mb-4 px-4 py-1.5 rounded-full",
              "bg-primary/5 text-primary text-sm font-medium",
              "dark:bg-primary/10"
            )}
          >
            Experience
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
            My Professional Journey
          </h2>
          <p className="text-muted-foreground mb-0 max-w-2xl">
            Building expertise through diverse roles in product management and design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="group overflow-hidden border border-border hover:border-primary/20 transition-all duration-300 h-full"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl font-semibold">
                    {exp.title}
                  </CardTitle>
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Briefcase className="h-4 w-4 text-primary" />
                  </div>
                </div>
                <CardDescription className="flex flex-col">
                  <span className="font-medium text-foreground">{exp.company}</span>
                  <span className="text-muted-foreground">{exp.period}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
