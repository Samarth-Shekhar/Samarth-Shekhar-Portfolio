import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Essentia",
      location: "Remote",
      period: "10 June 2024 - 17 July 2024",
      description:
        "Improved page responsiveness by 20% and reduced page load time by 15% using commercial UI/UX designs. Collaborated with the development team to implement responsive web solutions.",
      technologies: ["React", "JavaScript", "HTML", "CSS", "UI/UX"],
    },
    {
      title: "AI & Automation Intern",
      company: "Marksman Technologies Pvt. Ltd.",
      location: "Remote",
      period: "20 May 2024 - 30 June 2024",
      description:
        "Built and optimized RAG pipeline using Grok LLM and automated recipe and grocery generation with 95% accuracy using Grok LLM and Selenium WebDriver.",
      technologies: ["Python", "AI/ML", "Selenium", "LLM"],
    },
    {
      title: "IT Intern",
      company: "Airports Authority of India",
      location: "Delhi",
      period: "7 May 2024 - 31 May 2024",
      description:
        "Built and implemented an innovative airport announcement system that reduced noise complaint resolution time by 30% and streamlined tracking for 5+ airport announcements.",
      technologies: ["System Design", "Python", "Database Management"],
    },
    {
      title: "React.js Intern",
      company: "Celebal Technologies",
      location: "Remote",
      period: "19 May 2025 - 20 July 2025",
      description:
        "Built and integrated 10+ reusable React components, improving UI/UX consistency by 25% across 3 enterprise apps and reducing code duplication by 40%.",
      technologies: ["React.js", "JavaScript", "HTML", "CSS", "UI/UX"],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center space-x-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-accent">02.</span> Professional Experience
          </h2>
          <div className="h-px bg-muted flex-1 max-w-xs" />
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-accent/50 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-accent group-hover:text-accent/80 transition-colors">
                      {exp.title}
                    </CardTitle>
                    <p className="text-lg font-semibold text-foreground">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center text-muted-foreground text-sm">
                      <CalendarDays className="h-4 w-4 mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <MapPin className="h-4 w-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
