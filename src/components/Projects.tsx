import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Collaborative Video Sharing: A Web-Based Platform for Seamless Content Creation",
      description: "Built a seamless video content sharing and collaboration platform for creators and viewers, boosting user engagement by 40% with innovative video content sharing and interaction features.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "WebRTC"],
      github: "https://github.com/Samarth-Shekhar/Collaborative-Video-Sharing-Platform",
      demo: "https://github.com/Samarth-Shekhar/Collaborative-Video-Sharing-Platform", // ✅ Add live/demo URL here
      featured: true
    },
    {
      title: "AI-Enhanced Recipe Generator and Meal Planner App", 
      description: "Developed a cutting-edge application using OpenAI APIs for smart recipe generation and meal planning. Features personalized meal suggestions, grocery automation, and nutrition tracking with 95% accuracy.",
      technologies: ["Python", "OpenAI API", "Django", "PostgreSQL", "AI/ML"],
      github: "https://github.com/Samarth-Shekhar/AI-MEAL-RECIPE-PLANNER",
      demo: "https://github.com/Samarth-Shekhar/AI-MEAL-RECIPE-PLANNER",
      featured: true
    },
    {
      title: "Complaint Tracker: Complaint Management System",
      description: "Developed and implemented a full-stack complaint registration and tracking system for 200+ users, streamlining issue resolution and tracking processes with real-time updates.",
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "AJAX"],
      github: "https://github.com/Samarth-Shekhar/Complaint-Tracker-for-AAI",
      demo: "https://github.com/Samarth-Shekhar/Complaint-Tracker-for-AAI",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center space-x-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-accent">03.</span> Featured Projects
          </h2>
          <div className="h-px bg-muted flex-1 max-w-xs" />
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            >
              <div className={`${project.featured ? "md:grid md:grid-cols-2 md:gap-8" : ""}`}>
                
                {project.featured && (
                  <div
                    className="relative overflow-hidden cursor-pointer"
                    onClick={() => window.open(project.demo, "_blank")} // ✅ Clicking the image redirects
                  >
                    <div className="h-64 md:h-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                          <ExternalLink className="h-8 w-8 text-accent" />
                        </div>
                        <p className="text-accent font-mono text-sm">Featured Project</p>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className={project.featured ? "p-6 md:p-8" : ""}>
                  <CardHeader className={project.featured ? "p-0 pb-4" : ""}>
                    <div className="flex items-start justify-between">
                      <CardTitle
                        className="text-xl text-accent group-hover:text-accent/80 transition-colors cursor-pointer"
                        onClick={() => window.open(project.demo, "_blank")} // ✅ Clicking title also redirects
                      >
                        {project.title}
                      </CardTitle>
                      <div className="flex space-x-2 ml-4">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-muted-foreground hover:text-accent hover:scale-110 transition-all duration-200"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className={project.featured ? "p-0" : ""}>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 hover:scale-105 transition-all duration-200 text-xs cursor-default"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            onClick={() => window.open("https://github.com/Samarth-Shekhar", "_blank")}
          >
            View More Projects <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
